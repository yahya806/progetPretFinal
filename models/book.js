const mongoose=require("mongoose");
const schema= mongoose.Schema
const bookSchema= new schema({
title:{
    type:String,
    required: true,
},
date:{
    type:String,
    required:true,
},

author:{
    type:String,
    required: true,
},
description: {
    type:String,
    required: true,
},
language:{
    type:String,
    required:true,
},
image:{
    type:String,
    required:true,
},
CATEGORY:{
    type:schema.Types.ObjectId,
    ref:"category"
}

},

)

module.exports=mongoose.model("book", bookSchema);