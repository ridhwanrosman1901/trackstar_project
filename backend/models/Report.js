import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  month: { type: String, required: true },
  year: { type: String, required: true },
  summary: { type: String }
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
