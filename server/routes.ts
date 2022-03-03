import express from 'express';

export const routes = express.Router();

routes.get('/', (req, res) => res.send({ hello: 'world' }));
routes.get('/users', (req, res) =>
  res.send([
    {
      name: 'Admin',
      age: 36,
      rights: ['admin', 'editor', 'contributor'],
    },
    {
      name: 'Willy',
      age: 40,
      rights: ['admin', 'editor', 'writer'],
    },
  ])
);
routes.post('/users', (req, res) => res.send({ body: req.body }));
