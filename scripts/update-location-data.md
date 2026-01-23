# Monthly Location Data Update Process

**Schedule**: 23rd of each month
**Next Update Due**: Check `data/locations.json` → `_metadata.last_updated`

## Data Sources

### 1. Bureau of Meteorology (BOM)
**URL**: http://www.bom.gov.au/climate/data/

**What to Update** (annually):
- Peak sun hours (annual average)
- Days below 0°C (annual count)
- Snow days (annual count)
- Extreme weather days (storms, high winds)

**Stations**:
- Jindabyne: 071041
- Thredbo: 071032
- Perisher: 071003
- Charlotte Pass: 071004
- Cooma: 070217

### 2. Australian Energy Regulator (AER)
**URL**: https://www.aer.gov.au/industry/registers/resources/charts

**What to Update** (quarterly):
- Average electricity price per kWh
- NSW average price (for comparison)
- Price premium percentage

**What to Update** (annually):
- Essential Energy network reliability data
- Outage minutes per customer (SAIDI)

### 3. Australian Bureau of Statistics (ABS)
**URL**: https://www.abs.gov.au/census

**What to Update** (every 5 years after census):
- Total dwellings
- Unoccupied dwelling percentage
- Median household income
- Pre-1980 dwellings percentage
- Solar penetration percentage
- Population and growth

**Next Census**: 2026

### 4. Clean Energy Regulator (CER)
**URL**: http://www.cleanenergyregulator.gov.au/

**What to Update** (annually):
- Solar penetration by postcode
- Small-scale installation data

## Update Process

### Step 1: Gather New Data
1. Visit each data source
2. Download latest reports for Snowy Mountains region
3. Extract relevant figures for each location
4. Document sources and dates

### Step 2: Update JSON File
1. Open `data/locations.json`
2. Update relevant fields for each location
3. Update `_metadata.last_updated` to current date
4. Update `_metadata.next_update_due` to next month
5. Add notes about what changed

### Step 3: Verify Accuracy
1. Cross-check figures between sources
2. Ensure percentages and calculations are correct
3. Verify all 12 locations are updated
4. Check data makes sense (no extreme outliers)

### Step 4: Deploy
```bash
git add data/locations.json
git commit -m "Monthly data update: [Month Year]

Updated:
- [List changes]

Sources:
- BOM: [date]
- AER: [date]
- ABS: [date if updated]
"
git push origin main
```

### Step 5: Verify Live Site
1. Visit a few service+location pages
2. Verify new data is displaying correctly
3. Check that content makes sense with new figures

## Automated Checks (Future Enhancement)

### Set up GitHub Actions to:
1. Remind you on the 23rd of each month
2. Validate JSON structure
3. Flag extreme changes (>20% difference)
4. Check all locations have same field structure

### API Integration Ideas:
- BOM API for weather data (if available)
- ABS.Stat API for census data
- AER API for pricing (if available)

## Monthly Checklist

- [ ] Download BOM data (annual update only)
- [ ] Check AER for pricing updates
- [ ] Check Essential Energy for outage data
- [ ] Update location JSON
- [ ] Update metadata dates
- [ ] Commit and push changes
- [ ] Verify live site displays correctly
- [ ] Update Google Reviews component if new reviews
- [ ] Check schema markup is valid

## Contact Information

**Essential Energy Customer Service**: 13 23 91
**BOM Climate Services**: http://www.bom.gov.au/climate/data/
**AER Inquiries**: https://www.aer.gov.au/

## Notes

- Keep a changelog of major updates
- Screenshot old data before making significant changes
- If unsure about a figure, use previous month's data
- Extreme changes (>30%) should be flagged and verified
- Consider seasonal variations (winter vs summer pricing, outage rates)
