let request = require('request');

exports.apiFootballAdopter = (req, res) => {
  const footballApiKey = process.env.APIKEY;
  const match_id = req.body.data.match_id || "";
  const url = `https://apiv2.apifootball.com/?action=get_events&match_id=${match_id}&APIkey=${footballApiKey}`;
  
  let options = {
      url: url,
      json: true
  };

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
        data: body[0]
      };
      res.status(response.statusCode).send(returnData);
    }
  });
};