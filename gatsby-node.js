const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      posts: allStrapiPosts {
        nodes {
          pretty_url
        }
      }
    }
  `)

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: "/blog/" + post.pretty_url,
      component: path.resolve("src/templates/BlogPost/BlogPost.jsx"),
      context: {
        sulg: post.pretty_url,
      },
    })
  })
}
