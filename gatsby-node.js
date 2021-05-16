const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blogPost.js');
  const blogPostQuery = await graphql(
    `
        {
          allContentfulBlog {
            nodes {
              body {
                raw
                references {
                  ... on ContentfulEmbeddableVideo {
                    contentful_id
                    __typename
                    title
                    url {
                      url
                    }
                  }
                  ... on ContentfulAsset {
                    contentful_id
                    __typename
                    title
                    description
                    gatsbyImageData
                  }
                }
              }
              featuredImage {
                title
                gatsbyImageData
              }
              articleTitle
              slug
              id
              updatedAt
              publishDate
            }
          }
        }
        `
  );

  const posts = blogPostQuery.data.allContentfulBlog.nodes;
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: blogPost,
      context: {
        data: post,
        slug: post.slug,
      },
    })
  });
}