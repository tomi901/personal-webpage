import React from 'react';
import './YoutubeVideo.css';


function YoutubeVideo(props: { src: string }) {
    const { src } = props;
    return (
        <div className="media-container">
            <div className="video-container">
            <iframe width="560"
                height="315"
                src={src.startsWith("http") ? src : `https://www.youtube.com/embed/${src}`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
                >
            </iframe>
            </div>
        </div>
    );
}

export default YoutubeVideo;

