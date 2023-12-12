const express = require('express');
const Model = require('../models/postModel');

// creating a router
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {

    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});

// : denotes url parameter
router.get('/getbylike/:like', (req, res) => {
    console.log(req.params.like);
    Model.find({ like : req.params.like  })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getbycomment/:comment', (req, res) => {

    Model.findOne({ comment : req.params.comment })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyshare/:share', (req, res) => {
    Model.findById(req.params.share)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;