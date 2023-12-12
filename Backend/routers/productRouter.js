const express = require('express');
const Model = require('../models/productModel');

// creating a router
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
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
router.get('/getbyproduct/:product', (req, res) => {
    console.log(req.params.product);
    Model.find({ product : req.params.product  })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/getbytype/:type', (req, res) => {
    Model.findOne({ type : req.params.type })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    }); 
});

router.get('/getbyprice/:price', (req, res) => {
    console.log(req.params.price);
    Model.find({ price : req.params.price  })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });

});
router.get('/getbycolour/:color', (req, res) => {
    console.log(req.params.color);
    Model.find({ price : req.params.color  })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });

});


module.exports = router;