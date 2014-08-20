var gereji = require("gereji");
var settings = require("./settings.json");
settings.path = __dirname + "/";
gereji.listen(settings);
