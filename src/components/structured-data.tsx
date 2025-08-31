export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SuperCheck",
    description:
      "Enterprise test automation and monitoring platform for modern applications",
    url: "https://supercheck.io",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "SuperCheck.io",
      url: "https://supercheck.io",
    },
    publisher: {
      "@type": "Organization",
      name: "SuperCheck.io",
      url: "https://supercheck.io",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
    },
    featureList: [
      "Parallel test execution",
      "Multi-browser testing with Playwright",
      "Real-time monitoring and alerts",
      "Enterprise security and RBAC",
      "Docker deployment support",
      "CI/CD integration",
      "Multi-organization support",
      "Comprehensive reporting",
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SuperCheck.io",
    url: "https://supercheck.io",
    description:
      "Leading provider of enterprise test automation and monitoring solutions",
    foundingDate: "2025",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: "https://demo.supercheck.io",
    },
    sameAs: [
      "https://github.com/supercheck-io/supercheck",
      "https://www.youtube.com/@supercheck-io",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
