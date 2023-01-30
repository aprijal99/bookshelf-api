const Hapi = require('@hapi/hapi');
const apiRoutes = require('./routes/api');

const port = 5000;
const host = 'localhost';

const init = async () => {
  const server = Hapi.server({
    port,
    host: process.env.NODE_ENV !== 'production' ? host : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(apiRoutes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

init();
