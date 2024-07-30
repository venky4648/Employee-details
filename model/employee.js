import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
        },
    position:{
        type: String,
        required:true
    }
});

export const User= mongoose.model('user',userSchema);
