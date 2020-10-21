/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'xaodcxsn60t6', // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'XmukiVCOzYh1U2xusphnMyUOQNJIl-chN2-kZxgQ13k',
        downloadLocal: true,
      },
    },
  ],
}
