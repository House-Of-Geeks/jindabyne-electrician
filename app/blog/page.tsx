import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Electrical Tips & Guides | Jindabyne Electrician Blog',
  description: 'Expert electrical advice for Snowy Mountains property owners. Solar guides, alpine electrical tips, and local insights.',
}

// Blog posts - update this array as new posts are added
const posts = [
  {
    slug: 'solar-in-snowy-mountains',
    title: 'Does Solar Work in the Snowy Mountains?',
    excerpt: 'Despite the cold, Jindabyne receives excellent sun hours. Learn how solar performs in alpine conditions and whether it's worth it for your property.',
    category: 'Solar',
    date: '2026-01-20',
    readTime: '5 min read'
  },
  {
    slug: 'battery-backup-alpine-homes',
    title: 'Why Battery Backup is Essential for Alpine Homes',
    excerpt: 'Power outages during Snowy Mountains winters can lead to frozen pipes and property damage. Discover how battery systems protect your investment.',
    category: 'Battery Storage',
    date: '2026-01-15',
    readTime: '6 min read'
  },
  {
    slug: 'starlink-installation-guide',
    title: 'Starlink Installation Guide for Jindabyne Properties',
    excerpt: 'Professional Starlink installation ensures optimal performance in alpine conditions. Tips for positioning, weatherproofing, and setup.',
    category: 'Starlink',
    date: '2026-01-10',
    readTime: '7 min read'
  }
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Electrical Guides</span>
            <h1>Snowy Mountains Electrical Tips & Advice</h1>
            <p className="hero-subtitle">
              Expert guides, local insights, and electrical advice for Jindabyne, Thredbo,
              and Snowy Mountains property owners.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-2xl)' }}>
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <article className="service-card" style={{ cursor: 'pointer' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--electric-blue)',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        marginBottom: 'var(--space-md)'
                      }}>
                        {post.category}
                      </div>
                      <h2 style={{ marginBottom: 'var(--space-sm)' }}>{post.title}</h2>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                        {post.excerpt}
                      </p>
                      <div style={{
                        display: 'flex',
                        gap: 'var(--space-md)',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <span>{new Date(post.date).toLocaleDateString('en-AU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div style={{
                        marginTop: 'var(--space-md)',
                        color: 'var(--electric-blue)',
                        fontWeight: 600
                      }}>
                        Read More →
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
