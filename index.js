const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {
    nanoid
} = require('nanoid');

// app settings
const app = express();
const PORT = process.env.PORT || 3030
const BASE_URL = process.env.BASE_URL || "https://carbonyl.onrender.com/"
//middleware
app.use(express.json())
app.use(cors())

// the database schema
const MinifiedUrlSchema = new mongoose.Schema({
    originalUrl: String,
    shortenedUrlKey: String,
    visitCount: Number,
    createdAt: Date,
    lastVisit: Date
});

// the database model
const MinifiedUrlModel = mongoose.model('minifiedUrl', MinifiedUrlSchema);

//controllers
app.get("/health", (req, res) => {
    res.send("healthy")
});

//minify
app.post('/api/v2/minify', (req, res) => {
    const {
        url
    } = req.body

    if (!url) {
        return res.status(400).json({
            error: "url is required"
        })
    }
    try {
        const minifiedUrl = new MinifiedUrlModel({
            originalUrl: url,
            shortenedUrlKey: nanoid(9),
            visitCount: 0,
            createdAt: new Date(),
            lastVisit: new Date()
        })
        minifiedUrl.save()
        return res.status(200).json({
            message: "success",
            data: {
                ...minifiedUrl._doc,
                minifiedUrl: BASE_URL + minifiedUrl.shortenedUrlKey
            }
        })
    } catch (err) {
        return res.status(500).json({
            error: err
        })
    }
})

// increase the count for each visit 
app.get('/:shortenedUrlKey', async (req, res) => {
    const {
        shortenedUrlKey
    } = req.params
    try {
        const minifiedUrl = await MinifiedUrlModel.findOne({
            shortenedUrlKey: shortenedUrlKey.trim()
        })
        if (!minifiedUrl) {
            return res.status(404).json({
                error: "url not found"
            })
        }
        minifiedUrl.visitCount += 1
        minifiedUrl.lastVisit = new Date()
        minifiedUrl.save();
        return res.redirect(minifiedUrl.originalUrl);
    } catch (err) {
        return res.status(500).json({
            error: err
        })
    }
})

// get the statics /api/v2/minify?id=shortnedUrlKey
app.get('/api/v2/minify', async (req, res) => {
    const {
        id
    } = req.query
    try {

        const minifiedUrl = await MinifiedUrlModel.findOne({
            shortenedUrlKey: id.trim()
        })
        if (!minifiedUrl) {
            return res.status(404).json({
                error: "url not found"
            })
        }
        return res.json(minifiedUrl);
    } catch (err) {
        return res.status(500).json({
            error: err
        })
    }
})

// update the original url
app.put('/api/v2/minify', async (req, res) => {
    const {
        id,
        url
    } = req.body
    try {
        const minifiedUrl = await MinifiedUrlModel.findOne({
            shortenedUrlKey: id.trim()
        })
        if (!minifiedUrl) {
            return res.status(404).json({
                error: "url not found"

            })
        }
        minifiedUrl.originalUrl = url
        minifiedUrl.save()
        return res.json(minifiedUrl);
    } catch (err) {
        return res.status(500).json({
            error: err
        })

    }
})

// delete the url
app.delete('/api/v2/minify', async (req, res) => {
    const {
        id
    } = req.body
    try {
        const minifiedUrl = await MinifiedUrlModel.findOne({
            shortenedUrlKey: id.trim()
        })
        if (!minifiedUrl) {
            return res.status(404).json({
                error: "url not found"
            })
        }
        minifiedUrl.delete()
        return res.json({
            message: "success"
        });
    } catch (err) {
        return res.status(500).json({
            error: err
        })
    }
})


app.listen(PORT, async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/minifier').then((result, err) => {
        if (err) {
            console.log(err)
        }
        console.log("connected to mongodb")
    })
    console.log("ignition started on port:" + PORT);
})