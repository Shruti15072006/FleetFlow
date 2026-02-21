// server/test-server.js
const express = require("express");
const app = express();

app.use(express.json());

// Simple routes that DEFINITELY work
app.get("/", (req, res) => {
  res.json({ message: "Root route works!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Health check works!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API test works!" });
});

app.post("/api/test", (req, res) => {
  res.json({
    message: "POST test works!",
    data: req.body,
  });
});

// Import your actual routes
try {
  const tripRoutes = require("./routes/trip.routes");
  app.use("/api/trips", tripRoutes);
  console.log("✅ Trip routes loaded");
} catch (err) {
  console.log("❌ Failed to load trip routes:", err.message);
}

const PORT = 5005; // Different port to avoid conflicts
app.listen(PORT, () => {
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ TEST SERVER RUNNING ON PORT ${PORT}
📡 Try these URLs:
   └─► http://localhost:${PORT}/
   └─► http://localhost:${PORT}/health
   └─► http://localhost:${PORT}/api/test
   └─► http://localhost:${PORT}/api/trips
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
});
