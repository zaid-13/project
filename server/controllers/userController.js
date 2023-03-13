const User = require("../models/User");

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, emailId } = req.body;
  try {
    const createdUser = await User.create({
      firstName,
      lastName,
      emailId,
    });
    res.json({ data: createdUser });
  } catch (error) {
    console.log("user not created: ", error);
  }
};

module.exports.getUsers = async (req, res) => {
  const allUsers = await User.find();
  try {
    if (allUsers) {
      res.json({ data: allUsers });
    }
  } catch (err) {
    console.log("users not found: ", err);
  }
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, emailId } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        emailId,
      },
      { new: true }
    );
    res.json({ updatedUser });
  } catch (err) {
    console.log("users not updated: ", err);
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({ deletedUser });
  } catch (error) {
    console.log("User has not been deleted: ", error);
  }
};
