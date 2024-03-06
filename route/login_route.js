const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
