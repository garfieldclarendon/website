import React, { useState, useEffect } from 'react'

const BannerVideo = (props) => {

    const [videoLoaded, setVideoLoaded] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationDone(true);
        }, 2000);
    }, []);

    return (
        <section id="banner" className={`video ${props.imageClass}`}>
            <div className="inner">
                <header className="major">
                    <h1>{props.title}</h1>
                </header>
                <div className="content">
                    <p>{props.description}</p>
                </div>
            </div>
            {animationDone && <video onCanPlay={() => { setVideoLoaded(true); }} width={props.videoWidth} height={props.videoHeight} autoplay="true" muted loop>
                <source src={props.video} type="video/mp4" />
            </video>}
        </section>
    )
};

export default BannerVideo
