require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Importando el CORS middleware
const router = require("./routes");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan("dev"));

// Usando el CORS middleware
server.use(cors());

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
