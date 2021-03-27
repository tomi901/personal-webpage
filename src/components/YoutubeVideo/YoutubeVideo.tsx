import React from 'react';
import './YoutubeVideo.css';


function YoutubeVideo(props: { src: string }) {
    return (
        <div className="media-container">
            <div className="video-container">
            <iframe width="560"
                height="315"
                src={props.src}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen={true}
                >
            </iframe>
            </div>
        </div>
    );
}

export default YoutubeVideo;

