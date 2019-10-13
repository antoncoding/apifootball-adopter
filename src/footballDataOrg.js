let request = require('request');

exports.footballDataOrgAdopter = (req, res) => {
    const API_KEY = process.env.FOOTBALL_DATA_ORG_KEY
    const match_id = req.body.data.match_id || ''
    const url = `https://api.football-data.org/v2/matches/${match_id}`
    const headers = {
      'X-Auth-Token': API_KEY,
    }
    let options = {
      headers,
      url: url,
      json: true,
    }

  request(options, (error, response, body) => {
    if (error || response.statusCode >= 400) {
        let errorData = {
            jobRunID: req.body.id,
            status: "errored",
            error: body
        };
        res.status(response.statusCode).send(errorData);
    } else {
      let returnData = {
        jobRunID: req.body.id,
        data: body
      };
      res.status(response.statusCode).send(returnData);
    }
  });
};