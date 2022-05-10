const http = require('http');

http
	.createServer((req, res) => {
		res.write('Hola Mundo');
		res.end();
	})
	.listen(4000);

console.log('Escuchando el puerto 4000');
