// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

var server = http.createServer(function(req, res) {
  var parseUrl = url.parse(req.url, true);
  var pathName = parseUrl.pathname;
  var query = parseUrl.query;
  if (pathName === '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (pathName === '/add') {
    comments.push(query.comment);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  } else if (pathName === '/comment') {
    res.end(JSON.stringify(comments));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
server.listen(3000, function() {
  console.log('Server is running...');
});