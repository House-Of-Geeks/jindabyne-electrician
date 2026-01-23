'use client'

import Link from 'next/link'

interface PageMetadataProps {
  lastUpdated: string
  dataSources?: Array<{
    name: string
    url?: string
    description?: string
  }>
  showSources?: boolean
}

export default function PageMetadata({
  lastUpdated,
  dataSources,
  showSources = true
}: PageMetadataProps) {
  return (
    <div style={{
      marginTop: 'var(--space-2xl)',
      paddingTop: 'var(--space-lg)',
      borderTop: '1px solid rgba(100, 116, 139, 0.2)',
      fontSize: '0.875rem',
      color: 'var(--light-slate)'
    }}>
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Last Updated:</strong>{' '}
        {new Date(lastUpdated).toLocaleDateString('en-AU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>

      {showSources && dataSources && dataSources.length > 0 && (
        <div>
          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 'var(--space-sm)' }}>
            Data Sources:
          </strong>
          <ul style={{
            paddingLeft: '1.25rem',
            margin: 0,
            lineHeight: '1.6'
          }}>
            {dataSources.map((source, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                {source.name}
                {source.description && (
                  <span style={{ color: 'var(--light-slate)' }}> - {source.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{
        marginTop: 'var(--space-md)',
        fontSize: '0.8125rem',
        fontStyle: 'italic'
      }}>
        Information verified by licensed electricians serving the Snowy Mountains region.
      </div>
    </div>
  )
}
