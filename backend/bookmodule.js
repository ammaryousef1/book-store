import mongoose from "mongoose"


const bookschema = mongoose.Schema({
      title: {
         type: String ,
         required: true
      },
      author: {
        type: String ,
        required: true
     },
     puplishdin: {
        type: Number ,
        required: true
     },
     
}, {timestamps: true });

export const Books = mongoose.model("books" , bookschema)

