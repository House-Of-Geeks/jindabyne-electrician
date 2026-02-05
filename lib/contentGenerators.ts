import locationDataImport from '../data/locations.json'

const locationData = locationDataImport as Record<string, any>

// Generate location-specific intro content based on service type
export function generateLocationServiceIntro(service: string, location: string): string {
  const loc = locationData[location]
  if (!loc) return ''

  const intros: Record<string, (l: any) => string> = {
    'solar-battery': (l) => {
      const payback = (25000 / (l.climate.peak_sun_hours * 365 * 3.6 * l.energy.avg_price_kwh)).toFixed(1)
      return `Despite being in the Snowy Mountains, ${l.name} receives an average of ${l.climate.peak_sun_hours} peak sun hours daily—enough for a 6.6kW system to generate approximately ${Math.round(l.climate.peak_sun_hours * 365 * 3.6)} kWh annually. With ${l.energy.distributor} charging an average of ${Math.round(l.energy.avg_price_kwh * 100)}c/kWh (${l.energy.price_premium_pct}% above the NSW average), ${l.name} homeowners see faster solar payback than most of the state. Currently only ${l.census.solar_pct}% of local homes have solar installed—significant savings are being left on the table.`
    },
    'battery-storage': (l) => {
      return `${l.name} experiences ${l.climate.days_below_zero} days below freezing annually, with ${l.climate.extreme_weather_days} extreme weather events recorded last year. The ${l.energy.distributor} network in this region averaged ${l.energy.outage_minutes_2024} unplanned outage minutes per customer in 2024. For properties in ${l.name}${l.census.unoccupied_pct > 40 ? `, where ${l.census.unoccupied_pct}% of dwellings are unoccupied holiday homes,` : ''} a battery backup system ensures you're never left without power—or heat—when you need it most.`
    },
    'starlink-installation': (l) => {
      return `Many properties in ${l.name} experience poor NBN coverage or rely on slow fixed wireless connections. Starlink satellite internet delivers 50-200Mbps download speeds regardless of location—perfect for ${l.name}'s ${l.census.unoccupied_pct > 40 ? 'holiday homes and' : ''} remote alpine properties. With prevailing ${l.climate.prevailing_wind.toLowerCase()} winds and ${l.climate.snow_days} snow days annually, professional installation ensures your dish is properly positioned and weatherproofed for ${l.name}'s alpine conditions.`
    },
    'underfloor-heating': (l) => {
      return `${l.name} averages ${l.climate.days_below_zero} days below 0°C each year, with winter temperatures regularly dropping to ${l.climate.avg_winter_temp}°C. Underfloor heating provides consistent, luxurious warmth throughout these cold months without the drafts of traditional heating systems. Perfect for ${l.name}'s ${l.market.property_type.includes('ski') || l.market.property_type.includes('holiday') ? 'ski lodges, holiday homes,' : ''} alpine properties where warm floors make all the difference.`
    },
    'switchboard-upgrades': (l) => {
      return `${l.census.pre1980_dwellings_pct}% of dwellings in ${l.name} were built before 1980, many still running on original electrical infrastructure. If your ${l.name} home has ceramic fuses instead of modern circuit breakers, you're at higher risk of electrical fire and don't have proper safety switch protection required by current NSW standards.`
    },
    'ev-charger-installation': (l) => {
      return `EV registrations in the Snowy Mountains region continue to grow as more visitors arrive in electric vehicles. For ${l.name} properties—especially${l.census.unoccupied_pct > 40 ? ' holiday homes and' : ''} those used as rentals—having an EV charger installed is becoming a competitive advantage. Combined with ${l.name}'s ${l.climate.peak_sun_hours} peak sun hours daily, you can charge your EV with free solar energy.`
    },
    'smoke-alarm-installation': (l) => {
      return `All NSW properties must have working photoelectric smoke alarms—no exceptions. ${l.census.unoccupied_pct > 40 ? `With ${l.census.unoccupied_pct}% of ${l.name} dwellings being holiday homes, interconnected alarms with monitoring provide peace of mind even when you're not there.` : `For ${l.name} homeowners and landlords, compliant smoke alarms are essential for insurance and rental compliance.`}`
    },
    'emergency-electrical': (l) => {
      return `With ${l.energy.outage_minutes_2024} minutes of unplanned outages recorded in ${l.name}'s ${l.energy.distributor} network last year, and ${l.climate.extreme_weather_days} extreme weather days annually, electrical emergencies happen. When temperatures drop to ${l.climate.avg_winter_temp}°C in winter, power loss isn't just an inconvenience—it's a risk to your property and pipes.`
    },
    'lighting-power': (l) => {
      return `From LED lighting upgrades to additional power points, ${l.name} properties need reliable electrical services. Whether you're renovating an older home (${l.census.pre1980_dwellings_pct}% of local dwellings were built pre-1980) or updating a newer property, quality electrical work ensures your ${l.name} home meets modern standards.`
    },
    'ski-lodge-accommodation': (l) => {
      return `${l.name}'s ${l.market.property_type.includes('ski') ? 'ski lodges and' : ''} accommodation properties face unique electrical demands${l.climate.days_below_zero > 100 ? `, with ${l.climate.days_below_zero} days below freezing annually` : ''}. From guest room fit-outs to commercial kitchen power and common area systems, we understand the specific needs of ${l.name}'s hospitality sector.`
    },
    'retail-hospitality': (l) => {
      return `${l.name} businesses need electrical contractors who understand ${l.market.tourism_season === 'winter_only' ? 'seasonal operations and' : ''} the demands of retail and hospitality. From shop fit-outs to commercial kitchen installations, we provide fast, code-compliant electrical work that minimizes disruption to your ${l.name} business.`
    },
    'commercial-solar': (l) => {
      const commercialSavings = Math.round(l.climate.peak_sun_hours * 365 * 20 * l.energy.avg_price_kwh)
      return `With ${l.energy.distributor} charging businesses ${Math.round(l.energy.avg_price_kwh * 100)}c/kWh—${l.energy.price_premium_pct}% above the NSW average—commercial solar makes strong financial sense in ${l.name}. A 20kW commercial system generating approximately ${Math.round(l.climate.peak_sun_hours * 365 * 20)} kWh annually can save around $${commercialSavings.toLocaleString()} per year on electricity costs.`
    },
    'commercial-switchboards': (l) => {
      return `${l.name} businesses adding commercial kitchens, HVAC systems, or heavy machinery need proper three-phase power and modern switchboards. We handle commercial switchboard upgrades that meet ${l.energy.distributor}'s connection requirements and Australian Standards.`
    },
    'data-communications': (l) => {
      return `Reliable data and communications infrastructure is essential for ${l.name} businesses${l.market.property_type.includes('accommodation') || l.market.property_type.includes('hotel') ? ', especially accommodation properties where guest WiFi is expected' : ''}. We install Cat6 networking, commercial WiFi systems, and structured cabling throughout ${l.name}.`
    },
    'emergency-exit-lighting': (l) => {
      return `All commercial buildings in ${l.name} require NSW Building Code compliant emergency and exit lighting. Whether you're operating ${l.market.property_type.includes('lodge') || l.market.property_type.includes('accommodation') ? 'a ski lodge, hotel,' : 'a shop, cafe,'} or office, we ensure your ${l.name} business meets all safety requirements with proper emergency lighting systems.`
    },
    'test-tag': (l) => {
      return `NSW Work Health & Safety legislation requires regular test and tag compliance for all ${l.name} businesses. From ${l.market.property_type.includes('lodge') || l.market.property_type.includes('accommodation') ? 'ski lodge equipment to' : ''} office appliances${l.market.property_type.includes('retail') || l.market.property_type.includes('hospitality') ? ', commercial kitchen gear,' : ''} and power tools, we provide comprehensive testing services for ${l.name} commercial premises.`
    }
  }

  const generator = intros[service]
  return generator ? generator(loc) : ''
}

// Generate why local content
export function generateWhyLocal(location: string): {title: string, description: string}[] {
  const loc = locationData[location]
  if (!loc) return []

  return [
    {
      title: "Fast Local Response",
      description: `Based near ${loc.name}, we provide fast response times for installations, repairs, and emergency electrical work throughout the area. Response times are critical ${loc.climate.extreme_weather_days > 20 ? `when ${loc.name} experiences ${loc.climate.extreme_weather_days} extreme weather days annually` : `for ${loc.name} properties`}.`
    },
    {
      title: "Alpine Property Experience",
      description: `Deep understanding of ${loc.name} properties and the unique electrical challenges${loc.climate.days_below_zero > 100 ? ` of locations with ${loc.climate.days_below_zero} days below freezing` : ' of Snowy Mountains homes'}. We know what works in ${loc.name}'s ${loc.climate.avg_winter_temp < 0 ? 'extreme' : 'cold'} alpine conditions.`
    },
    {
      title: `${loc.energy.distributor} Network Experience`,
      description: `Extensive experience with ${loc.energy.distributor}'s local network in ${loc.name}, including connection requirements${loc.energy.outage_minutes_2024 > 250 ? `, and understanding the ${Math.round(loc.energy.outage_minutes_2024 / 60)} hours of annual outages that make backup power essential` : ''}.`
    },
    {
      title: "Licensed & Compliant",
      description: `All work completed by NSW licensed electricians with full insurance. Compliance certification provided for ${loc.name} properties—essential for council, insurance, and ${loc.census.unoccupied_pct > 40 ? 'holiday rental' : 'property'} requirements.`
    }
  ]
}

// Generate location statistics for display
export function getLocationStats(location: string) {
  const loc = locationData[location]
  if (!loc) return null

  return {
    name: loc.name,
    climate: {
      winterTemp: loc.climate.avg_winter_temp,
      daysBlowZero: loc.climate.days_below_zero,
      peakSunHours: loc.climate.peak_sun_hours,
      snowDays: loc.climate.snow_days,
      extremeWeatherDays: loc.climate.extreme_weather_days
    },
    energy: {
      distributor: loc.energy.distributor,
      avgPriceKwh: loc.energy.avg_price_kwh,
      pricePremiumPct: loc.energy.price_premium_pct,
      outageMinutes: loc.energy.outage_minutes_2024
    },
    census: {
      totalDwellings: loc.census.total_dwellings,
      unoccupiedPct: loc.census.unoccupied_pct,
      pre1980Pct: loc.census.pre1980_dwellings_pct,
      solarPct: loc.census.solar_pct
    }
  }
}
