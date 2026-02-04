"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "@/app/components/SuccessModal";

type BlogData = {
  title: string;
  slug: string;
  author: string;
  content: string;
  category: string;
  tags: string;
  published: boolean;
  status: string;
  publish_date: string;
  reading_time: number;
};

type Props = {
  mode: "create" | "edit";
  blogId?: string;
};

export default function BlogForm({ mode, blogId }: Props) {
  const router = useRouter();

  const [form, setForm] = useState<BlogData>({
    title: "",
    slug: "",
    author: "",
    content: "",
    category: "Tech",
    tags: "",
    published: false,
    status: "draft",
    publish_date: "",
    reading_time: 5,
  });

  const [loading, setLoading] = useState(mode === "edit");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadBlog = async () => {
      if (mode === "edit" && blogId) {
        const res = await fetch(`http://localhost:5000/api/blogs/${blogId}`);

        if (!res.ok) {
          alert("Blog not found");
          router.push("/blogs");
          return;
        }

        const data = await res.json();

        setForm({
          title: data.title || "",
          slug: data.slug || "",
          author: data.author || "",
          content: data.content || "",
          category: data.category || "Tech",
          tags: data.tags || "",
          published: data.published == 1,
          status: data.status || "draft",
          publish_date: data.publish_date ? data.publish_date.slice(0, 10) : "",
          reading_time: data.reading_time || 5,
        });

        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    loadBlog();
  }, [mode, blogId, router]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const url =
      mode === "create"
        ? "http://localhost:5000/api/blogs"
        : `http://localhost:5000/api/blogs/${blogId}`;

    await fetch(url, {
      method: mode === "create" ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSuccessMessage(
      mode === "create"
        ? "Blog created successfully!"
        : "Blog updated successfully!"
    );
    setShowSuccess(true);
  };

  if (loading) {
    return (
      <div className="card flex min-h-[50vh] items-center justify-center p-8">
        <p className="text-sm font-semibold text-slate-500 animate-pulse">
          Loading blog...
        </p>
      </div>
    );
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-header space-y-2">
          <p className="Edit Blog">
            {mode === "create" ? "New Post" : "Editing"}
          </p>
          <h1 className="form-title">
            {mode === "create" ? "Create Blog" : "Edit Blog"}
          </h1>
          <p className="text-sm text-slate-600">
            Keep details concise and focus on a clear, publish-ready story.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-card">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">Slug</label>
              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Author</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={6}
              className="form-textarea"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="form-label">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-select"
              >
                <option>Tech</option>
                <option>Business</option>
                <option>Education</option>
                <option>Health</option>
              </select>
            </div>

            <div>
              <label className="form-label">Reading Time</label>
              <input
                type="number"
                name="reading_time"
                value={form.reading_time}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Tags</label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-checkbox-box">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
              className="h-4 w-4 accent-blue-500"
            />
            <span className="text-sm font-medium text-slate-700">
              Published
            </span>
          </div>

          <div>
            <p className="form-label mb-2">Status</p>
            <div className="flex flex-wrap gap-5">
              {["draft", "published"].map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <input
                    type="radio"
                    name="status"
                    value={s}
                    checked={form.status === s}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label">Publish Date</label>
            <input
              type="date"
              name="publish_date"
              value={form.publish_date || ""}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="form-btn">
            {mode === "create" ? "Save Blog" : "Update Blog"}
          </button>
        </form>
      </div>

      <SuccessModal
        open={showSuccess}
        message={successMessage}
        onClose={() => {
          setShowSuccess(false);
          router.push("/blogs");
        }}
      />
    </div>
  );
}
