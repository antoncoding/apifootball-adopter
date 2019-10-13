const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


const { apiFootballAdopter } = require('./src/apiFootball')
const { footballDataOrgAdopter } = require('./src/footballDataOrg')

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

app.post('/apifootball/',(req, res) => { 
  console.log(req.body)
  apiFootballAdopter(req, res)
});

app.post('/footballData/',(req, res) => { 
  console.log(req.body)
  footballDataOrgAdopter(req, res)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});