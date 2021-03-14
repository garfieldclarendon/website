import React, { useState, useCallback } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Gallery from "react-photo-gallery"
import Dialog from 'react-dialog'
import BannerLanding from '../components/BannerLanding'

export const query = graphql`
    query Photos {
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
            <SEO pageTitle="Photos and Videos" />
            <BannerLanding style="photovideo" title="Photos and Videos of the Layout" description="A virtual tour of our layout." />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>190 North “Hidden Train Treasure”</h2>
                        </header>
                        <div className="grid-wrapper">
                            <p className="col-6">
                                <video controls>
                                    <source src="https://vcl.abcotv.net/video/wls/082018-wls-190north-lets-play-trains-vid.mp4" type="video/mp4" />Sorry your browser doesn't support embeded videos.</video>
                            </p>
                        </div>
                        <header className="major">
                            <h2>YouTube</h2>
                        </header>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2WrK-954FrU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/MxiI41WUPZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/aHgw_L0ohHA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ljH0oeCTZoI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ohKm2DgpIjc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ugXCj5wasuo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/auXqukgQqGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/z7ET-szCfEo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xHi7un-9zMI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>

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
                                                hasCloseIcon={true}
                                                closeOnEscape={true}
                                                modal={true}
                                                onClose={handleClose}
                                                buttons={
                                                    [{
                                                        text: "Close",
                                                        onClick: () => handleClose()
                                                    }]
                                                }
                                                height={600}
                                                width={700}>
                                                <img src={currentImage.src} alt={currentImage.alt} />
                                                <p>{currentImage.description}</p>
                                            </Dialog>
                                        </>)}
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </Layout>
    )
};

export default Landing