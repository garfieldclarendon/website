import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from '../components/SEO'
import Layout from '../components/layout'

import blogPic from '../assets/images/blog.jpg'

const Generic = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulBlog {
                    nodes {
                        articleTitle
                        body {
                            raw
                        }
                        slug
                        id
                        updatedAt
                        featuredImage {
                            title
                            gatsbyImageData
                        }
                    }
                }
            }
        `
    );
    return (
        <Layout>
            <SEO pageTitle="Blog" />

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>Blog</h1>
                        </header>
                        <span className="image main"><img src={blogPic} alt="Acela train nears Georgetown" /></span>
                        {data.allContentfulBlog.nodes.map(blogPost => {
                            const bodyJSON = JSON.parse(blogPost.body.raw);
                            const firstParagraph = bodyJSON.content.filter(item => item.nodeType === 'paragraph')[0];
                            const featuredImage = getImage(blogPost.featuredImage)
                            return (
                                <article key={blogPost.id}>
                                    <h2><Link to={`/blog/${blogPost.slug}`}>{blogPost.articleTitle}</Link></h2>
                                    {featuredImage && <div className="featuredImage"><GatsbyImage
                                        image={featuredImage}
                                        alt={blogPost.featuredImage.title}
                                        height={200}
                                    /></div>}
                                    <p>{firstParagraph.content[0].value}</p>
                                    <p><Link className="button" to={`/blog/${blogPost.slug}`}>Read More</Link></p>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export default Generic