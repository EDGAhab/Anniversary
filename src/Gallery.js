// Gallery.js
import React from 'react';
import './Gallery.css';
import photo1 from './photos/photo1.jpg';
import photo2 from './photos/photo2.jpg';
import photo3 from './photos/photo3.jpg';

const photos = [
    { src: photo1, subtitle: 'Alaska Adventures', date: '2023/10/19' },
    { src: photo2, subtitle: 'California Fun', date: '2023/10/19' },
    { src: photo3, subtitle: 'Baltimore Eats', date: '2023/10/19' },
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery">
                {photos.map((photo, index) => (
                    <div className="gallery-item" key={index}>
                        <p className="gallery-subtitle">{photo.date}</p>
                        <img src={photo.src} alt={`Photo ${index + 1}`} className="gallery-photo" />
                        <p className="gallery-subtitle">{photo.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
