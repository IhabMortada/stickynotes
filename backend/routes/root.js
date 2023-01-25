const express = require('express')
const router = express.Router()
const path = require('path')

// '^/$ means exactly the '/' or index or index.html as optional 
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))

})

module.exports = router
