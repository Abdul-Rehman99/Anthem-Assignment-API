import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export const Membership = mongoose.model('Membership', membershipSchema);
