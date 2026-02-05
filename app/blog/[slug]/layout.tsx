import { Metadata } from 'next'
import { blogPosts } from '../../../data/blog'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'This article could not be found.',
    }
  }

  return {
    title: `${post.title} | Jindabyne Electrician Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
