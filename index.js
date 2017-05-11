'use strict';

require('babel/register')({});

require.extensions['.css'] = () => {
  return;
};

// ISO: Isomorphic server with Server side rendering
//var server = require('./server/server-iso');

// NON-ISO: Server just renders static html w/ no SSR
var server = require('./server/server-noniso');

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});