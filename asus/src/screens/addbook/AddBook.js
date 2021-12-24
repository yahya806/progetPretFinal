import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from "react-redux"; 
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBook } from "../../js/bookSlice/bookSlice";
import "./addbook.css";
const AddBook = ({ping,setping}) => {
    
    const notify = () => toast("book added successfuly!");
    
    const [book, setbook] = useState({
        title:"",
        date:"",
        author:"",
        description:"",
        language:"",
        image:"",
        CATEGORY:"6188107f61b1cf0171d7ca7d"
    });
    const history =useHistory();
    const dispatch = useDispatch()
    const handleAdd =(e)=>{
       
    dispatch(addBook(book))
    setTimeout(()=>{history.push("/books");},4000);
    setping(!ping)
    }
    return (
        <div className="bodd">
            <div className="titleadd">
            <h1 className="hash">Adding Book</h1>
            </div>
            <div className="boxes">
            <div className="boxa">
            <div className="addInput">
           
            {/* <div className="colla">
            <label  htmlFor="">language</label>
            </div> */}
            <div className="colli">
            <input  type="text" placeholder="Enter the language" onChange={(e)=>setbook({...book,language:e.target.value})}/>
            </div>
            {/* <div className="colla">
            <label htmlFor="">title</label>
            </div> */}
            <div className="colli">
            <input type="text" placeholder="Enter the title" onChange={(e)=>setbook({...book,title:e.target.value})}/>
           </div>
            {/* <div className="colla">
            <label htmlFor="">date</label>
            </div> */}
            <div className="colli">
            <input type="text" placeholder="Enter the date" onChange={(e)=>setbook({...book,date:e.target.value})}/>
            </div>
            {/* <div className="colla">
            <label htmlFor="">author</label>
            </div> */}
            <div className="colli">
            <input type="text" placeholder="Enter the author" onChange={(e)=>setbook({...book,author:e.target.value})}/>
           </div>
            {/* <div className="colla">
            <label htmlFor="">description</label>
            </div> */}
            <div className="colli">
            <input type="text" placeholder="Enter the description" onChange={(e)=>setbook({...book,description:e.target.value})}/>
            </div>
            {/* <div className="colla">
            <label htmlFor="">image</label>
            </div> */}
            <div className="colli">
            <input type="text" placeholder="Enter the image" onChange={(e)=>setbook({...book,image:e.target.value})}/>
          </div>
           <button id='butadd' onClick={()=>{handleAdd();notify()}}>Add</button>
            
            <ToastContainer />
            </div>
            </div>
            <div className="boxb">
                <img src="janko.jpg" alt="logo book"/>
            </div>
            </div>
           
        </div>
    )
}

export default AddBook

