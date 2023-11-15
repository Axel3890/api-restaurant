const { Router } = require("express");
const router = Router();


router.get('/test', (req, res) => {
    //es prueba, luego los guardamos a la bd y consultamos desde ahí
    const data = {
        "name": "Axel"
    };
    res.json(data)
});

module.exports = router;