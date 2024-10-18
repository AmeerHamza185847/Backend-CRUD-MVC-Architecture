import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: email,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});


export const User = mongoose.model('student', userSchema);