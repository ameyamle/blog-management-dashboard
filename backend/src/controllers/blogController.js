const Blog = require("../models/blogModel");

// List all blogs
exports.list = (req, res) => {
  Blog.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

// Get single blog
exports.getOne = (req, res) => {
  Blog.getById(req.params.id, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows[0]);
  });
};

// Create blog
exports.create = (req, res) => {
  Blog.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Blog Created Successfully" });
  });
};

// Update blog
exports.update = (req, res) => {
  Blog.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Blog Updated Successfully" });
  });
};

// Delete blog
exports.delete = (req, res) => {
  Blog.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Blog Deleted Successfully" });
  });
};
