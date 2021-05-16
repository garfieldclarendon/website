import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from '../components/SEO';
import Layout from '../components/layout'

export default function Blog({ data, pageContext }) {
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.UNORDERED_LIST]: (node, children) => <ul>{children}</ul>,
            [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
            [BLOCKS.EMBEDDED_ENTRY]: node => {
                if (node.data.target.__typename === "ContentfulEmbeddableVideo") {
                    return (
                        <>
                            <iframe width="560" height="315" src={`${node.data.target.url.url}`} title={node.data.target.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </>
                    )
                }
                return null;
            },
            [BLOCKS.EMBEDDED_ASSET]: node => {
                console.log(node);
                const image = getImage(node.data.target.gatsbyImageData);
                return (
                    <div className="box">
                        <p>
                            <GatsbyImage
                                image={image}
                                alt={node.data.target.title}
                            />
                            <small>{node.data.target.description}</small>
                        </p>
                    </div>
                )
            },
        },
    }
    const featuredImage = getImage(pageContext.data.featuredImage)
    return (<>
        {pageContext.data && (
            <Layout>
                <SEO pageTitle={pageContext.data.articleTitle} />
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1>{pageContext.data.articleTitle}</h1>
                            </header>
                            <article className="blogPost">
                                {featuredImage && <div className="featuredImage"><GatsbyImage
                                    image={featuredImage}
                                    alt={pageContext.data.featuredImage.title}
                                    height={200}
                                /></div>}
                                {renderRichText(pageContext.data.body, options)}
                            </article>
                        </div>
                    </section>
                </div>
            </Layout>
        )}
    </>
    )
}