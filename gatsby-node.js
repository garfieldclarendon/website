const path = require('path')

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const blogPost = path.resolve('./src/templates/blogPost.js');
    const blogPostQuery = await graphql(
        `
        {
            allContentfulBlog {
              edges {
                node {
                  articleTitle
                  body {
                    raw
                  }
                  slug
                  id
                  updatedAt
                  publishDate
                }
              }
            }
        }
        `
    );

    const posts = blogPostQuery.data.allContentfulBlog.edges;
    posts.forEach(post => {
        createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
                data: post,
                slug: post.node.slug,
            },
        })
    });
}