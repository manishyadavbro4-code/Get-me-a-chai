import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    coverPicture: {
        type: String
    },
    razorpayId: {
        type: String
    },
    razorpaySecret: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

