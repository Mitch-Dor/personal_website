import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/imageCarousel.css";

export default function ImageCarousel({ images, section, interval = 5000 }) { // interval in ms
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right"); // This is the direction the images move
  const [prevIndex, setPrevIndex] = useState(null);

  const prev = () => {
    setDirection("right");
    setPrevIndex(current);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection("left");
    setPrevIndex(current);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer); // cleanup on unmount
  }, [current, interval]);

  useEffect(() => {
    if (direction === "right") {
      document.documentElement.style.setProperty('--transformDirection', `translateX(100%)`);
    } else {
      document.documentElement.style.setProperty('--transformDirection', `translateX(-100%)`);
    }
  }, [direction])

  return (
      <div className={`customCarousel ${section}`}>
        <div className="arrow left" onClick={prev}>
          <FaChevronLeft />
        </div>
        <div className="arrow right" onClick={next}>
          <FaChevronRight />
        </div>
        {images.map((item, i) => {
          let className = "carouselSlide";
          if (i === current) {
            // Incoming slide
            className +=" active";
          } else if (i === prevIndex) {
            // Outgoing slide
            className += direction === "right" ? " slide-out-left" : " slide-out-right";
          }

          return (
            <div
              key={i}
              className={className}
            >
              {item.type === "video" ? (
                <video src={item.src} controls autoPlay muted loop playsInline />
              ) : (
                <img src={item.img} alt={item.desc} />
              )}
              <div className="imageDesc">{item.desc}</div>
            </div>
          );
        })}
      </div>
  );
}
