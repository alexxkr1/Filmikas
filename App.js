
const app = require("express")();
const port = 3000;
const express = require('express');

app.use(express.static('public'))
app.set('view engine', 'ejs');

require("./routes/routes")(app);

app.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`)
});