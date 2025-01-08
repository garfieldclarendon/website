import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Videos = () => {
  return (
    <Layout>
      <SEO pageTitle="Videos" />
      <BannerLanding
        style="videos"
        title="Videos"
        description="Clips featuring our layout."
      />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>190 North “Hidden Train Treasure”</h2>
            </header>
            <div className="grid-wrapper">
              <p className="col-6">
                <video controls>
                  <source
                    src="https://vcl.abcotv.net/video/wls/082018-wls-190north-lets-play-trains-vid.mp4"
                    type="video/mp4"
                  />
                  Sorry your browser doesn't support embeded videos.
                </video>
              </p>
            </div>
            <header className="major">
              <h2>YouTube</h2>
            </header>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/juCC_Yj78Zg"
                  frameborder="0"
                  allowFullScreen="allowFullScreen"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aHgw_L0ohHA"
                  frameborder="0"
                  allowFullScreen="allowFullScreen"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/liSO6aMFNFU?si=a-3kmABUj_gl44pc&amp;start=1213"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/MxiI41WUPZ4"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2WrK-954FrU"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ugXCj5wasuo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aHgw_L0ohHA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ljH0oeCTZoI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ohKm2DgpIjc"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ugXCj5wasuo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/auXqukgQqGM"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/z7ET-szCfEo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xHi7un-9zMI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Videos
