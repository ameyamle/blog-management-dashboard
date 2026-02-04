const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");
const slugRoutes = require("./routes/slugRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Blog CRUD Routes
app.use("/api/blogs", blogRoutes);

// ✅ Slug Validation Routes
app.use("/api/slugs", slugRoutes);

app.listen(5000, () => {
  console.log("✅ Backend running at http://localhost:5000");
});
