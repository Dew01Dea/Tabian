const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'สวัสดี Back-End!' });
});

const members = [
  { id: 1, name: 'Durongkon', role: 'DevA' },
  { id: 2, name: 'Tharathep', role: 'DevB' },
];

const project = {
  team: 'Tabian',
  topic: 'Tabian',
  problem: 'Tabian problem',
  users: ['Student', 'Admin'],
  members: members,
};

app.get('/project', (req, res) => {
  res.json(project);
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});