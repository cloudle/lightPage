var mailerAccount = 'realestate.noreply@gmail.com';

var express = require('express'), app = express(), nodemailer = require('nodemailer'),
	exphbs = require('express-handlebars'),
	bodyParser = require('body-parser'), configs = require('./configs'),
	mailSender = nodemailer.createTransport({
		host: '128.199.227.132',
		service: 'Gmail',
		auth: {
			user: mailerAccount,
			pass: 'F0reverDM$'
		}
	});

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.set('views', './www');
app.use(express.static('./www'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/configs', function (req, res) {
	res.json(configs);
});

app.post('/email', function (req, res) {
	res.json({}); return;

	var receiver = req.body.receiver || 'liemnm@twin.vn',
		relatedGuys = req.body.relatedGuys || ['haunh@twin.vn', 'haunt@twin.vn', 'tiennd@twin.vn', 'duyntp@twin.vn', 'sonln@twin.vn'].join(', '),
		site = req.body.site,
		name = req.body.name,
		phone = req.body.phone,
		email = req.body.email;

	var emailOptions = {
		from: mailerAccount,
		to: receiver,
		cc: relatedGuys,
		subject: `Đăng ký mới từ ${site}`,
		html: `<div>
			<h1>Chào bạn</h1>
			<h3>Website ${site} vừa có đăng ký mới</h3>
			<p>- Tên: ${name}</p>
			<p>- Điện thoại: ${phone}</p>
			<p>- Email: ${email}</p>
			<br>
			<p><b>Best regards,</b></p>
			<p>TWIN Real Estate CMS</p>
		</div>`
	};

	console.log('Sending email to', receiver);
	mailSender.sendMail(emailOptions, function (err, info) {
		if (err) { console.warn('Send mail failed!',err); return; }
		console.log('Send mail success,', info);

		res.json({error: err, info: info});
	});
});

app.get('*', function(req, res) {
	res.render('index', configs);
});

console.log(`Server is running user port ${configs.serverPort}`);
app.listen(configs.serverPort);