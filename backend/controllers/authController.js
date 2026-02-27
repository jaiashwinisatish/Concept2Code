const User = require('../models/User');
const Otp = require('../models/Otp');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendMail = require('../utils/sendMail');

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'User already exists' });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({ name, email, passwordHash: hash, phone });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// OTP send for phone/email (demo - stores OTP in DB and optionally emails)
exports.sendOtp = async (req, res) => {
  try {
    const { phoneOrEmail } = req.body;
    if (!phoneOrEmail) return res.status(400).json({ error: 'phoneOrEmail required' });
    const code = Math.floor(100000 + Math.random()*900000).toString();
    const expiresAt = new Date(Date.now() + 5*60*1000); // 5 minutes
    const otp = new Otp({ phoneOrEmail, code, expiresAt });
    await otp.save();
    // send mail if it's an email
    if (phoneOrEmail.includes('@')) {
      await sendMail(phoneOrEmail, 'Your OTP for BloodConnect', 'Your OTP is: ' + code);
    }
    res.json({ message: 'OTP sent (demo)', code: code }); // code returned for development/testing
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { phoneOrEmail, code } = req.body;
    const record = await Otp.findOne({ phoneOrEmail, code, used: false });
    if (!record) return res.status(400).json({ error: 'Invalid OTP' });
    if (record.expiresAt < new Date()) return res.status(400).json({ error: 'OTP expired' });
    record.used = true;
    await record.save();
    // optionally create user
    let user = await User.findOne({ email: phoneOrEmail }) || await User.findOne({ phone: phoneOrEmail });
    if (!user && phoneOrEmail.includes('@')) {
      user = new User({ email: phoneOrEmail });
      await user.save();
    }
    const token = jwt.sign({ id: user?._id, email: user?.email || phoneOrEmail }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
