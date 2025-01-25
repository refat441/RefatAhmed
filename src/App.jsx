import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PostCard from "./components/PostCard";
import ImageLightbox from "./components/Lightbox";
import posts from "./data/posts";

const App = () => {
  // State hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtering posts
  const filteredPosts = posts.filter(
    (post) => post.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by sender's name
  );

  // Handler for clicking on an image
  const handleImageClick = (images, index) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-wll mx-auto p-4 ">
      {/* SearchBar component for filtering posts */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Grid section */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            // Rendering PostCard
            <PostCard
              key={post.id}
              post={post}
              onImageClick={handleImageClick}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}
      </div>

      {/* ImageLightbox component  */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default App;
