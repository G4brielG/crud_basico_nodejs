const router = require('express').Router()
const {disableUser, obtenerUsers, obtenerUser, altaUser, editarUser} = require('../controllers/user.controllers')

router.get('/', obtenerUsers)
router.get('/:id', obtenerUser)
router.post('/', altaUser)
router.put('/:id', editarUser)
router.delete('/:id', disableUser)

module.exports = router