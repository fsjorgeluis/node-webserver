const express = require('express');

const app = express();
const port = 4000;

app.get('/', function (req, res) {
	res.send('Hola Mundo');
});

app.get('*', function (req, res) {
	res.send('404 | Page not found');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
