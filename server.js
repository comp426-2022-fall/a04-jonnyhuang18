import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port||5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port);

app.get("*", (req,res) => {
    return res.send("404 NOT FOUND");
});

app.get("/app/", (req,res) => {
    return res.send("200 OK");
});