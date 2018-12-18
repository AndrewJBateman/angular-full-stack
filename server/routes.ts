import express = require('express');
const app = express.Router();

export { app as routes };

app.get('/', (req, res) => res.send({hello: 'world'}));
app.get('/users', (req, res) => res.send([]));
app.post('/users', (req, res) => res.send({body: req.body}));