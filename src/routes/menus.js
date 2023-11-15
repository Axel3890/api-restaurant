const { Router } = require("express");
const router = Router();
const menus = require('../sample.json')

router.get('/', (req, res) => {
    res.json(menus)
});

module.exports = router;