const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const allRoute = require("./routes/index");
const path = require("path");

// To parse multipart forms with extended html characters
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Import all routes
app.use("/", allRoute);

app.listen(PORT, () => {
    console.log(`Website is running on http://127.0.0.1:${PORT}`);
});
