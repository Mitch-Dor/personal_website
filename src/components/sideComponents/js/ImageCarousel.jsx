import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel() {
  const images = [
    "/assets/carousel/breloom.gif",
    "/assets/carousel/loudred.gif",
    "/assets/carousel/spheal.gif",
  ];

  const settings = {
    dots: true,          
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,        
    autoplay: true,          
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
        <Slider {...settings}>
        {images.map((src, i) => (
            <div key={i} className="carouselImageContainer">
                <img src={src} alt={`Slide ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
        ))}
        </Slider>
    </div>
  );
}
