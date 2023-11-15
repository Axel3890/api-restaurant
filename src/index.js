const express = require('express');
const morgan = require('morgan');
const app = express();

//sergings
app.set('port', process.env.PORT || 3000);



//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require("./routes/index.js"));
app.use('/api/menus', require("./routes/menus.js"));

app.listen(3000, () => {
    console.log("server running in port 3000")
});