import React, { useState, useCallback } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Gallery from "react-photo-gallery"
import Dialog from 'react-dialog'
import BannerLanding from '../components/BannerLanding'

import trackDiagram from '../assets/images/trackDiagram.jpeg'

export const query = graphql`
    query PhotoGallery {
        allContentfulGallery {
        nodes {
            photos {
            id
            description
            title
            file {
                url
                details {
                    image {
                      height
                      width
                    }
                  }
            }
            }
        }
        }
    }
`;

const Landing = ({ data }) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        event.preventDefault();
        setViewerIsOpen(true);
        setCurrentImage(photo);
    }, []);

    const handleClose = () => {
        console.log('test');
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photos = data.allContentfulGallery.nodes[0].photos.map(photo => {
        return {
            src: photo.file.url,
            alt: photo.title,
            width: photo.file.details.image.width,
            height: photo.file.details.image.height
        }
    });

    return (
        <Layout>
            <SEO pageTitle="Tour Our Layout" />
            <BannerLanding style="tour" title="Tour the Garfield Central" description="A virtual tour of our layout." />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>A large amount of detail</h2>
                        </header>
                        <p>Our layout is so large most people can't see it all in one visit. Here are some details you might have missed. While the virtual tour is fun, you must make a visit to see it in real life.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <div className="content singleColumn">
                            <div className="inner">
                                <header className="major">
                                    <h3>Photo Gallery</h3>
                                </header>
                                <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
                                {
                                    viewerIsOpen && (
                                        <>
                                            <Dialog
                                                closeOnEscape={true}
                                                modal={true}
                                                onClose={handleClose}
                                                buttons={
                                                    [{
                                                        text: "Close",
                                                        onClick: () => handleClose()
                                                    }]
                                                }
                                                height={800}
                                                width={800}>
                                                <img src={currentImage.src} alt={currentImage.alt} />
                                                <p>{currentImage.description}</p>
                                            </Dialog>
                                        </>)}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="image">
                            <img src={trackDiagram} alt="" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Layout Diagram</h3>
                                </header>
                                <p>Tour the layout section by section.</p>
                                <ul className="actions">
                                    <li><Link to="/layout" className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </Layout>
    )
};

export default Landing