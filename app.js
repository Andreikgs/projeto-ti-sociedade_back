const express = require('express');
const path = require('path');
const UserRoute = require('./routes/userRoute');
const ClienteRoute = require('./routes/clienteRoute');
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/authMiddleware');
const TipoServicosRoute = require('./routes/tipoServicoRoute');
const DocumentoLicitacaoRoute = require('./routes/documentoLicitacaoRoute');
const HistoricoLicitcaoRoute = require('./routes/historicoLicitacaoRoute');
const LicitacaoRoute = require('./routes/licitcaoRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('public'));

app.use('/usuarios/login', UserRoute);
app.use('/clientes', ClienteRoute);
app.use('/tipoServicos', TipoServicosRoute);
app.use('/documentoLicitcao', DocumentoLicitacaoRoute);
app.use('/historicoLicitacao', HistoricoLicitcaoRoute);
app.use('/licitacao', LicitacaoRoute);

app.get('/dashboard', authenticateToken, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
