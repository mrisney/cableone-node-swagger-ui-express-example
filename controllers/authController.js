const { RequestAuthRegister, ResponseAuthRegister, RequestAuthAuthenticate, ResponseAuthAuthenticate } = require('../viewModel/auth');
const { ExpressSwagger } = require('node-swagger-ui-express');
const express = require('express');
const router = express.Router();

ExpressSwagger.initController('/api/account', express, router);

router.post('/register', async (req, resp) => {
    return resp.send("register");
}).toSwagger(ResponseAuthRegister, RequestAuthRegister);

router.put('/update', async (req, resp) => {
    return resp.send("global");
}).toSwagger(ResponseAuthAuthenticate, RequestAuthAuthenticate);

router.delete('/:id', async (req, resp) => {
    return resp.send("delete OK");
}).toSwagger(ResponseAuthAuthenticate);;

router.get('/:id', async (req, resp) => {
    return resp.send("get id OK");
}).toSwagger(ResponseAuthAuthenticate);

router.get('/', async (req, resp) => {
    return resp.send("get all OK");
}).toSwagger("");

module.exports = (app) => app.use(router.controller, router);