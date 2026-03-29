import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTASection from '../../components/CTASection'
import { blogPosts } from '../../../data/blog'
import { ArticleSchema, BreadcrumbSchema } from '../../../components/Schema'
import BlogContent from './BlogContent'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Jindabyne Electrician`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.jindabyneelectrician.com.au/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
    { name: 'Blog', url: 'https://www.jindabyneelectrician.com.au/blog' },
    { name: post.title, url: `https://www.jindabyneelectrician.com.au/blog/${post.slug}` }
  ]

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        publishDate={post.date}
        keywords={post.keywords}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <article>
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

          <section className="services-section">
            <div className="section-container">
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <BlogContent content={post.content} />
              </div>
            </div>
          </section>

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
                      <article className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
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
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>
                          {relatedPost.title}
                        </h3>
                        <p style={{ color: '#475569', fontSize: '0.9375rem' }}>
                          {relatedPost.excerpt}
                        </p>
                        <div style={{ marginTop: 'var(--space-md)', color: '#00D9FF', fontWeight: 600 }}>
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
