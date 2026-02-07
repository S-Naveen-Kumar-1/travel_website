import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Base_Url } from "../config";
import BlogView from "../components/BlogView";

const BlogListing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedBlog = location.state?.blog;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${Base_Url}/blogs`);
        const result = await res.json();

        if (result.success) {
          setBlogs(result.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* ================= SHOW SINGLE BLOG ================= */
  if (selectedBlog) {
    return <BlogView blog={selectedBlog} />;
  }

  /* ================= SHOW BLOG LIST ================= */
  if (loading) {
    return <p className="text-center mt-10">Loading blogs...</p>;
  }

  return (
    <div className="p-5 w-full flex flex-col items-center">

      {/* 🔹 HEADER BAR */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Travel Blogs</h1>

        <button
          onClick={() => navigate("/create-blog")}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + Create Blog
        </button>
      </div>

      {/* 🔹 BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {blogs.map((blog) => {
          const photos = blog.photos || [];

          return (
            <div
              key={blog._id}
              onClick={() => navigate("/blogs", { state: { blog } })}
              data-aos="fade-up"
              className="flex flex-col items-center cursor-pointer p-4 shadow-lg rounded-lg hover:shadow-xl transition"
            >
              {photos.length > 0 ? (
                <img
                  src={photos[0]}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              <h2 className="text-xl font-semibold mb-2 text-center">
                {blog.title}
              </h2>

              <p className="text-gray-600 line-clamp-3 text-center mb-4">
                {blog.description}
              </p>

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read Blog
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogListing;
