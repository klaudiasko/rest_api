const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILENAME='collection.json';
const ENCODING='utf-8';
const SUCCESS_MESSAGE='success';


router.get('/', async (req, res) => {
    let collection = JSON.parse(fs.readFileSync(FILENAME,ENCODING));
    unique = collection.filter((v, i, a) => a.indexOf(v) === i);
    res.json({message:SUCCESS_MESSAGE,
    collection: unique});
})



module.exports = router;
