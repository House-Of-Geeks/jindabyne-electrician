'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // TODO: Replace with actual form submission logic (SendGrid API route)
    // For now, just simulate submission
    setTimeout(() => {
      console.log('Form data:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-md)' }}>
      <div>
        <label htmlFor="name" style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: '600'
        }}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            background: 'var(--pure-white)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="email" style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: '600'
        }}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            background: 'var(--pure-white)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="phone" style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: '600'
        }}>
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            background: 'var(--pure-white)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="location" style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: '600'
        }}>
          Location *
        </label>
        <select
          id="location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            background: 'var(--pure-white)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}
          className="form-input"
        >
          <option value="" disabled>Select your location</option>
          <option value="Jindabyne">Jindabyne</option>
          <option value="Thredbo">Thredbo</option>
          <option value="Perisher">Perisher</option>
          <option value="Charlotte Pass">Charlotte Pass</option>
          <option value="Berridale">Berridale</option>
          <option value="Cooma">Cooma</option>
          <option value="Crackenback">Crackenback</option>
          <option value="Kalkite">Kalkite</option>
          <option value="Dalgety">Dalgety</option>
          <option value="Adaminaby">Adaminaby</option>
          <option value="East Jindabyne">East Jindabyne</option>
          <option value="Guthega">Guthega</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="service" style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: '600'
        }}>
          Service Required *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            background: 'var(--pure-white)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}
          className="form-input"
        >
          <option value="" disabled>Select a service</option>
          <option value="Solar Installation">Solar Installation</option>
          <option value="Battery Storage">Battery Storage</option>
          <option value="Starlink Installation">Starlink Installation</option>
          <option value="Underfloor Heating">Underfloor Heating</option>
          <option value="EV Charger Installation">EV Charger Installation</option>
          <option value="Switchboard Upgrades">Switchboard Upgrades</option>
          <option value="Smoke Alarm Installation">Smoke Alarm Installation</option>
          <option value="Emergency Electrical">Emergency Electrical</option>
          <option value="Lighting & Power">Lighting & Power</option>
          <option value="Commercial Services">Commercial Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: '600'
        }}>
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            background: 'var(--pure-white)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit',
            resize: 'vertical'
          }}
          className="form-input"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
        className="cta-primary"
        style={{
          width: '100%',
          justifyContent: 'center',
          opacity: status === 'submitting' ? 0.6 : 1,
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
        }}
      >
        {status === 'submitting' ? 'Sending...' : 'Request Free Quote'}
      </button>

      {status === 'success' && (
        <div style={{
          padding: 'var(--space-md)',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '8px',
          color: 'var(--success-green)',
          textAlign: 'center'
        }}>
          Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div style={{
          padding: 'var(--space-md)',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          color: '#EF4444',
          textAlign: 'center'
        }}>
          Something went wrong. Please call us instead.
        </div>
      )}
    </form>
  )
}
