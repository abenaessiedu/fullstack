import { Router } from 'express';
import {createBrands, getBrands, getAllBrands ,updateBrands, deleteBrands,} from '../controllers/Brands.js';

const router = Router();

router.post('/', createBrand);
router.get('/:id', getBrand);
router.get('/:id', getAllBrand); 
router.put('/:id', updatebrand);
router.delete('/:id', deleteBrand);

export default router;