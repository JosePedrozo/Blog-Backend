const express = require('express');
const cors = require('cors'); 

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());

const postRoutes = require('./routes/post.routes');
app.use('/posts', postRoutes);

module.exports = app;
