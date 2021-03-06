require('dotenv').config();
const siteAddress = new URL('https://ankittyagi.com');

module.exports = {
  siteMetadata: {
    title: `Ankit Tyagi`,
    description: `Personal Site and Blog for Ankit Tyagi.`,
    author: `Ankit Tyagi`,
    siteUrl: siteAddress.toString()
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-167427391-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        cookieDomain: siteAddress.hostname
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ankit Tyagi Personal Site`,
        short_name: `Ankit Tyagi`,
        start_url: `/`,
        background_color: `#81e6d9`,
        theme_color: `#81e6d9`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
        include_favicon: false
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'ankittyagi.com',
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1)
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/about']
      }
    },
    `gatsby-plugin-robots-txt`
  ]
};
