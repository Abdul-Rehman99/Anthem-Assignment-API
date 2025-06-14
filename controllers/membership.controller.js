import { Membership } from '../models/membership.model.js';

export const getMemberships = async (req, res) => {
  const memberships = await Membership.find();
  res.json(memberships);
};

// Add dummy data if none exists
export const seedMemberships = async () => {
  const count = await Membership.countDocuments();
  if (count === 0) {
    await Membership.insertMany([
      { name: 'Basic Membership' },
      { name: 'Premium Membership' },
      { name: 'VIP Membership' }
    ]);
    console.log('Dummy Memberships seeded');
  }
};
