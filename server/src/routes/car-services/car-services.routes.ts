import express from 'express';
import { createCarService, deleteCarService, getAllCarServices, getCarServiceById, updateCarService } from '../../controllers/car-services/car-service.controller';

const router = express.Router();

// GET all car services
router.get('/', getAllCarServices);

// GET car service by ID
router.get('/:serviceId', getCarServiceById);

// POST create a new car service
router.post('/', createCarService);

// PUT update a car service
router.put('/:serviceId', updateCarService);

// DELETE delete a car service
router.delete('/:serviceId', deleteCarService);

export default router;