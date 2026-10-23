import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/resume_eng", (req, res) => {
    res.render("resume_eng.ejs");
});

app.get("/resume_hun", (req, res) => {
    res.render("resume_hun.ejs")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});