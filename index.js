var os = require("os");
var hostname = os.hostname();

require("appdynamics").profile({
    controllerHostName: 'lr45controllercent-lrdevopslab-leoo1lfg.srv.ravcloud.com',
    controllerPort: 8090,
      accountName: 'customer1',
     accountAccessKey: '68e1e626-2bcc-491d-b888-b8688aee29ec',
     applicationName: 'NodeJS_API',
     tierName: 'AzureAppService',
     nodeName: 'process',
     libagent:true
 });

var http = require('http');

http.createServer(function (req, res) {

  for(i=0;i < 1000000000; i++) {
    i+1;
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(5000);
