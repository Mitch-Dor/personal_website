import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/imageCarousel.css";

export default function ImageCarousel({ images }) {
  const [expandedImage, setExpandedImage] = useState(null);

  const settings = {
    // dots: true,          
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,        
    autoplay: true,          
    autoplaySpeed: 3000,
  };

  return (
    <>
      {expandedImage && (
        <div className="screenCover" onClick={() => {setExpandedImage(null)}}>
          <div className="imageContainer">
            <div className="expandedImageClose" onClick={() => {setExpandedImage(null)}}>
              <VscClose className="closeIcon" />
            </div>
            <img src={expandedImage.img}></img>
            <div className="imageDesc" style={{width: 'calc(100% - 20px)'}}>{expandedImage.desc}</div>
          </div>
        </div>
      )}
      <div className="carousel">
          <Slider {...settings}>
          {images.map((src, i) => (
              <div key={i} className="carouselImageContainer">
                  <img src={src.img} onClick={() => {setExpandedImage(src)}} alt={`Slide ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                  <div className="imageDesc">{src.desc}</div>
              </div>
          ))}
          </Slider>
      </div>
    </>
  );
}
