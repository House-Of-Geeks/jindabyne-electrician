'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <div className="logo-icon" aria-hidden="true">⚡</div>
          <span>JINDABYNE ELECTRICIAN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Link href="/about" className="nav-link">
            About
          </Link>

          {/* Services Mega Menu */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <Link href="/our-services" className="nav-link">
              Services <span className="dropdown-arrow">▼</span>
            </Link>

            {servicesMenuOpen && (
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  {/* Residential Column */}
                  <div className="mega-menu-column">
                    <Link href="/our-services/residential" className="mega-menu-heading">
                      <span className="mega-menu-icon-small">🏠</span>
                      <h3>Residential Services</h3>
                    </Link>
                    <div className="mega-menu-links">
                      <Link href="/our-services/residential/lighting-power" className="mega-menu-link">
                        <span>💡</span> General Electrical Services
                      </Link>
                      <Link href="/our-services/residential/solar-battery" className="mega-menu-link">
                        Solar Installation
                      </Link>
                      <Link href="/our-services/residential/battery-storage" className="mega-menu-link">
                        Battery Storage
                      </Link>
                      <Link href="/our-services/residential/starlink-installation" className="mega-menu-link">
                        Starlink Installation
                      </Link>
                      <Link href="/our-services/residential/underfloor-heating" className="mega-menu-link">
                        Underfloor Heating
                      </Link>
                      <Link href="/our-services/residential/ev-charger-installation" className="mega-menu-link">
                        EV Charger Installation
                      </Link>
                      <Link href="/our-services/residential/switchboard-upgrades" className="mega-menu-link">
                        Switchboard Upgrades
                      </Link>
                      <Link href="/our-services/residential/smoke-alarm-installation" className="mega-menu-link">
                        Smoke Alarm Installation
                      </Link>
                      <Link href="/our-services/residential/emergency-electrical" className="mega-menu-link">
                        Emergency Electrical
                      </Link>
                    </div>
                  </div>

                  {/* Commercial Column */}
                  <div className="mega-menu-column">
                    <Link href="/our-services/commercial" className="mega-menu-heading">
                      
                      <h3>Commercial Services</h3>
                    </Link>
                    <div className="mega-menu-links">
                      <Link href="/our-services/commercial/ski-lodge-accommodation" className="mega-menu-link">
                        Ski Lodge & Accommodation
                      </Link>
                      <Link href="/our-services/commercial/retail-hospitality" className="mega-menu-link">
                        Retail & Hospitality
                      </Link>
                      <Link href="/our-services/commercial/commercial-solar" className="mega-menu-link">
                        Commercial Solar
                      </Link>
                      <Link href="/our-services/commercial/commercial-switchboards" className="mega-menu-link">
                        Commercial Switchboards
                      </Link>
                      <Link href="/our-services/commercial/data-communications" className="mega-menu-link">
                        Data & Communications
                      </Link>
                      <Link href="/our-services/commercial/emergency-exit-lighting" className="mega-menu-link">
                        Emergency & Exit Lighting
                      </Link>
                      <Link href="/our-services/commercial/test-tag" className="mega-menu-link">
                        Test & Tag
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link href="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>

          <div className="mobile-submenu">
            <Link href="/our-services" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>

            <div className="mobile-submenu-section">
              <Link href="/our-services/residential" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                🏠 Residential Services
              </Link>
              <Link href="/our-services/residential/solar-battery" className="mobile-submenu-sublink" onClick={() => setMobileMenuOpen(false)}>
                Solar Installation
              </Link>
              <Link href="/our-services/residential/battery-storage" className="mobile-submenu-sublink" onClick={() => setMobileMenuOpen(false)}>
                Battery Storage
              </Link>
              <Link href="/our-services/residential/starlink-installation" className="mobile-submenu-sublink" onClick={() => setMobileMenuOpen(false)}>
                Starlink Installation
              </Link>
            </div>

            <div className="mobile-submenu-section">
              <Link href="/our-services/commercial" className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                🏢 Commercial Services
              </Link>
              <Link href="/our-services/commercial/ski-lodge-accommodation" className="mobile-submenu-sublink" onClick={() => setMobileMenuOpen(false)}>
                Ski Lodge & Accommodation
              </Link>
              <Link href="/our-services/commercial/retail-hospitality" className="mobile-submenu-sublink" onClick={() => setMobileMenuOpen(false)}>
                Retail & Hospitality
              </Link>
              <Link href="/our-services/commercial/commercial-solar" className="mobile-submenu-sublink" onClick={() => setMobileMenuOpen(false)}>
                Commercial Solar
              </Link>
            </div>
          </div>

          <Link href="/blog" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
