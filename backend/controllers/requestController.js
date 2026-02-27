const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  try {
    const r = new Request(req.body);
    await r.save();
    res.status(201).json(r);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getRequests = async (req, res) => {
  try {
    const list = await Request.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteRequest = async (req, res) => {
  try {
    await Request.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
