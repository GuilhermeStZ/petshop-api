import express from 'express';
import servicoController from '../controllers/servico.controller.js';

const router = express.Router();

router.post('/', servicoController.createServico);
router.get('/', servicoController.getServicos);

export default router;