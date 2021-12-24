import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editBook } from '../../js/bookSlice/bookSlice';
import "./editBook.css"

const Editbk = ({book,ping,setping}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const dispatch = useDispatch()
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
      
    });
    const handleEdit =()=>{
    dispatch(editBook({editedBook:edited,id:book.id}))
    setping(!ping)
    }
    return (
        <div>
             <button className='up' style={{width:"100%",marginLeft:'0%'}}  variant="primary" onClick={handleShow}>
               update book
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the book</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"gray"}}> <div className="inputEdit">
            <h1>{book?.title}</h1>
            <label style={{color:"lavender"}} htmlFor="">language</label>
            <input type="text" placeholder="Enter the language" onChange={(e)=>setedited({...edited,language:e.target.value})}/>
             
            <label style={{color:"lavender"}} htmlFor="title">title</label>
            <input id="title" type="text" onChange={(e)=>setedited({...edited,title:e.target.value})}/>
            <label style={{color:"lavender"}} htmlFor="">date</label>
            <input type="text" onChange={(e)=>setedited({...edited,date:e.target.value})}/>
            <label style={{color:"lavender"}} htmlFor="">author</label>
            <input type="text" onChange={(e)=>setedited({...edited,author:e.target.value})}/>
            <label style={{color:"lavender"}} htmlFor="">description</label>
            <input type="text" onChange={(e)=>setedited({...edited,description:e.target.value})}/>
            <label style={{color:"lavender"}} htmlFor="">image</label>
            <input type="text" onChange={(e)=>setedited({...edited,image:e.target.value})}/>
            {/* <button style={{backgroundColor:"green"}} onClick={handleEdit}>Edit</button> */}
        </div></Modal.Body>
        <Modal.Footer style={{backgroundColor:"gray"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleEdit();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Editbk
