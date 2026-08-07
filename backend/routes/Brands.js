import { Router } from 'express';
import {createBrands, getBrands, getAllBrands ,updateBrands, deleteBrands,} from '../controllers/Brands.js';

const router = Router();

router.post('/', createBrands);
router.get('/:id', getBrands);
router.get('/', getAllBrands); 
router.put('/:id', updateBrands);
router.delete('/:id', deleteBrands);

export default router;