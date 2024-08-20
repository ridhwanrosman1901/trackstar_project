import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  status: { type: String, required: true },
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
