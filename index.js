const { sequelize, } = require("./models");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


// const match = require("./routes/match");
// const minify = require("./routes/minify");


// app.use("/api", match);
// app.use("api/", minify);


app.get("api", (req, res) => {
    res.send("ignition started");
})


app.listen(PORT, async () => {
    await sequelize.sync()
    console.log("ignition started on port:" + PORT);
})