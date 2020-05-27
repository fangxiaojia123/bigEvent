const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api', 'routers', require('login.js'));
app.use('/my/article', 'routers', require('category.js'));
app.use('/my/article', 'routers', require('article.js'));
app.use('/my', 'routers', require('user.js'));