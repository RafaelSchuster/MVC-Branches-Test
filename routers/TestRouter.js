const express = require('express');
const router = new express.Router();

router.get('/test', (req, res)=>{
    console.log('yes')
})
module.exports = router;