'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Convert full URLs to relative paths for Link component
  const getHref = (url: string) => {
    if (url.startsWith('https://')) {
      return new URL(url).pathname || '/'
    }
    return url
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={item.url} className="breadcrumb-item">
            {index < items.length - 1 ? (
              <>
                <Link href={getHref(item.url)} className="breadcrumb-link">
                  {item.name}
                </Link>
                <span className="breadcrumb-separator" aria-hidden="true">/</span>
              </>
            ) : (
              <span className="breadcrumb-current" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
      <style jsx>{`
        .breadcrumb-nav {
          padding: var(--space-md) 0;
          margin-bottom: var(--space-md);
        }
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-xs);
          list-style: none;
          margin: 0;
          padding: 0;
          font-size: 0.875rem;
        }
        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
        }
        .breadcrumb-link {
          color: var(--electric-blue);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .breadcrumb-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .breadcrumb-separator {
          color: var(--light-slate);
          user-select: none;
        }
        .breadcrumb-current {
          color: var(--light-slate);
        }
      `}</style>
    </nav>
  )
}
