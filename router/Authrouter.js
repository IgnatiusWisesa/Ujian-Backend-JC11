var express = require('express')
var router = express.Router()
const { authController } = require('./../controller')

router.post('/add-movie', authController.tambahmovies)
router.put('/edit-movie/:id', authController.editmovies)
router.delete('/delete-movie/:id', authController.hapusmovies)
router.post('/add-category', authController.tambahcategory)
router.put('/edit-category/:id', authController.editcategories)
router.delete('/delete-category/:id', authController.hapuscategory)
router.post('/add-connection', authController.tambahkoneksi)
router.delete('/delete-connection/:id', authController.hapuskoneksi)

module.exports = router