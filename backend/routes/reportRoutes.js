import express from 'express';
import Report from '../models/Report.js';

const router = express.Router();

// Define your routes
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { month, year, summary } = req.body;
  try {
    const newReport = new Report({ month, year, summary });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
