import { Customer } from '../models/customer.model.js';

export const getCustomers = async (req, res) => {
  const customers = await Customer.find().populate('membershipID');
  res.json(customers);
};

export const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findById(id).populate('membershipID');

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json(customer);
  } 
  catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.json(customer);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Customer deleted' });
};

export const bulkDeleteCustomers = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'No IDs provided' });
    }
    await Customer.deleteMany({ _id: { $in: ids } });
    res.json({ message: 'Customers deleted successfully' });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};
