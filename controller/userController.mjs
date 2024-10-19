import { User } from "../models/userModel.mjs";

// fetching all users/students GET Request 

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ message: "All users successfully fetched!", allUsers: allUsers });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users!", error: error.message });
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


// updating users PUT Request

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (!updatedUser) {
            res.status(404).json({ message: "User not found!" })
        }
        else {
            res.status(201).json({ message: "User updated successfully!", updatedUser: updatedUser });
        }
    } catch (error) {
        res.status(404).json({ message: "Erro updating user!", error: error.message });
    }
}


// deleting user - DELETE Request

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(201).json({ message: "User delleted successfully!", deletedUser: deletedUser });

    } catch (error) {
        res.status(404).json({ message: "Erro deleting user!", error: error.message });
        //  console.error("error", error.message);
    }
}