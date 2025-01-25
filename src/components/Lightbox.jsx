import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ImageLightbox component to display images in a Lightbox modal
const ImageLightbox = ({ isOpen, images, currentIndex, onClose }) => {
  // Mapping over the images array
  const slides = images.map((img) => ({ src: img.src }));

  return (
    // Rendering the Lightbox component
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={currentIndex}
    />
  );
};

export default ImageLightbox;
