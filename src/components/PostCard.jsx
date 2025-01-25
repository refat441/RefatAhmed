import React from "react";
import { format } from "date-fns";

const PostCard = ({ post, onImageClick }) => {
  const { sender, content, timestamp, likes, comments } = post;

  return (
    <div className="w-full max-w-screen-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden ">
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={sender.avatar}
            alt={sender.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-semibold text-white">{sender.name}</h4>
            <p className="text-sm text-gray-400">
              {format(new Date(timestamp), "PPpp")}
            </p>
          </div>
        </div>
        <p className="text-lg text-white mb-4 text-center">{content.text}</p>

        {/* Media Grid with responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6 justify-center">
          {content.media.map((media, index) => (
            <img
              key={index}
              src={media.src}
              alt={`Post media ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
              onClick={() => onImageClick(content.media, index)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center text-sm text-gray-400 space-x-4">
          <span className="flex items-center space-x-1">
            <span role="img" aria-label="likes">
              ❤️
            </span>
            <span>{likes}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span role="img" aria-label="comments">
              💬
            </span>
            <span>{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
