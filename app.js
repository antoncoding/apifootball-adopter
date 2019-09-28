const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


const { apiFootballAdopter } = require('./src/matchAdopter')

app.post('/getMatch',(req, res) => { 
  console.log(req.body)
  apiFootballAdopter(req, res)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});