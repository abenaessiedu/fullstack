import Brands from '../models/Brands.js';


// CREATE
export const createBrands = async (req, res) => {
  const { error } = validateBrands(req.body);
  if (error) return res.status(400).json({ errors: error.details });

  try {
    const brands = new Brands(req.body);
    await brands.save();
    res.status(201).json(brands);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// READ 
export const getBrands = async (req, res) => {
  try {
    const brands = await Brands.findById(req.params.id);
    console.log(brands)
    if (!brands) return res.status(404).json({ error: 'Brands not found' });
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
//GET ALL 
export const getAllBrands = async (req, res) => {
    try {
        const brands = await Brands.find({}).sort({ createdAt: -1 });
        res.status(200).json(brands);
    } catch(e) {
        console.log(e);
        res.status(400).json({ error: e.message })
    }
}

// UPDATE
export const updateBrands = async (req, res) => {
  const { error } = validateBrands(req.body);
  if (error) return res.status(400).json({ errors: error.details });

  try {
    const brands = await Brands.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!Brands) return res.status(404).json({ error: 'Brands not found' });
    res.json(Brands);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE
export const deleteBrands = async (req, res) => {
  try {
    const Brands = await Brands.findByIdAndDelete(req.params.id);
    if (!Brands) return res.status(404).json({ error: 'Brands not found' });
    res.json({ message: 'Brands deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
