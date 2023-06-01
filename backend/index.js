const connectToMongo = require("./db");
const express = require("express");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/note");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
