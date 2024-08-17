import express from 'express';
import KPI from '../models/KPI.js';

const router = express.Router();

// Define your routes
router.get('/', async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.json(kpis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newKPI = new KPI({ name, description });
    await newKPI.save();
    res.status(201).json(newKPI);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
