/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    }
  ],
  siteMetadata: {
    title: 'somethong but I dont know',
    description: 'It is just a simple website to learn gastbyjs',
    copyright: 'This web site is copyright by hamza' 
  }
}
