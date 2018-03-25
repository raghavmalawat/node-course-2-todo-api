var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        minlength:1
    },
    completed:{
        type:Boolean,
        default:null
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports={Todo};