import express from "express";
import cors from "cors";

const app = express();
const port = 3310;

app.use(cors({ origin: ["http://localhost:5173"] }));

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

app.get("/api/employees", (req, res) => {
  console.log("Requête reçue sur /api/employees");
  res.json({ results: [sampleEmployee] });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
