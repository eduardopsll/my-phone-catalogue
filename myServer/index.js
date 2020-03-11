import express from "express";
import cors from "cors";
import phones from "./phones.json";

const app = express();
app.use(cors());

app.get("/phones", (_, res) => {
  res.status(200).json(phones);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

export default app;
