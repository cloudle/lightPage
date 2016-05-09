var express = require('express'), app = express();

app.set('views', './www');
app.use(express.static('./www'));

app.get('/', function(req, res) {
	res.render('index', {});
});

const port = 7020;
console.log(`Server is running user port ${port}`);
app.listen(port);