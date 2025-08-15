import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import "../css/imageCarousel.css";

export default function ImageCarousel({ images, interval = 5000 }) { // interval in ms
  const [current, setCurrent] = useState(0);
  const [popUp, setPopUp] = useState(null);
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
    <>
      {popUp && (
        <div className="screenCover" onClick={() => {setPopUp(null)}}>
          <div className="imageContainer">
            <SlClose className="closePopUp" />
            <div className={`carouselSlide active`} >
              <img src={popUp.img} alt={popUp.desc} />
              <div className="imageDesc">{popUp.desc}</div>
            </div>
          </div>
        </div>
      )}
      <div className="customCarousel">
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
              onClick={() => setPopUp(item)}
            >
              <img src={item.img} alt={item.desc} />
              <div className="imageDesc">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
