const express = require('express');
const path = require('path');

const app = express();
const port = 8085;

app.use(express.static(path.join(__dirname, '../front/dist')));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

app.use(require('cors')());

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => console.log(`http://localhost:${port}`));
