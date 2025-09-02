import React, { useState, useCallback } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Gallery from 'react-photo-gallery'
import Dialog from 'react-dialog'
import BannerVideo from '../components/BannerVideo'
import acela from '../assets/videos/acela.mp4'
import up1995 from '../assets/images/youtube/up1995.png'
import openHouse from '../assets/images/youtube/garfield-clarendon-open-house.png'
import largeLayout from '../assets/images/youtube/largeholayout.png'
import biggestSet from '../assets/images/youtube/biggest-set.png'
import cnw from '../assets/images/youtube/cnw-f-units.png'
import gcClub from '../assets/images/youtube/garfield-clarendon-model-railroad-club.png'

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
`

const Landing = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    event.preventDefault()
    setViewerIsOpen(true)
    setCurrentImage(photo)
  }, [])

  const handleClose = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photos = data.allContentfulGallery.nodes[0].photos.map((photo) => {
    return {
      src: photo.file.url,
      alt: photo.title,
      width: photo.file.details.image.width,
      height: photo.file.details.image.height,
    }
  })

  return (
    <Layout>
      <SEO pageTitle="Photos and Videos" />
      <BannerVideo
        imageClass="media"
        title="Photos and Videos of the Layout"
        description="A virtual tour of our layout."
        video={acela}
        videoHeight="897"
        videoWidth="1594"
      />

      <div id="main">
        <section>
          <div className="inner">
            <header>
              <h2>Renovation Note</h2>
            </header>
            <p>
              These videos showcase the layout before building renovations, when
              its future was uncertain. We are pleased to share that our
              building has since been fully restored, and the layout's future is
              now secure.
            </p>
          </div>
        </section>
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Prior to 2023</h2>
            </header>
            <div className="grid-wrapper">
              <div className="col-6">
                <a
                  className="youtubeThumb"
                  href="https://www.youtube.com/watch?v=2WrK-954FrU"
                >
                  <img
                    src={largeLayout}
                    height="315"
                    width="560"
                    alt="Large Model Railroad HO Scale"
                  />
                </a>
              </div>
              <div className="col-6">
                <a
                  className="youtubeThumb"
                  href="https://www.youtube.com/watch?v=MxiI41WUPZ4"
                >
                  <img
                    src={biggestSet}
                    height="315"
                    width="560"
                    alt="Biggest Model Train Set in Chicago"
                  />
                </a>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <a
                  className="youtubeThumb"
                  href="https://www.youtube.com/watch?v=aHgw_L0ohHA"
                >
                  <img
                    src={gcClub}
                    height="315"
                    width="560"
                    alt="The Garfield-Clarendon Model Railroad Club"
                  />
                </a>
              </div>
              <div className="col-6">
                <a
                  className="youtubeThumb"
                  href="https://www.youtube.com/watch?v=ljH0oeCTZoI"
                >
                  <img
                    src={openHouse}
                    height="315"
                    width="560"
                    alt="The Garfield-Clarendon Model Railroad Club"
                  />
                </a>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <a
                  className="youtubeThumb"
                  href="https://www.youtube.com/watch?v=z7ET-szCfEo"
                >
                  <img src={cnw} height="315" width="560" alt="CNW F Units" />
                </a>
              </div>
              <div className="col-6">
                <a
                  className="youtubeThumb"
                  href="https://www.youtube.com/watch?v=auXqukgQqGM"
                >
                  <img
                    src={up1995}
                    height="315"
                    width="560"
                    alt="UP 1995 and 1989 Train"
                  />
                </a>
              </div>
            </div>
            <header className="major">
              <h2>190 North “Hidden Train Treasure”</h2>
            </header>
            <div className="grid-wrapper youtubeThumb">
              <p className="col-6">
                <video>
                  <source
                    src="https://vcl.abcotv.net/video/wls/082018-wls-190north-lets-play-trains-vid.mp4"
                    type="video/mp4"
                  />
                  Sorry your browser doesn't support embeded videos.
                </video>
              </p>
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
                <Gallery
                  photos={photos}
                  direction={'column'}
                  onClick={openLightbox}
                />
                {viewerIsOpen && (
                  <>
                    <Dialog
                      hasCloseIcon={true}
                      closeOnEscape={true}
                      modal={true}
                      onClose={handleClose}
                      buttons={[
                        {
                          text: 'Close',
                          onClick: () => handleClose(),
                        },
                      ]}
                      height={600}
                      width={700}
                    >
                      <img src={currentImage.src} alt={currentImage.alt} />
                      <p>{currentImage.description}</p>
                    </Dialog>
                  </>
                )}
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  )
}

export default Landing
