"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Pagination from "@/app/components/Pagination";

type Blog = {
  id: number;
  title: string;
  author: string;
  status: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  const openDeleteModal = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedId) return;

    await fetch(`http://localhost:5000/api/blogs/${selectedId}`, {
      method: "DELETE",
    });

    setBlogs(blogs.filter((b) => b.id !== selectedId));

    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="page-header">
            Blog Management
          </h1>
          <p className="text-sm text-slate-600">
            Track drafts, published posts, and editorial progress in one place.
          </p>
        </div>

        <Link
          href="/blogs/create"
          className="create-btn"
        >
          Create Blog
        </Link>
      </div>

      <div className="card p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search blogs..."
            className="search-blogs"
          />

          <select className="filter-dropdown">
            <option value="">Filter by Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="hidden overflow-hidden sm:block card">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="h-4 w-4 accent-blue-600" />
              </th>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Author</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="border-t border-slate-200/70 hover:bg-slate-50/80"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                </td>

                <td className="px-4 py-3 text-slate-500">{blog.id}</td>
                <td className="px-4 py-3 font-semibold text-slate-900">
                  {blog.title}
                </td>
                <td className="px-4 py-3 text-slate-600">{blog.author}</td>

                <td className="px-4 py-3">
                  <span
                    className={`status-tag ${
                      blog.status === "published"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/blogs/edit/${blog.id}`}
                      className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => openDeleteModal(blog.id)}
                      className="rounded-lg bg-rose-600 px-4 py-1.5 text-xs cursor-pointer font-semibold text-white transition hover:bg-rose-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {blogs.length === 0 && (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 sm:hidden">
        {blogs.map((blog) => (
          <div key={blog.id} className="card p-4">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold text-slate-900">{blog.title}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  blog.status === "published"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {blog.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              Author: <span className="font-medium">{blog.author}</span>
            </p>

            <p className="mt-1 text-xs text-slate-400">ID: {blog.id}</p>

            <div className="mt-4 flex gap-2">
              <Link
                href={`/blogs/edit/${blog.id}`}
                className="edit-btn"
              >
                Edit
              </Link>

              <button
                onClick={() => openDeleteModal(blog.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <p className="text-center text-slate-500">No blogs found.</p>
        )}
      </div>

      <Pagination total={blogs.length} />

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-900">
              Confirm Delete
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Are you sure you want to delete this blog record?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
