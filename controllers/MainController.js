const express = require('express');

const { request } = require('express');
const app = express();

exports.getIndex = (req, res) => {
    res.render('index');
};

