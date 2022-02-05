//import  sequelize instance, for debugging alone
const { sequelize } = require("./models");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello /glacial-sands-27274")
})
//import all routes
const match = require("./routes/match");
const minify = require("./routes/minify");
const customId = require("./routes/custom-id");

//mount the routes
app.use("/", match);
app.use("/api", minify);
app.use("/api", customId);

app.listen(PORT, async () => {
    await sequelize.sync()
    console.log("ignition started on port:" + PORT);
})
