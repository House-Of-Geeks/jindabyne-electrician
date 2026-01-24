// Schema markup components for SEO
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Jindabyne Electrician",
    "description": "Licensed electricians serving Jindabyne, Thredbo, Perisher, and the Snowy Mountains. Specialists in solar installation, battery storage, Starlink, and alpine electrical systems.",
    "url": "https://jindabyneelectrician.com.au",
    "telephone": "+61-XXX-XXX-XXX",
    "email": "info@jindabyneelectrician.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jindabyne",
      "addressRegion": "NSW",
      "postalCode": "2627",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-36.4126",
      "longitude": "148.6211"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jindabyne"
      },
      {
        "@type": "City",
        "name": "Thredbo"
      },
      {
        "@type": "City",
        "name": "Perisher"
      },
      {
        "@type": "City",
        "name": "Charlotte Pass"
      },
      {
        "@type": "City",
        "name": "Berridale"
      },
      {
        "@type": "City",
        "name": "Cooma"
      },
      {
        "@type": "City",
        "name": "Crackenback"
      },
      {
        "@type": "City",
        "name": "Kalkite"
      },
      {
        "@type": "City",
        "name": "Dalgety"
      },
      {
        "@type": "City",
        "name": "Adaminaby"
      },
      {
        "@type": "City",
        "name": "East Jindabyne"
      },
      {
        "@type": "City",
        "name": "Guthega"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Installation",
            "description": "Complete solar panel installations for alpine homes and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Storage Systems",
            "description": "Tesla Powerwall, Sonnen, and BYD battery installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starlink Installation",
            "description": "Professional Starlink satellite internet installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Underfloor Heating",
            "description": "Electric underfloor heating for alpine homes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EV Charger Installation",
            "description": "Tesla Wall Connector and universal EV chargers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Electrical",
            "description": "24/7 emergency electrician services"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceArea,
  price
}: {
  serviceName: string
  serviceDescription: string
  serviceArea: string
  price?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": `${serviceName} in ${serviceArea}`,
    "description": serviceDescription,
    "provider": {
      "@type": "Electrician",
      "name": "Jindabyne Electrician"
    },
    "areaServed": {
      "@type": "City",
      "name": serviceArea
    },
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "AUD"
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema({
  rating,
  reviewCount,
  bestRating = 5
}: {
  rating: number
  reviewCount: number
  bestRating?: number
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": rating,
    "reviewCount": reviewCount,
    "bestRating": bestRating,
    "itemReviewed": {
      "@type": "Electrician",
      "name": "Jindabyne Electrician"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  publishDate,
  modifiedDate,
  authorName,
  imageUrl,
  keywords
}: {
  title: string
  description: string
  publishDate: string
  modifiedDate?: string
  authorName?: string
  imageUrl?: string
  keywords?: string[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "author": {
      "@type": "Organization",
      "name": authorName || "Jindabyne Electrician"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jindabyne Electrician",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jindabyneelectrician.com.au/logo.png"
      }
    },
    ...(imageUrl && {
      "image": imageUrl
    }),
    ...(keywords && keywords.length > 0 && {
      "keywords": keywords.join(", ")
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocationBusinessSchema({
  locationName,
  description,
  postalCode
}: {
  locationName: string
  description: string
  postalCode: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": `Jindabyne Electrician - ${locationName}`,
    "description": description,
    "url": `https://jindabyneelectrician.com.au/service-areas/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+61-XXX-XXX-XXX",
    "email": "info@jindabyneelectrician.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationName,
      "addressRegion": "NSW",
      "postalCode": postalCode,
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "priceRange": "$$"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jindabyne Electrician",
    "url": "https://jindabyneelectrician.com.au",
    "logo": "https://jindabyneelectrician.com.au/logo.png",
    "description": "Licensed electricians serving the Snowy Mountains region. Specialists in solar installation, battery storage, and alpine electrical systems.",
    "email": "info@jindabyneelectrician.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jindabyne",
      "addressRegion": "NSW",
      "postalCode": "2627",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@jindabyneelectrician.com.au",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://jindabyneelectrician.com.au"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
