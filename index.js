const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
var cors = require('cors')
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
   console.log('Hello world');
});

app.listen(process.env.PORT);
