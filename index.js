//import  sequelize instance, for debugging alone
const { sequelize } = require("./models");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

const match = require("./routes/match");
const minify = require("./routes/minify");
const customId = require("./routes/custom-id");

app.use("/", match);
app.use("/api", minify);
app.use("/api", customId);



app.listen(PORT, async () => {
    await sequelize.sync()
    console.log("ignition started on port:" + PORT);
})
