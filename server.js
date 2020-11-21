// server.js
// where your node app starts

// init project
var express = require('express');
var moment = require('moment')
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:date", (req, res) => {
  //check if the date is in YYYY-MM-DD or UNIX. If true => YYYY-MM-DD, else false.
  let validity = moment(req.params.date).isValid()

  //Conditional response based on the time format 
  if(validity){
    let u = new Date(req.params.date)
    res.json({
      unix: u.getTime(),
      utc: u.toUTCString()
    })
  } else{
    let d = new Date(req.params.date*1)
    res.json({
      unix: d.getTime(),
      utc: d.toUTCString()
    })
  }
});



// listen for requests :)
console.log(process.env.PORT)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
