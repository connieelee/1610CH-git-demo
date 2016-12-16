const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const path = require('path');
const db = require('./db');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(volleyball);

// static
const rootPath = path.join(__dirname, '../');
const browserPath = path.join(rootPath, '/browser');
const nodeModulesPath = path.join(rootPath, '/node_modules');
app.use(express.static(browserPath));
app.use(express.static(nodeModulesPath));

// api routes
app.use('/api', require('./routes'));

// serve up react app
app.route('*').get((req, res) => {
  res.sendFile(`${browserPath}/index.html`);
});

// error handling
app.use((err, req, res) => {
  res
    .status(err.status || 500)
    .send(err.message || 'There was an issue!');
});

// sync db and start!
db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('App is listening on port 3000');
    });
  })
  .catch(err => {
    console.log(chalk.red('This is problematic...', err));
  });
