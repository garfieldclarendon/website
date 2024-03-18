const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Garfield-Clarendon Model Railroad Club',
    author: 'Ryan Balla',
    description: 'A Gatsby.js Theme based on Forty by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
              endpoint:
                'https://garfieldcentral.us9.list-manage.com/subscribe/post?u=38fd98b265c3898b09b9cdc49&amp;id=3098b8015e&amp;f_id=00bac1e0f0', // string; add your MC list endpoint here; see instructions below
              timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        richText: {
          resolveFieldLocales: true,
        },
        environment:
          process.env.NODE_ENV === 'development' ? 'development' : 'master',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-61549882-1'],
      },
    },
  ],
}
