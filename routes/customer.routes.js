import express from 'express';
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  bulkDeleteCustomers
} from '../controllers/customer.controller.js';

const router = express.Router();

router.get('/', getCustomers);
router.get('/:id', getCustomerById)
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.post('/bulk', bulkDeleteCustomers);
router.delete('/:id', deleteCustomer);

export default router;
