import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = (props) => {
  const { img1, img2 } = props;

  const images = [img1, img2];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2500}
      transitionTime={800}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      useKeyboardArrows={false}
    >
      {images.map((image) => (
        <img src={image} alt="Imágen de tienda" />
      ))}
    </Carousel>
  );
};

export default Slideshow;
