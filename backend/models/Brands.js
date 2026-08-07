import mongoose from 'mongoose';

const brandsSchema = new mongoose.Schema(
  {
    name: { type: String, required: false,  },
    country: { type: String, required: false, },
    category: { type: [String], required: false, },
    
  },
  { timestamps: true }
);

export default mongoose.model('Brands', brandsSchema);