#!/usr/bin/env node

/**
 * Monthly Location Data Update Script
 *
 * This script:
 * 1. Validates the locations.json structure
 * 2. Updates metadata dates
 * 3. Flags data that may be stale
 * 4. Creates a report for manual review
 *
 * Future enhancements: API integrations for BOM, AER, ABS data
 */

const fs = require('fs');
const path = require('path');

// File paths
const LOCATIONS_FILE = path.join(__dirname, '../data/locations.json');

// Required fields for validation
const REQUIRED_LOCATION_FIELDS = {
  energy: ['distributor', 'avg_price_kwh', 'nsw_avg_price_kwh', 'price_premium_pct', 'outage_minutes_2024'],
  climate: ['avg_winter_temp', 'avg_summer_temp', 'days_below_zero', 'peak_sun_hours', 'snow_days'],
  census: ['total_dwellings', 'unoccupied_pct', 'median_income', 'solar_pct', 'population'],
  market: ['property_type', 'tourism_season', 'primary_industry']
};

const EXPECTED_LOCATIONS = [
  'jindabyne', 'thredbo', 'perisher', 'charlotte-pass', 'crackenback',
  'berridale', 'cooma', 'kalkite', 'dalgety', 'adaminaby', 'east-jindabyne', 'guthega'
];

/**
 * Main execution function
 */
async function main() {
  console.log('🔍 Starting monthly location data update...\n');

  try {
    // Read current data
    const rawData = fs.readFileSync(LOCATIONS_FILE, 'utf8');
    const data = JSON.parse(rawData);

    // Validate structure
    console.log('✅ Validating JSON structure...');
    const validationErrors = validateStructure(data);

    if (validationErrors.length > 0) {
      console.error('❌ Validation errors found:');
      validationErrors.forEach(error => console.error(`  - ${error}`));
      process.exit(1);
    }
    console.log('✅ JSON structure valid\n');

    // Check for stale data
    console.log('📊 Checking for stale data...');
    const staleDataWarnings = checkStaleData(data);
    if (staleDataWarnings.length > 0) {
      console.log('⚠️  Stale data detected:');
      staleDataWarnings.forEach(warning => console.log(`  - ${warning}`));
    } else {
      console.log('✅ Data is up to date\n');
    }

    // Update metadata
    console.log('📅 Updating metadata...');
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    data._metadata.last_updated = formatDate(today);
    data._metadata.next_update_due = formatDate(nextMonth);
    data._metadata.verified_by = 'Automated Monthly Update';
    data._metadata.update_schedule = 'monthly';

    // Set environment variables for GitHub Actions
    if (process.env.GITHUB_ENV) {
      fs.appendFileSync(
        process.env.GITHUB_ENV,
        `UPDATE_DATE=${formatDate(today)}\nNEXT_UPDATE=${formatDate(nextMonth)}\n`
      );
    }

    // Write updated data back
    fs.writeFileSync(
      LOCATIONS_FILE,
      JSON.stringify(data, null, 2) + '\n',
      'utf8'
    );
    console.log('✅ Metadata updated\n');

    // Generate summary report
    console.log('📋 Update Summary:');
    console.log(`  - Locations validated: ${EXPECTED_LOCATIONS.length}`);
    console.log(`  - Last updated: ${data._metadata.last_updated}`);
    console.log(`  - Next update due: ${data._metadata.next_update_due}`);

    if (staleDataWarnings.length > 0) {
      console.log(`  - Warnings: ${staleDataWarnings.length}`);
    }

    console.log('\n✅ Monthly update complete!');

  } catch (error) {
    console.error('❌ Error during update:', error.message);
    process.exit(1);
  }
}

/**
 * Validate the structure of locations.json
 */
function validateStructure(data) {
  const errors = [];

  // Check all expected locations exist
  EXPECTED_LOCATIONS.forEach(location => {
    if (!data[location]) {
      errors.push(`Missing location: ${location}`);
    }
  });

  // Check each location has required fields
  Object.keys(data).forEach(locationKey => {
    if (locationKey === '_metadata') return;

    const location = data[locationKey];

    // Check main sections exist
    Object.keys(REQUIRED_LOCATION_FIELDS).forEach(section => {
      if (!location[section]) {
        errors.push(`${locationKey}: missing ${section} section`);
        return;
      }

      // Check required fields in each section
      REQUIRED_LOCATION_FIELDS[section].forEach(field => {
        if (location[section][field] === undefined) {
          errors.push(`${locationKey}.${section}: missing field "${field}"`);
        }
      });
    });

    // Validate price_premium_pct calculation
    if (location.energy) {
      const calculated = Math.round(
        ((location.energy.avg_price_kwh - location.energy.nsw_avg_price_kwh) /
         location.energy.nsw_avg_price_kwh) * 100
      );
      if (Math.abs(calculated - location.energy.price_premium_pct) > 1) {
        errors.push(
          `${locationKey}.energy.price_premium_pct: calculated ${calculated}%, stored ${location.energy.price_premium_pct}%`
        );
      }
    }
  });

  // Check metadata exists
  if (!data._metadata) {
    errors.push('Missing _metadata section');
  } else {
    if (!data._metadata.last_updated) errors.push('Missing _metadata.last_updated');
    if (!data._metadata.data_sources) errors.push('Missing _metadata.data_sources');
  }

  return errors;
}

/**
 * Check for data that may be stale based on last update date
 */
function checkStaleData(data) {
  const warnings = [];
  const lastUpdated = new Date(data._metadata.last_updated);
  const now = new Date();
  const daysSinceUpdate = Math.floor((now - lastUpdated) / (1000 * 60 * 60 * 24));

  // Warn if data hasn't been updated in 45+ days
  if (daysSinceUpdate > 45) {
    warnings.push(`Data not updated in ${daysSinceUpdate} days (last: ${data._metadata.last_updated})`);
  }

  // Check if we're in a quarter where pricing should be updated
  const currentMonth = now.getMonth() + 1; // 1-12
  const quarterMonths = [1, 4, 7, 10]; // Jan, Apr, Jul, Oct
  if (quarterMonths.includes(currentMonth)) {
    warnings.push('Quarterly pricing update due this month (AER data)');
  }

  // Check if year changed (annual updates needed)
  const currentYear = now.getFullYear();
  const updateYear = lastUpdated.getFullYear();
  if (currentYear > updateYear) {
    warnings.push('Annual climate data update needed (BOM data)');
    warnings.push('Annual outage data update needed (Essential Energy)');
    warnings.push('Annual solar penetration update needed (CER data)');
  }

  // Check if census year (every 5 years)
  if (currentYear === 2026 && currentMonth >= 8) {
    warnings.push('2026 Census data will be available - update census fields');
  }

  return warnings;
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// Run the script
main();
