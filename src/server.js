const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// import pkg from '@hapi/hapi'
// const {Hapi} = pkg
// import routes from './routes';
 
const init = async () => {
  constserver = Hapi.server({    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
});

  server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();
