// Import required modules
const Hapi = require('hapi');

// Create a new server instance
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

// Define a route
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, World!';
    }
});

// Start the server
const startServer = async () => {
    try {
        await server.start();
        console.log('Server started on port 3000');
    } catch (error) {
        console.log('Error starting server:', error);
    }
};

startServer();
