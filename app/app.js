import express from "express";
import cors from "cors";
import { validatePassword } from "./validatePassword";

const app = express();
const port = 5000;
app.use(cors());

app.post("/users", (req, res) => {
  const { username, password } = req.body;

  const validPassword = validatePassword(password);

  if (validPassword) {
    res.send({ message: "valid user" });
  } else {
    res.send({ error: "invald password" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
