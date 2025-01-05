import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const BlogView = ({ blogs }) => {
  const location = useLocation();
  const { id } = useParams();

  const blog = location.state?.blog || blogs.find((b) => b.id === parseInt(id));

  const [likes, setLikes] = useState(blog.likes || 0);
  const [comments, setComments] = useState(blog.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    if (likes === 0) {
      setLikes(likes + 1); // Allow liking only once
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          text: newComment,
          author: "Guest",
          timestamp: new Date().toISOString(),
        },
      ]);
      setNewComment("");
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    return formattedTime;
  };

  if (!blog) {
    return <p className="text-red-500">Blog not found.</p>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row">
        {/* Left Side: Images */}
        <div className=" hidden lg:flex lg:flex-1 mb-8 md:mb-0 md:mr-8 order-last md:order-first">
          <div className="w-full">
            <img
              src={blog.photos[0]}
              alt={blog.title}
              className="w-full h-72 object-cover rounded-lg mb-6"
            />
            {blog.photos.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.photos.slice(1).map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Blog photo ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 pr-8 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center mb-6">
            <img
              src={blog.authorImage}
              alt={blog.authorName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-gray-600 text-lg">{blog.authorName}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{blog.description}</p>

          {/* Detailed description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Details
            </h2>
            <p className="text-lg text-gray-700">{blog.detailedDescription}</p>
          </div>

          <div className="  flex-1 lg:hidden mb-8 md:mb-0 md:mr-8 order-last md:order-first">
            <div className="w-full">
            
              {blog.photos.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blog.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Blog photo ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>


          {/* Like Button */}
          <div className="mb-8">
            <button
              onClick={handleLike}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 disabled:opacity-50"
              disabled={likes > 0}
            >
              <FaHeart
                className={`text-xl ${
                  likes > 0 ? "text-red-500" : "text-white"
                }`} // Heart icon color changes when liked
              />
              <span>
                {likes > 0 ? "Liked" : "Like"} ({likes})
              </span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comments
            </h3>
            <form
              onSubmit={handleCommentSubmit}
              className="flex flex-col lg:flex-row gap-4 mb-6"
            >
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 border border-gray-300 rounded-l-lg p-4 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 lg:mt-0 lg:ml-4 px-6 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>

            <div className="space-y-6">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 border-b border-gray-300 pb-6"
                >
                  <img
                    src="https://via.placeholder.com/40" // Placeholder avatar image for comments
                    alt="Commenter Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800">
                        {comment.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatTime(comment.timestamp)}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 mt-2 text-start">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
