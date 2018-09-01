var http = require('http');

require("appdynamics").profile({
    controllerHostName: 'controllerurl.com',
    controllerPort: 8090,
    accountName: 'customer1',
    accountAccessKey: '13e858d9',
    applicationName: 'NodeJS_API',
    tierName: 'AzureAppService',
    nodeName: 'NodeProcess',
    reuseNode: true,
    reuseNodePrefix: "app.test",
    libagent:true
 });

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("AppDynamics the Best!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
