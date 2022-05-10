const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 4000;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Jorge',
		titulo: 'Curso de Node',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Jorge',
		titulo: 'Generic - Curso de Node',
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Jorge',
		titulo: 'Elements - Curso de Node',
	});
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
