const Usuario = require('../models/usuario_model.js');


exports.create = (req, res) => {
    var usuarioNovo = new Usuario();

        
        usuarioNovo.email = req.body.email;
        usuarioNovo.username = req.body.username;
        usuarioNovo.password = req.body.password;

        usuarioNovo.save((err)=> {
            if(err)
                res.send('Apresentou um erro durante o cadastramento do usuario' + err)
            res.json({message: 'Usuario cadastrado com sucesso'});
        })

    


},

exports.get = (req, res) => {
    Usuario.find()
                .then(Usuario => {
                    res.send(Usuario);
                }).catch(err => {
                    
                    res.status(500).send({err, message: "algo deu errado"});
                });
}

