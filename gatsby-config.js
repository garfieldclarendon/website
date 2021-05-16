const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Garfield-Clarendon Model Railroad Club',
    author: 'Ryan Balla',
    description: 'A Gatsby.js Theme based on Forty by HTML5 UP',
  },
  plugins: [
    // 'gatsby-plugin-gatsby-cloud',
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
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-61549882-1",
        ],
      },
    },
  ],
}
