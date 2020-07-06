const { Router } = require('express')
const {
  create,
  update,
  remove,
  getById,
  getAll
} = require('../controllers/article.controller')
const router = Router()

router.post('/create', create)
router.put('/update/:id', update)
router.delete('/remove/:id', remove)
router.get('/get/:id', getById)
router.get('/getall', getAll)

module.exports = router
