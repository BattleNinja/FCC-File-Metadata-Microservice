const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
})
const app = express();

app.set('view engine', 'html');
app.engine('html', engines.nunjucks);
app.set('views', __dirname + '/views');
app.use(bodyParser());
app.use(cors());

app.get('/', (req, res) => {
  res.render('instruction');
});
app.get('/upload', (req, res) => {
  res.render('upload');
});
app.post('/showsize', upload.single('file'), (req, res) => {
  res.json({
    "size": req.file.size
  });
});

const server = app.listen(3000, () => {
  console.log('Server is listening to port %s', server.address().port);
});
