require('dotenv').config()
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error');
const handleError = require('./src/middlewares/handleError');
const app = express();

const usuarioRoute = require('./src/routes/usuario.route');
const agendamentoRoute = require('./src/routes/agendamento.route')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/usuarios', usuarioRoute);
app.use('/api/agendamentos', agendamentoRoute)
app.use(handle404Error);
app.use(handleError); 

app.listen(process.env.PORT, () => {console.log('API Rodando na porta 8080')})