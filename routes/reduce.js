const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILENAME='collection.json';
const ENCODING='utf-8';
const SUCCESS_MESSAGE='success';



router.get('/', async (req, res) => {
    let collection = JSON.parse(fs.readFileSync(FILENAME,ENCODING));
    reduplication = collection.reduce((b,c)=>((b[b.findIndex(d=>d.word===c)]||b[b.push({word:c,count:0})-1]).count++,b),[]);
    console.log(reduplication);
    res.json({message:SUCCESS_MESSAGE,
        reduplication: reduplication});
})



module.exports = router;
