const router = require('express').Router()
const authCtrl = require('../controllers/autenticacao')
const UsuarioValidator = require('../validators/Usuario')

router.post('/registrar', UsuarioValidator.validacoes(), authCtrl.registrar)
router.post('/autenticar', authCtrl.autenticar)

module.exports = router;