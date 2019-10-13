# Football Match External Adopter

It's a sample football match external adopter to work with [Epuesta](https://github.com/antoncoding/epuesta).

Currently using two data sources:

* [API Football](https://apifootball.com)
* [Football Data Org](https://www.football-data.org/documentation/)

Already deployed on [heroku](https://apifootball-adopter.herokuapp.com/.)

## Usage

### Register API Key

If you want to run the external adopter on your own, you will have to register an API key at [APIFootball](https://apifootball.com/register/) and set it as your env variable.

### Bridge Creation

Create a new **Bridge** and connect your node to our heroku sample server (or the one you run on your own).

![New Bridge](https://i.imgur.com/Rk7AIrR.png)

### Job Specification

Then you can use `apifootball` in your job specifications. This adopter require one variable which is `match_id`, your smart contract should pass that in.

```json
{
  "initiators": [
    {
      "type": "RunLog",
      "params": { "address": "YOUR_ORACLE_ADDRESS" }
    }
  ],
  "tasks": [
    {
      "type": "apifootball"
    },
    {
      "type": "copy"
    },
    {
      "type": "EthUint256"
    },
    {
      "type": "EthTx"
    }
  ]
}
```

*Examples of using this adopter can be fund at [Epuesta](https://github.com/antoncoding/epuesta).
