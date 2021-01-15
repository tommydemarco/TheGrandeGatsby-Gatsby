module.exports = {
  siteMetadata: {
    siteUrl: "http://testurl.it.it.it",
    title: "The Grande Gatsby Project",
    description: "My first project with Gatsby",
    data: ["object 1", "object 2"],
    person: { name: "Tommy", surname: "Dema" },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        singleTypes: [`about`],
        contentTypes: [`posts`, `services`, `features`, `sliders`, `galleries`],
      },
    },
  ],
}
