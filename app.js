const express = require("express");
const app = express();
const cors = require("cors");
const fileRouter = require("./routes/file.route");
require("./config/db");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/test", fileRouter);


// home route
app.get("/", (req, res) => {
    res.status(200).send("home page")
});


app.use((req, res, next) => {
    res.status(400).json({
        message : "route not found"
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message : "something broken"
    });
});


module.exports = app;