const express = require('express');
const router = new express.Router();

router.get('/party', (req, res) => {
    res.send('Party Route');
})

module.exports = router;