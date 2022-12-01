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
    res.send("404 NOT FOUND");
});

app.get("/app/", (req,res) => {
    res.send("200 OK");
});

app.get("/app/roll/", (req,res) => {
    res.send(roll(6, 2, 1));
});

app.get("/app/roll/", (req,res) => {
    res.send(roll(6, 2, 1));
});

app.post('/app/roll', (req, res) => {
    var sides = parseInt(req.body.sides) || 6;
    var dice = parseInt(req.body.dice) || 2;
    var rolls = parseInt(req.body.rolls) || 1;
    res.status.send(roll(sides, dice, rolls));
})