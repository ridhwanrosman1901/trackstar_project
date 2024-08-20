import mongoose from 'mongoose';

const kpiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }
});

const KPI = mongoose.model('KPI', kpiSchema);

export default KPI;
