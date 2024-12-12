const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// Create a new incident
router.post('/', async (req, res) => {
   try {
       const incident = new Incident(req.body);
       const savedIncident = await incident.save();
       res.status(201).json(savedIncident);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
});

// Get all incidents
router.get('/', async (req, res) => {
   try {
       const incidents = await Incident.find();
       res.status(200).json(incidents);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

// Get a single incident by ID
router.get('/:id', async (req, res) => {
   try {
       const incident = await Incident.findById(req.params.id);
       if (!incident) {
           return res.status(404).json({ message: 'Incident not found' });
       }
       res.status(200).json(incident);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

// Update an incident
router.put('/:id', async (req, res) => {
   try {
       const updatedIncident = await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true });
       res.status(200).json(updatedIncident);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
});

// Delete an incident
router.delete('/:id', async (req, res) => {
   try {
       await Incident.findByIdAndDelete(req.params.id);
       res.status(200).json({ message: 'Incident deleted successfully' });
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

module.exports = router;
