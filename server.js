var express = require('express'), app = express();

app.set('views', './www');
app.use(express.static('./www'));

app.get('/', function(req, res) {
	res.render('index', {});
});

app.listen(7020);