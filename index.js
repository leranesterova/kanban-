const express = require('express');
const bodyParser = require('./bodyParser');
const routes = require('./routes');

const app = express();
const PORT =  4000;

bodyParser(app);

routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})