require("dotenv").config();
import { dbConnect } from "./config/mongo";
const express = require("express");
const { URL_API, PORT } = require("./config/softcredentials");

const app = express();

app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT, () => console.log(`%s listening on port: ${PORT}`));
dbConnect();
