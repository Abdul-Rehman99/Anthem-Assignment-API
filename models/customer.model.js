import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true,
    trim: true
   },
  lastName: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Invalid email format']
  },
  contactNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ['Gold', 'Diamond'],
    required: true
  },
  membershipID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Membership',
    required: true
  }
}, {timestamps: true});

export const Customer = mongoose.model('Customer', customerSchema);
