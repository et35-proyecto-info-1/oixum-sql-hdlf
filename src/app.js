var express = require('express');
var connection = require('./connection');

var app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home', { 
    mensaje: '¡Hola ET 35!', 
    texto: 'Esto también sale del servidor',
    fecha: new Date()
  });
  res.render('home');
});

app.get('/query', function(req, res) {
  connection.query('SELECT ' + req.query.campos +  ' FROM estudiantes', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
app.post('/', function(req, res) {
  const query = req.body.query;
  connection.query(query, function (error, results, fields) {
    res.render('home', {
      resultados: JSON.stringify(results),
      columnas: JSON.stringify(fields),
      error: error
    });
  });
});