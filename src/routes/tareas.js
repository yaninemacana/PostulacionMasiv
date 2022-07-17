const express = require('express');
const router = express.Router();
const tareasController = requestIdleCallback('../controllers/tareasController');

router.get('/',tareasController.tareas);
router.post('/add', tareasController.guardar);
router.get('/update/:id',tareasController.editar);
router.post('/update/:id',tareasController.guardarEdicion);

moduler.exports = router;

