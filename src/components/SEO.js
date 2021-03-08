import React from 'react'
import Helmet from 'react-helmet'

function SEO() {
    return (
        <Helmet htmlAttributes={{
            lang: 'en',
        }}>
            <title>Garfield-Clarendon Model Railroad Club, Chicago IL</title>
            <meta name="description" content="Generic Page" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico.png" />
            <link rel="canonical" href="http://www.garfieldcentral.org" />
            <meta property="og:site_name" content="Garfield-Clarendon Model Railroad Club  " />
            <meta property="og:title" content="Garfield-Clarendon Model Railroad Club  " />
            <meta property="og:url" content="http://www.garfieldcentral.org" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="The Garfield-Clarendon Model Railroad Club is a Chicago based HO scale model railroad club. We meet in the Clarendon Park Community Center in the Uptown neighborhood." />
            <meta property="og:image" content="/garfieldClarendonSocialMedia.png" />
            <meta property="og:image:width" content="426" />
            <meta property="og:image:height" content="425" />
            <meta itemprop="name" content="Garfield-Clarendon Model Railroad Club  " />
            <meta itemprop="url" content="http://www.garfieldcentral.org" />
            <meta itemprop="description" content="The Garfield-Clarendon Model Railroad Club is a Chicago based HO scale model railroad club. We meet in the Clarendon Park Community Center in the Uptown neighborhood." />
            <meta itemprop="thumbnailUrl" content="/garfieldClarendonSocialMedia.png" />
            <link rel="image_src" href="/garfieldClarendonSocialMedia.png" />
            <meta itemprop="image" content="/garfieldClarendonSocialMedia.png" />
            <meta name="twitter:title" content="Garfield-Clarendon Model Railroad Club  " />
            <meta name="twitter:image" content="/garfieldClarendonSocialMedia.png" />
            <meta name="twitter:url" content="http://www.garfieldcentral.org" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content="The Garfield-Clarendon Model Railroad Club is a Chicago based HO scale model railroad club. We meet in the Clarendon Park Community Center in the Uptown neighborhood." />
            <meta name="description" content="The Garfield-Clarendon Model Railroad Club is a Chicago based HO scale 
            model railroad club. We meet in the Clarendon Park Community Center in the 
            Uptown neighborhood."/>
        </Helmet>
    )
}

export default SEO