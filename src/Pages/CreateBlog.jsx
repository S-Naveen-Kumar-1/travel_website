import React, { useState } from "react";
import { Base_Url } from "../config";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    detailedDescription: "",
    authorName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title || !formData.description) {
      setError("Title and description are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${Base_Url}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        navigate(`/blogs/${result.data._id}`, {
          state: { blog: result.data },
        });
      } else {
        setError(result.message || "Failed to create blog");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Create New Blog
        </h1>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring"
              placeholder="Enter blog title"
            />
          </div>

          {/* AUTHOR */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Author name"
            />
          </div>

          {/* SHORT DESCRIPTION */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Short Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Short summary of the blog"
            />
          </div>

          {/* DETAILED DESCRIPTION */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Detailed Content
            </label>
            <textarea
              name="detailedDescription"
              value={formData.detailedDescription}
              onChange={handleChange}
              rows={6}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Full blog content"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded text-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
