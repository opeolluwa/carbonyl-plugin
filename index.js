const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {
    nanoid
} = require('nanoid');
const dotenv = require('dotenv');

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL
const PORT = process.env.PORT || 3030
const BASE_URL = process.env.BASE_URL || "https://carbonyl.onrender.com/"

// app settings
const app = express();

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

//health check
app.get("/", (req, res) => {
    res.json({
        message: "ok"
    })
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



// set the shortenedUrlKEy
app.put('/api/v2/minify/set', async (req, res) => {
    const {
        id,
        customId
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
        minifiedUrl.shortenedUrlKey = customId
        minifiedUrl.save()
        return res.json(minifiedUrl);
    } catch (err) {
        return res.status(500).json({
            error: err
        })

    }
});

// delete the url
app.delete('/api/v2/minify', async (req, res) => {
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
        await MinifiedUrlModel.deleteOne({
            shortenedUrlKey: id.trim()
        })
        return res.json({
            message: "success"
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
})
app.listen(PORT, async () => {
    mongoose.connect(DATABASE_URL).then((result) => {
        console.log("connected to mongodb")
    }).catch((error) => {
        console.log(error.message)
    })
    console.log("ignition started on port:" + PORT);
})