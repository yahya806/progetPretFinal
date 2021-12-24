import React, { useState } from 'react'
import { useDispatch } from "react-redux"; 
import  {  editBook } from "../../js/bookSlice/bookSlice";
import "./editBook.css"

const EditBook = ({ping,setping,book}) => {
    
    const dispatch = useDispatch()
    const [edited, setedited] = useState({
        title:"",
       
        date:"",
        author:"",
        description:"",
        language:"",
        image:"",
    });
    const handleEdit =()=>{
    dispatch(editBook({editedBook:edited,id:book._id}))
    setping(!ping)
    }
    return (
        <div className="inputEdit">
            <label htmlFor="">language</label>
            <input type="text" placeholder="Enter the language" onChange={(e)=>setedited({...edited,language:e.target.value})}/>
             
            <label htmlFor="">title</label>
            <input type="text" onChange={(e)=>setedited({...edited,title:e.target.value})}/>
            <label htmlFor="">date</label>
            <input type="text" onChange={(e)=>setedited({...edited,date:e.target.value})}/>
            <label htmlFor="">author</label>
            <input type="text" onChange={(e)=>setedited({...edited,author:e.target.value})}/>
            <label htmlFor="">description</label>
            <input type="text" onChange={(e)=>setedited({...edited,description:e.target.value})}/>
            <label htmlFor="">image</label>
            <input type="text" onChange={(e)=>setedited({...edited,image:e.target.value})}/>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default EditBook
