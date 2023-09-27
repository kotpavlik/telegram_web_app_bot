import mongoose from 'mongoose'

const Clothes = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },
    color: {
        type: String
    },
    cost: {
        type: Number,
        require: true
    },
    stock: {
        type: Boolean,
        default: true
    }
})


export default mongoose.model('Clothes', Clothes)