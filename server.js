"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 1337;
// middleware
// (ingen middleware än)
// data - flytta till egen fil i framtiden
var dataFromApi = [
    { name: 'Nisse', loves: 'sågspån' },
    { name: 'Stina', loves: 'citron' }
];
// routes
app.get('/', function (req, res) {
    console.log('GET /');
    res.send('This server was built using TypeScript');
});
app.get('/hamsters', function (req, res) {
    res.send(dataFromApi);
});
// starta webbservern
app.listen(PORT, function () {
    console.log('Server is listening on port ' + PORT);
});
