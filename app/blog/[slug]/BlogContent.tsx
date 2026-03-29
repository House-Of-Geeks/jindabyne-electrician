'use client'

interface Props {
  content: string
}

export default function BlogContent({ content }: Props) {
  const html = content
    .split('\n')
    .map(line => {
      if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`
      if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`
      if (line.trim() && !line.startsWith('<')) return `<p>${line}</p>`
      return line
    })
    .join('\n')

  return (
    <>
      <div
        className="blog-content"
        style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#1E293B' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
        .blog-content p { margin-bottom: var(--space-lg); }
        .blog-content ul, .blog-content ol {
          margin: var(--space-lg) 0;
          padding-left: var(--space-xl);
        }
        .blog-content li { margin-bottom: var(--space-sm); line-height: 1.8; }
        .blog-content strong { font-weight: 600; color: #0F172A; }
        .blog-content blockquote {
          border-left: 4px solid #00D9FF;
          padding-left: var(--space-lg);
          margin: var(--space-xl) 0;
          color: #475569;
          font-style: italic;
        }
        .blog-content table { width: 100%; border-collapse: collapse; margin: var(--space-xl) 0; }
        .blog-content th, .blog-content td {
          border: 1px solid #E2E8F0;
          padding: var(--space-md);
          text-align: left;
        }
        .blog-content th { background: #F8FAFC; font-weight: 600; color: #0F172A; }
      `}</style>
    </>
  )
}
