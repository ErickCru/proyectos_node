const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.creteUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.json({ message: 'User Created' });
};

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ message: 'User Deleted' });
};

module.exports = userCtrl;
