const express = require('express');
const bodyParser = require('body-parser');
const Lead = require('./models/lead');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/leads', (req, res) => {
    const { name } = req.body;
    const lead = Lead.create({ name });
    res.send('Obrigado, seus dados são sigilosos e não serão compartilhados!');
});

app.listen(3000);
