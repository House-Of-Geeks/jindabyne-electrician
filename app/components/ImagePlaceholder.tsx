/**
 * Image Placeholder Component
 * Shows where real photos should be added with descriptive text
 * Replace these with actual images when available
 */

type ImagePlaceholderProps = {
  title: string
  description: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2'
  size?: 'small' | 'medium' | 'large' | 'hero'
}

export default function ImagePlaceholder({
  title,
  description,
  aspectRatio = '16/9',
  size = 'medium'
}: ImagePlaceholderProps) {
  const sizeMap = {
    small: { height: '200px' },
    medium: { height: '300px' },
    large: { height: '400px' },
    hero: { height: '500px' }
  }

  return (
    <div
      style={{
        width: '100%',
        ...sizeMap[size],
        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.08) 0%, rgba(0, 240, 255, 0.12) 50%, rgba(255, 184, 0, 0.08) 100%)',
        border: '2px dashed rgba(0, 217, 255, 0.3)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D9FF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.3
      }} />

      {/* Camera icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: '1rem', opacity: 0.4 }}
      >
        <path
          d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
          stroke="#00D9FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="13"
          r="4"
          stroke="#00D9FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h3 style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '0.875rem',
        fontWeight: 700,
        color: '#00D9FF',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '0.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '0.875rem',
        color: '#475569',
        maxWidth: '400px',
        lineHeight: '1.6',
        position: 'relative',
        zIndex: 1
      }}>
        {description}
      </p>

      {/* Aspect ratio indicator */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        fontSize: '0.75rem',
        color: 'rgba(0, 217, 255, 0.5)',
        fontFamily: 'var(--font-mono), monospace'
      }}>
        {aspectRatio}
      </div>
    </div>
  )
}

/**
 * Usage Examples:
 *
 * <ImagePlaceholder
 *   title="Solar Installation Photo"
 *   description="Photo of solar panels on alpine home roof with mountain backdrop"
 *   aspectRatio="16/9"
 *   size="large"
 * />
 *
 * <ImagePlaceholder
 *   title="Team Photo"
 *   description="Jindabyne Electrician team working on site"
 *   aspectRatio="4/3"
 *   size="medium"
 * />
 *
 * <ImagePlaceholder
 *   title="Hero Background"
 *   description="Snowy Mountains landscape with electrical infrastructure"
 *   aspectRatio="16/9"
 *   size="hero"
 * />
 */
