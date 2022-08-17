const express = require('express');
const app = express();

const path = require('path');
console.log("hereeee");
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 8080, function () {
    console.log("APP STARTED");
});