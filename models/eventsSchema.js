import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    events: {
        type: String,
        required: true
    },
});

export const Events = mongoose.model('Events',eventSchema);