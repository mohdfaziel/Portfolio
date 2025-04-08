import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, type = 'website', image, route = '' }) => {
  const siteUrl = 'https://www.faziel.me'; // Actual deployed URL
  const fullUrl = `${siteUrl}${route}`;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-default.jpg`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: title,
        description: description,
        inLanguage: 'en'
      },
      {
        '@type': 'WebPage',
        '@id': `${fullUrl}/#webpage`,
        url: fullUrl,
        name: title,
        description: description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        inLanguage: 'en'
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Mohd Faziel',
        description: 'Professional web developer specializing in React and modern web technologies',
        url: siteUrl,
        sameAs: [
          'https://github.com/mohdfaziel', // Update with your actual GitHub profile
          'https://linkedin.com/in/mohdfaziel', // Update with your actual LinkedIn profile
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Mohd Faziel - Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preload Fonts */}
      <link 
        rel="preload" 
        href="/fonts/poppins-v20-latin-regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string
};

export default SEO; 