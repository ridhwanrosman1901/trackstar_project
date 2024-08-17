import express from 'express';
import Attendance from '../models/Attendance.js';

const router = express.Router();

// Add your routes here
// For example:
router.get('/', async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.json(attendances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { date, status, employeeId } = req.body;
  try {
    const newAttendance = new Attendance({ date, status, employeeId });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
