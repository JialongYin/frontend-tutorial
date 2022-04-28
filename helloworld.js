var server_port = 65432;
var server_addr = "192.168.0.104";   // the IP address of your Raspberry PI
const net = require('net');

console.log('RUN SUCCESS!');
const client = net.createConnection({ port: server_port, host: server_addr }, () => {
    // 'connect' listener.
    console.log('connected to server!');
    // send the message
    client.write(`stats`);
});

// get the data from the server
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
    client.destroy();
});

client.on('end', () => {
    console.log('disconnected from server');
});

// Console will print the message
console.log('Client finish running');
