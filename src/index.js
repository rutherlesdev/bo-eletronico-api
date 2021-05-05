import express from "express";
import bodyParser from "body-parser";
import connect from "./services/db";

const app = express();

const db = connect();

app.use(bodyParser());


app.listen(3001);
