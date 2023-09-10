const mongoose = require("mongoose")
const {Schema} = mongoose

const product = new Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'Price must be provided']
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
         type: Number,
         default:4.5,   
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
           values: ['ikea','nokia',"samsung"],
           message:'{VALUE} is not supported'
        }
    }
})

const products = mongoose.model("product",product)

module.exports = products
