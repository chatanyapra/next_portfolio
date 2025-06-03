import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        minlength: 6,
        required: function(this: any): boolean {
            return !this.googleId;
        }
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true  
    },
    image: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
