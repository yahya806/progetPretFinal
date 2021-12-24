import React, { useState } from 'react'
import { useDispatch } from "react-redux"; 
import { deleteBook, editBook } from "../../js/bookSlice/bookSlice";


const Book = ({book,ping,setping}) => {
    const dispatch = useDispatch();
    const [show, setshow] = useState(true);
    const [edited, setedited] = useState({
        title:book.title,
       
        date:book.date,
        author:book.author,
        description:book.description,
        language:book.language,
        image:book.image,
    });
    const handleEdit =()=>{
    dispatch(editBook({editedBook:edited,id:book._id}));
    setping(!ping);
    setshow(!show);
    }
    
    const handleDelete=()=> {
        dispatch(deleteBook({id:book._id}));
        setping(!ping)
    }
    return (
        <div>
            {show? 
            <div>
            <h1>{book.title}</h1>
            <h1>{book._id}</h1>
            <img src={book.image} alt="" />
           <button onClick={()=>setshow(!show)} >edit</button>
            <button onClick={handleDelete}>delete</button>
            </div>:
           
                 <div>
            <h1>Edit Book</h1>
            <label htmlFor="">language</label>
            <input type="text" defaultValue={book.language} placeholder="Enter the language" onChange={(e)=>setedited({...edited,language:e.target.value})}/>
             
            <label htmlFor="">title</label>
            <input type="text" defaultValue={book.title} onChange={(e)=>setedited({...edited,title:e.target.value})}/>
            <label htmlFor="">date</label>
            <input type="text" defaultValue={book.date} onChange={(e)=>setedited({...edited,date:e.target.value})}/>
            <label htmlFor="">author</label>
            <input type="text" defaultValue={book.author} onChange={(e)=>setedited({...edited,author:e.target.value})}/>
            <label htmlFor="">description</label>
            <input type="text" defaultValue={book.description} onChange={(e)=>setedited({...edited,description:e.target.value})}/>
            <label htmlFor="">image</label>
            <input type="text" defaultValue={book.image} onChange={(e)=>setedited({...edited,image:e.target.value})}/>
            <button onClick={handleEdit}>Edit</button>
        </div>
            
        }
        </div>
    )
}

export default Book
