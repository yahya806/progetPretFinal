const express =require("express");
const router =express.Router() ;

const Category=require("../models/Category");
const Book=require("../models/book");





//add book
router.post("/addBook", async(req,res)=>{
    const{title,description,date,author,language,image,CATEGORY}=req.body;
    try {
        const newBook= new Book ({title,description,date,author,language,image,CATEGORY}) ;
       

        
       
     
        // save the book
       newBook.save();
      
        
        res.status(200).send({Book:newBook, msg: "Book is added"});
    } catch (error) {
        res.status(500).send(error);
    }
})


// get books
router.get("/books",async(req,res)=>{
    try {
        const result= await Book.find({}).populate({ path: 'CATEGORY',select: 'name', model: Category })
        res.send({msg:"get books",response:result})
    } catch (error) {
        res.status(500).send(error);
    }
 })

 // edit book

 router.put("/books/:id",async(req,res)=>{
     try {
         const result= await Book.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
         res.send({result,msg:"book updated successfuly"})
     } catch (error) {
        res.status(500).send(error);
        console.log(error)
  
     }
 })

 // delete book
 router.delete("/:id", async (req, res) => {
    try {
      const result = await Book.findOneAndRemove({ _id: req.params.id });
      res.send({ msg: "deleted" });
    } catch (error) {
      res.send({ message: "cannot delete the book" });
    }
  });

module.exports=router;