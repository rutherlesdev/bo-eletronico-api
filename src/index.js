import express from "express";
import bodyParser from "body-parser";
import connect from "./services/db";
import router from "./routes/boletim.route";

const app = express();

const db = connect();

app.use(bodyParser());
app.get("/", (req, res) => {
    res.json("Hello there");
});
app.use("/api/v1", router);

app.listen(process.env.PORT || 3000);
