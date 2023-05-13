const express = require('express');
const YAML = require('yamljs');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

const repositories = YAML.parse(fs.readFileSync(path.join(__dirname, 'repositories.yaml'), 'utf8'));

app.get('/repositories', (req, res) => {
  res.json(repositories);
});

app.listen(3001, () => {
  console.log('Microservice listening on port 3001');
});
