var subscriber = require('redis').createClient(6379, '127.0.0.1');

subscriber.subscribe('test');
subscriber.on('message', function(channel, message) {
  console.log('channel: ' + channel + ', message: ' + message);
});
