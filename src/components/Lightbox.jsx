import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageLightbox = ({ isOpen, images, currentIndex, onClose }) => {
  const slides = images.map((img) => ({ src: img.src }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={currentIndex}
    />
  );
};

export default ImageLightbox;
