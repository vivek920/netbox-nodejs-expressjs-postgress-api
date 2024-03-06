const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
      }
  
      const newUser = await User.create({ username, password });
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;



/*router.post('/', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
      }
  
      const newUser = await User.create({ username, password });
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  */