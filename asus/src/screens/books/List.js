import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Kteb from "./Kteb";
import "./list.css";
import Search from "../search/Search";

const List = ({ ping, setping }) => {
  const [text, setText] = useState("");
  const filterText = (text) => {
    setText(text);
  };
  const user = useSelector((state) => state.user.user);
  const books = useSelector((state) => state.book.books);
  const isAuth = localStorage.getItem("token");
  return (
    <div>
      {user?.isAdmin ? (
        <div className="hed">
          
          <h1 style={{ paddingTop: "3.5%" }} className="hash">
              Add new Book
            </h1>
           
            <Link className="a8" to="/addBook">
              <Button className="bute" variant="primary">
                Click here
              </Button>
            </Link>
           
            
          
        </div>
      ) : null}

       
            <div className="rech">
              <Search filterText={filterText} />
            </div>
    
            <div className="liste">

              {books
                ?.filter((el) =>
                  el.title.toLowerCase().includes(text.toLowerCase())
                )
                .map((book) => (
                  <Kteb ping={ping} setping={setping} book={book} />
                ))}
              
            </div>
    </div>
  );
};

export default List;
