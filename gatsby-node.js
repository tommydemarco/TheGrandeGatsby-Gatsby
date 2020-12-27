const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogResult = await graphql(`
    {
      posts: allStrapiPosts {
        nodes {
          pretty_url
        }
      }
    }
  `)
  const servicesResult = await graphql(`
    {
      services: allStrapiServices {
        nodes {
          pretty_url
        }
      }
    }
  `)

  blogResult.data.posts.nodes.forEach(post => {
    createPage({
      path: `blog/${post.pretty_url}`,
      component: path.resolve("src/templates/BlogPost/BlogPost.jsx"),
      context: {
        slug: post.pretty_url,
      },
    })
  })
  servicesResult.data.services.nodes.forEach(service => {
    createPage({
      path: `services/${service.pretty_url}`,
      component: path.resolve("src/templates/ServicePost/ServicePost.jsx"),
      context: {
        slug: service.pretty_url,
      },
    })
  })
}
