const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


const { apiFootballAdopter } = require('./src/matchAdopter')

app.get('/',(req, res)=>{
  res.send(
    `Sample Usage:\nPost /getMatch with 
    {
      "id":"278c97ffadb54a5bbb93cfec5f7b5503",
      "data":{
        "match_id":"224488"
      }
    }`)
})

app.post('/getMatch',(req, res) => { 
  console.log(req.body)
  apiFootballAdopter(req, res)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});