import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Editbk from '../editBook/Editbk'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { deleteBook } from '../../js/bookSlice/bookSlice';
import {Button} from 'react-bootstrap';
import "./kteb.css"
import AddBook from '../addbook/AddBook';

const Kteb = ({book,ping,setping}) => {
  AOS.init();
const dispatch=useDispatch()
  const handleDelete=()=> {
    dispatch(deleteBook({id:book._id}));
    setping(!ping)
}

  const user = useSelector(state => state.user.user)
    return (
   <div className="tou">
     <div className="ajout"></div>
        <div className="alkteb" data-aos="fade-down">
            <div class="cardi" >
  <img src={book.image} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p class="card-text txt">Title: {book.title}</p>

    <p class="card-text">Author: {book.author}</p>
    {user?.isAdmin?<div><Editbk  book={book} ping={ping} setping={setping}/>  
        
          <button className='btnd' style={{width:"100%"}}  onClick={handleDelete}>delete</button>
</div>:null}
  </div>
</div>
        </div>
        </div>
    )
}

export default Kteb
