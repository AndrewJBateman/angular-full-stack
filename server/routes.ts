import express from 'express';
const app = express.Router();

export { app as routes };

app.get('/', (req, res) => res.send('Hello world'));
app.get('/users', (req, res) => res.send([]));
app.post('/users', (req, res) => res.send({body: req.body}));
