import mongoose from "mongoose";


const counsellorDetailSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name "]
        },

        contactNumber: {
            type: String,
            required: [true, 'Phone number is required'],
            match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
        },

        isMobileVerified: {
            type: Boolean,
            default: false
        },

        email: {
            type: String,
            required: [true, "Please enter your email "]
        },

        isEmailVerified: {
            type: Boolean,
            default: false
        },

        whatsappNumber: {
            type: String,
            required: [true, 'Phone number is required'],
            match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
        },

        city: {
            type: String,
            required: [true, "Please enter your city "]
        },

        state: {
            type: String,
            required: [true, "Please enter your state "]
        },

        employeeId: {
            type: String,
            required: [true, "Please enter your employee ID"]
        }


    }, { timestamps: true }
)

const counsellorModal = mongoose.model('Counsellor', counsellorDetailSchema)

export default counsellorModal