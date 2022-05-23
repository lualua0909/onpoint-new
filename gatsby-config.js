const path = require("path")

module.exports = {
  siteMetadata: {
    title: `OnPoint Vietnam`,
    description: `OnPoint Vietnam`,
    author: `@onpoint`,
    siteUrl: `https://onpoint.vn/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        // Make src as default root folder
        resolveModules: [path.join(__dirname, "src")],
        // Add more alias here if needed.
        // Ex: utils: path.join(__dirname, "src", "components", "utilities"),
        // Using: import UtilityComponent from "utils/UtilityComponent";
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "beta.onpoint.vn",
        acl: null,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_square.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
