const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');
require('dotenv').config();

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { email, password, fcmToken, provider} = req.body;
    
    // add fcm token in future
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // generate unique user JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // generate unique user ID
    const newId = uuidv4();

    const newUser = new User({
      email,
      password: hashedPassword,
      fcmToken : fcmToken && '',
      uid: newId,
      token,
      timeOfSignIn: new Date(),
      provider: provider || 'email_provider',
      lastActiveTime: new Date()
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        email: newUser.email,
        uid: newUser.uid,
        token: newUser.token
      }
    });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password, fcmToken} = req.body;
    
    // add fcm token in future
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    
    const existingUser = await User.findOne({ email});
    if (!existingUser) return res.status(400).json({ success: false, message: 'Email not Exist' });
    
    if (!existingUser.password) return res.status(400).json({ success: false, message: 'Paswword is Not Present' });
    
    // check password
    const hashedPassword = await bcrypt.compare(password, existingUser.password);
    if (!hashedPassword) {
      return res.status(400).json({ success: false, message: 'Invalid Password' });
    }

    const user = await User.findOneAndUpdate(
      { uid:existingUser.uid },
      { $set: { lastActiveTime: new Date(), timeOfSignIn: new Date() } },
      { new: true } // returns updated document
    );

    res.status(201).json({
      success: true,
      message: 'User Login successfully',
      user: {
        uid: user.uid,
        token: user.token
      }
    });

  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};


