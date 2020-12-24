module.exports = {
  siteMetadata: {
    title: "The Great Gatsby Project",
    description: "My first project with Gatsby",
    data: ["object 1", "object 2"],
    person: { name: "peter", surname: "burats" },
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
