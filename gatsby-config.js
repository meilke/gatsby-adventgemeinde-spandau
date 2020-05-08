module.exports = {
  pathPrefix: `/gatsby-adventgemeinde-spandau`,
  siteMetadata: {
    title: `Adventgemeinde Spandau`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `82pxqs054w36`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
