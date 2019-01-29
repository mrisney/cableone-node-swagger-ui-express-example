const express = require('express');
const bodyParser = require('body-parser');
const { ExpressSwagger } = require('node-swagger-ui-express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./controllers/authController')(app);
ExpressSwagger.swaggerInit(app);

app.listen(3300);