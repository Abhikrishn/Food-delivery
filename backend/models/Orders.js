const mongoose=require('mongoose')

const{Schema}=mongoose;

const OrderSchema = new Schema({
    email: {
        type:String,
        requird:true,
        unique: true
    },
    order_data:{
        type:Array,
        requird:true
    },

})

module.exports = mongoose.model('order',OrderSchema)