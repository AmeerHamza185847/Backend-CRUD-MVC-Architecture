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