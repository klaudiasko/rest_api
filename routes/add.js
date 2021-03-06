const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILENAME = 'collection.json';
const ENCODING = 'utf-8';
const SUCCESS_MESSAGE = 'success';

router.get('/', (req, res) => {
    res.send('Add word');
});

router.post('/', async (req, res) => {
    const word = req.body.word;
    let collection = JSON.parse(fs.readFileSync(FILENAME, ENCODING));
    collection.push(req.body.word);
    fs.writeFileSync(FILENAME, JSON.stringify(collection));
    res.json({
        message: SUCCESS_MESSAGE,
        collection: collection
    });
})

module.exports = router;
