const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
   referenceId: { type: String, required: true },
   customerName: { type: String, required: true },
   customerContact: { type: String, required: true },
   email: { type: String, required: true },
   incidentTitle: { type: String, required: true },
   incidentType: { type: String, required: true },
   incidentDescription: { type: String, required: true },
   date: { type: String, required: true },
   time: { type: String, required: true },
   postalAreaCode: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Incident', incidentSchema);
