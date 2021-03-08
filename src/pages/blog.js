import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

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
                        <span className="image main"><img src={pic11} alt="" /></span>
                        {data.allContentfulBlog.nodes.map(blogPost => {
                            const bodyJSON = JSON.parse(blogPost.body.raw);
                            const firstParagraph = bodyJSON.content.filter(item => item.nodeType === 'paragraph')[0];
                            return (
                                <article key={blogPost.id}>
                                    <h2><Link to={`/blog/${blogPost.slug}`}>{blogPost.articleTitle}</Link></h2>
                                    <p>{firstParagraph.content[0].value}</p>
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