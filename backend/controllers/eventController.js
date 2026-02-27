const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const e = new Event(req.body);
    await e.save();
    res.status(201).json(e);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getEvents = async (req, res) => {
  try {
    const list = await Event.find().sort({ date: 1 });
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
