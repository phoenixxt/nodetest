const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("{ hi: 'th3ere' }")
});

app.listen(5000);