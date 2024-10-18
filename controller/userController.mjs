import { User } from "../models/userModel.mjs";

// fetching all users/students GET Request 

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.staus(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users!" });
    }
}

// Adding users POST Request
export const addUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json({ message: "User added successfully", newUser: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error adding users!", error: error.message });
    }
}
