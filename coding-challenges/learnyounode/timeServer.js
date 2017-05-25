const net = require('net');
const dateFormatter = require('dateformat');

const port = process.argv[2];

const server = net.createServer((c) => {
    // 'connection' listener
    // console.log('client connected');
    const currentDate = new Date();
    const formattedCurrentDate = dateFormatter(currentDate, 'yyyy-mm-dd HH:MM');
    c.end(`${formattedCurrentDate}\n`);
    // c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(port, () => {
    // console.log('server bound');
});
