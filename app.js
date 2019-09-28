const express = require('express');
const app = express();
app.use(express.json());


const { apiFootballAdopter } = require('./src/matchAdopter')

app.post('/getMatch',(req, res) => { 
  console.log(req.body)
  apiFootballAdopter(req, res)
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});