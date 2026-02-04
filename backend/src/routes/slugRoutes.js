const router = require("express").Router();
const db = require("../db");

// Check if slug already exists
router.get("/check/:slug", (req, res) => {
  const { slug } = req.params;

  db.query(
    "SELECT id FROM blogs WHERE slug=?",
    [slug],
    (err, rows) => {
      if (err) return res.status(500).json(err);

      if (rows.length > 0) {
        return res.json({ exists: true });
      }

      res.json({ exists: false });
    }
  );
});

module.exports = router;
