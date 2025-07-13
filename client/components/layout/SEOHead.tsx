import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "Talk About Nigeria - Discover Nigerian Talents & Professionals",
  description = "Connect with Nigeria's brightest talents across all industries. Discover professionals, artists, entrepreneurs, and innovators through our AI-powered talent discovery platform.",
  keywords = "Nigeria, Nigerian professionals, talent discovery, networking, professionals, artists, entrepreneurs, Lagos, Abuja, technology, entertainment, finance, oil and gas",
  canonical,
  ogImage = "/api/placeholder/1200/630",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("Talk About Nigeria")
    ? title
    : `${title} | Talk About Nigeria`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="author" content="Talk About Nigeria" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Talk About Nigeria" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@talkaboutnigeria" />
      <meta name="twitter:creator" content="@talkaboutnigeria" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.country" content="Nigeria" />
      <meta name="geo.placename" content="Lagos" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Talk About Nigeria" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Talk About Nigeria",
          description:
            "Nigeria's premier talent discovery platform connecting professionals across all industries",
          url: "https://talkaboutnigeria.com",
          logo: "https://talkaboutnigeria.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234-900-000-0000",
            contactType: "customer service",
            email: "hello@talkaboutnigeria.com",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "NG",
            addressLocality: "Lagos",
            addressRegion: "Lagos State",
          },
          sameAs: [
            "https://twitter.com/talkaboutnigeria",
            "https://linkedin.com/company/talkaboutnigeria",
            "https://instagram.com/talkaboutnigeria",
            "https://facebook.com/talkaboutnigeria",
            "https://youtube.com/talkaboutnigeria",
          ],
        })}
      </script>
    </Helmet>
  );
}
