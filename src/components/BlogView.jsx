import React, { useEffect, useState } from "react";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { Base_Url } from "../config";

const BlogView = ({ blog }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (blog?.likes !== undefined) {
      setLikes(blog.likes);
      setComments(blog.comments || []);
    }
  }, [blog]);

  if (!blog) {
    return <p className="text-center mt-10">Blog not found</p>;
  }

  const photos = blog.photos || [];

  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 py-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">

        {/* BLOG IMAGE */}
        {photos.length > 0 ? (
          <img
            src={photos[0]}
            alt={blog.title}
            className="w-full h-56 sm:h-72 object-cover"
          />
        ) : (
          <div className="w-full h-56 sm:h-72 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        {/* CONTENT */}
        <div className="p-5 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            {blog.title}
          </h1>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            {blog.description}
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            {blog.detailedDescription}
          </p>

          {/* LIKE BUTTON */}
          <button
            onClick={async () => {
              if (likes > 0) return;
              const res = await fetch(`${Base_Url}/blogs/${blog._id}/like`, {
                method: "POST",
              });
              const result = await res.json();
              if (result.success) setLikes(result.data);
            }}
            disabled={likes > 0}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm sm:text-base
              ${
                likes > 0
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }
            `}
          >
            <FaHeart />
            {likes > 0 ? "Liked" : "Like"} ({likes})
          </button>

          {/* COMMENTS */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>

            {/* ADD COMMENT */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!newComment.trim()) return;

                const res = await fetch(
                  `${Base_Url}/blogs/${blog._id}/comments`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      text: newComment,
                      author: "Guest",
                    }),
                  }
                );

                const result = await res.json();
                if (result.success) {
                  setComments(result.data);
                  setNewComment("");
                }
              }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring"
                placeholder="Write a comment..."
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                Post
              </button>
            </form>

            {/* COMMENT LIST */}
            <div className="space-y-4">
              {comments.length === 0 && (
                <p className="text-gray-500 text-sm">
                  No comments yet. Be the first to comment!
                </p>
              )}

              {comments.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg"
                >
                  {/* USER AVATAR */}
                  <FaUserCircle className="text-3xl text-gray-400 mt-1" />

                  {/* COMMENT BODY */}
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {c.author || "Guest"}
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {c.text}
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
