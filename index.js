var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.get('/', function(request, response) {
  response.send('Hello!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at http://localhost:" + app.get('port') + '/');
});
