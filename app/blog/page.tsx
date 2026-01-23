import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Metadata } from 'next'
import { blogPosts } from '../../data/blog'

export const metadata: Metadata = {
  title: 'Electrical Tips & Guides | Jindabyne Electrician Blog',
  description: 'Expert electrical advice for Snowy Mountains homeowners and businesses. Solar, battery storage, Starlink, underfloor heating, and more.',
}

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Expert Advice</span>
            <h1>Electrical Tips & Guides for the Snowy Mountains</h1>
            <p className="hero-subtitle">
              Practical electrical advice, industry news, and alpine-specific guides
              for homeowners and businesses in Jindabyne and the Snowy Mountains region.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="blog-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: 'var(--space-xl)',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <article className="service-card" style={{
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#00D9FF',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 'var(--space-sm)'
                    }}>
                      {post.category}
                    </div>

                    <h2 style={{
                      fontSize: '1.5rem',
                      marginBottom: 'var(--space-sm)',
                      lineHeight: '1.3'
                    }}>
                      {post.title}
                    </h2>

                    <p style={{
                      color: '#475569',
                      marginBottom: 'var(--space-md)',
                      lineHeight: '1.6'
                    }}>
                      {post.excerpt}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-md)',
                      fontSize: '0.875rem',
                      color: '#64748B',
                      marginTop: 'auto'
                    }}>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-AU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>

                    <div style={{
                      marginTop: 'var(--space-md)',
                      color: '#00D9FF',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      Read Article <span>→</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Get in Touch</div>
              <h2>Need Electrical Help?</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', color: '#475569' }}>
                Our team is ready to help with any electrical project in Jindabyne and the Snowy Mountains.
              </p>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
              <Link href="/contact" className="cta-primary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
