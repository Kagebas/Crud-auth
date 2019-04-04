const express = require('express');
const router = express.Router();
const produto = require('../controllers/produto_controller.js');
const usuario = require('../controllers/usuario_controller.js');
const passport = require('../security/config');
const LocalStrategy = require('passport-local');

//rotas do produto
router.get('/find', produto.get);
router.post('/create', produto.create);
router.put('/update/:id', produto.update);
router.delete('/delete/:id', produto.delete);

//rotas do usuario
router.get('/finduser', usuario.get);
router.post('/usercreate', usuario.create);
router.post('/login', passport.authenticate('local', {
                        successRedirect: '/dashboard',
                        failureRedirect:'/',
                        session: false

}));


//rotas para o dashboard
router.get('/dashboard', (req, res) => {
    res.send('Bem vindo ao dashboard do sistema!')
});



router.get('/', (req, res) => {
    res.send('Bem vindo ao tela inicial da API')
});







module.exports = router;

