import express from 'express';
import animalController from '../controllers/animal.controller.js';

const router = express.Router();

router.post('/',animalController.createAnimal);
router.put('/', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);
router.get('/', animalController.getAnimais);
router.get('/:id', animalController.getAnimal);

export default router;