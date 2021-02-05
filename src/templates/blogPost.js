import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import SEO from '../components/SEO';
import Layout from '../components/layout'

export default function Blog({ data, pageContext }) {
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>
    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
                return (
                    <>
                        <h2>Embedded Asset</h2>
                        <pre>
                            <code>{JSON.stringify(node, null, 2)}</code>
                        </pre>
                    </>
                )
            },
        },
    }
    return (<>
        {pageContext.data && (
            <Layout>
                <SEO />
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1>{pageContext.data.node.articleTitle}</h1>
                            </header>
                            <article>
                                {renderRichText(pageContext.data.node.body, options)}
                            </article>
                        </div>
                    </section>
                </div>
            </Layout>
        )}
    </>
    )
}