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
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        singleTypes: [`about`],
        contentTypes: [`posts`],
        //If using single types place them in this array.
        // // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
  ],
}
