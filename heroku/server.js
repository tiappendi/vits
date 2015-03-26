var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.get("/", function(req, res){
  res.sendfile("/index.html");
});
var port = process.env.PORT || 9000;
app.listen(port, function() {
    console.log("Listening on port " + port);
});