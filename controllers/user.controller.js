
const User = require("../models/user.model");


/*===============================>
    // TODO: GET ALL USERS
=================================*/

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/*===============================>
    // TODO: GET A USERS
=================================*/
const getOneUser = async (req, res) => {
    const { id } = req.params; 
  
    try {
      const user = await User.findOne({ id });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
/*===============================>
    // TODO: CREATE A USERS
=================================*/

const createUser = async (req, res) => {

    const { name, age } = req.body; 
  
    try {
      const newUser = new User({
        name: name, 
        age: age, 
      });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

/*===============================>
    // TODO: UPDATE A USERS
=================================*/

const updateUser = async (req, res) => {
    const { id } = req.params; 
    const { name, age } = req.body; 
  
    try {
      const user = await User.findOne({ id });
      user.name = name;
      user.age = age;
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

/*===============================>
    // TODO: DELETE A USERS
=================================*/

const deleteUser = async (req, res) => {
    const { id } = req.params; 
  
    try {
      await User.deleteOne({ id });
      res.status(200).json({ message: "user is deleted" });
     } 
    catch (error) {
      res.status(500).send(error.message);
    }
  };
  

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
