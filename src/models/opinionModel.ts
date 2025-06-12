import { Schema, model } from "mongoose";

const opinionSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters long"],
        maxlength: [500, "Description must be at most 500 characters long"]
    },
    stars: {
        type: Number,
        required: [true, "Stars rating is required"],
        validate: {
            validator: (value: number) => {
                return value >= 1 && value <= 5;
            },
            message: "Stars rating must be between 1 and 5"
        }
    },
})

export const OpinionModel = model("Opinion", opinionSchema)