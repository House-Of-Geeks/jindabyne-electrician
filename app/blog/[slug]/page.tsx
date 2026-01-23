'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTASection from '../../components/CTASection'
import { blogPosts } from '../../../data/blog'
import { notFound } from 'next/navigation'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <Header />
      <main>
        <article>
          {/* Hero Section */}
          <section className="hero" style={{ minHeight: '50vh' }}>
            <div className="hero-content" style={{ maxWidth: '900px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-md)',
                fontSize: '0.875rem',
                color: '#64748B'
              }}>
                <Link href="/blog" style={{ color: '#00D9FF', textDecoration: 'none' }}>
                  ← Back to Blog
                </Link>
              </div>

              <div style={{
                fontSize: '0.875rem',
                color: '#00D9FF',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-md)'
              }}>
                {post.category}
              </div>

              <h1 style={{ marginBottom: 'var(--space-lg)' }}>{post.title}</h1>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-lg)',
                fontSize: '0.9375rem',
                color: '#64748B'
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
            </div>
          </section>

          {/* Article Content */}
          <section className="services-section">
            <div className="section-container">
              <div style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <div className="blog-content" style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  color: '#1E293B'
                }}>
                  <div dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n')
                      .map(line => {
                        // Convert markdown headers
                        if (line.startsWith('### ')) {
                          return `<h3>${line.substring(4)}</h3>`
                        }
                        if (line.startsWith('## ')) {
                          return `<h2>${line.substring(3)}</h2>`
                        }
                        // Convert bold
                        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        // Convert lists
                        if (line.startsWith('- ')) {
                          return `<li>${line.substring(2)}</li>`
                        }
                        // Regular paragraphs
                        if (line.trim() && !line.startsWith('<')) {
                          return `<p>${line}</p>`
                        }
                        return line
                      })
                      .join('\n')
                  }} />
                </div>

                <style jsx global>{`
                  .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: var(--space-2xl);
                    margin-bottom: var(--space-lg);
                    color: #0F172A;
                  }

                  .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: var(--space-xl);
                    margin-bottom: var(--space-md);
                    color: #1E293B;
                  }

                  .blog-content p {
                    margin-bottom: var(--space-lg);
                  }

                  .blog-content ul, .blog-content ol {
                    margin: var(--space-lg) 0;
                    padding-left: var(--space-xl);
                  }

                  .blog-content li {
                    margin-bottom: var(--space-sm);
                    line-height: 1.8;
                  }

                  .blog-content strong {
                    font-weight: 600;
                    color: #0F172A;
                  }

                  .blog-content blockquote {
                    border-left: 4px solid #00D9FF;
                    padding-left: var(--space-lg);
                    margin: var(--space-xl) 0;
                    color: #475569;
                    font-style: italic;
                  }

                  .blog-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: var(--space-xl) 0;
                  }

                  .blog-content th, .blog-content td {
                    border: 1px solid #E2E8F0;
                    padding: var(--space-md);
                    text-align: left;
                  }

                  .blog-content th {
                    background: #F8FAFC;
                    font-weight: 600;
                    color: #0F172A;
                  }
                `}</style>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
              <div className="section-container">
                <div className="section-header">
                  <div className="section-label">Related Articles</div>
                  <h2>Continue Reading</h2>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: 'var(--space-xl)',
                  maxWidth: '1000px',
                  margin: '0 auto'
                }}>
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <article className="service-card" style={{
                        height: '100%',
                        transition: 'transform 0.3s ease',
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
                          {relatedPost.category}
                        </div>

                        <h3 style={{
                          fontSize: '1.25rem',
                          marginBottom: 'var(--space-sm)'
                        }}>
                          {relatedPost.title}
                        </h3>

                        <p style={{
                          color: '#475569',
                          fontSize: '0.9375rem'
                        }}>
                          {relatedPost.excerpt}
                        </p>

                        <div style={{
                          marginTop: 'var(--space-md)',
                          color: '#00D9FF',
                          fontWeight: 600
                        }}>
                          Read Article →
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
                  <Link href="/blog" className="cta-secondary">
                    View All Articles
                  </Link>
                </div>
              </div>
            </section>
          )}
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
