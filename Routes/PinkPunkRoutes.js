import {
    Router
} from "express";
import ClothesController from '../PinkPunkController/clothesController.js';

const router = Router()

router.get('/clothes', ClothesController.getAll)
router.post('/clothes', ClothesController.create)
router.get('/clothes/:id', ClothesController.getOne)
router.put('/clothes', ClothesController.update)
router.delete('/clothes/:id', ClothesController.delete)
export default router;