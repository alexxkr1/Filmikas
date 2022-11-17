const express = require('express');

const { request } = require('express');
const app = express();

exports.getIndex = (req, res) => {
    res.render('index');
};

exports.getTest = (req, res) => {
    res.render('Test');
};

exports.getTests = (req, res) => {
    res.render('Tests');
};
