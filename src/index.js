const express = require("express");
const mongoose = require("mongoose");
 require("dotenv").config();
  const userRoutes = require("./routes/user")

const app = express();
const port = process.env.Port || 5000;

// routes
app.use(express.json())
app.use('/api',userRoutes)



app.get("/", (req, res) => {
  res.send("Fraccionamientos api");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado con mongodb "))
  .catch((error) => console.log(error));
app.listen(port, () => console.log("servidor encendido en el puerto:", port));
