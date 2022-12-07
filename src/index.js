import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(join(__dirname, "views"));
app.listen(3000);

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use(indexRouter);

app.use(express.static(join(__dirname, "public")));

console.log("server in listening on port " + 3000);
