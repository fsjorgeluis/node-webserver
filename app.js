const express = require('express');

const app = express();
const port = 4000;

// Middleware Servir contenido estatico
app.use(express.static('public'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
