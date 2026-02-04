const db = require("../db");

// Get all blogs
exports.getAll = (cb) => {
  db.query("SELECT * FROM blogs", cb);
};

// Get blog by id
exports.getById = (id, cb) => {
  db.query("SELECT * FROM blogs WHERE id=?", [id], cb);
};

// Create blog
exports.create = (data, cb) => {
  db.query("INSERT INTO blogs SET ?", data, cb);
};

// Update blog
exports.update = (id, data, cb) => {
  db.query("UPDATE blogs SET ? WHERE id=?", [data, id], cb);
};

// Delete blog
exports.remove = (id, cb) => {
  db.query("DELETE FROM blogs WHERE id=?", [id], cb);
};
