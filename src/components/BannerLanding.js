import React from 'react'

const BannerLanding = (props) => {
    const bannerColor = props.bannerColor ? props.bannerColor : 'style2';
    return (
        <section id="banner" className={props.style ? `${props.style} ${bannerColor}` : 'style2'}>
            <div className="inner">
                <header className="major">
                    <h1>{props.title}</h1>
                </header>
                <div className="content">
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
};

export default BannerLanding
