const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILENAME='collection.json';
const ENCODING='utf-8';
const SUCCESS_MESSAGE='success';

router.get('/', (req, res) => {
    res.send('Delete words');
});

router.post('/', async (req, res) => {
    const word = req.body.word;
    console.log(word);
    let collection = JSON.parse(fs.readFileSync(FILENAME,ENCODING));
    collection = collection.filter(function(item){
        return item != word;
    })
    fs.writeFileSync(FILENAME,JSON.stringify(collection));
    console.log(collection);
    res.json({message:SUCCESS_MESSAGE,
        collection: collection});
})



module.exports = router;
