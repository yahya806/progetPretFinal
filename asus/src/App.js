import Login from "./screens/login/Login";
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from "./screens/home/Home";
import Register from "./screens/register/Register";
import { useEffect, useState } from "react";
import { currentUser, userlist } from "./js/userSlice/userSlice";
import { useDispatch } from "react-redux";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./screens/profile/Profile";
import {  getBooks } from "./js/bookSlice/bookSlice";

import AddBook from "../src/screens/addbook/AddBook";

import Nav from "./screens/navbar/Nav";
import List from "./screens/books/List";
import Contact from "./screens/contact/Contact";
import Footer from "./screens/footer/Footer";



function App() {
const isAuth=localStorage.getItem("token");
const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(userlist())

  if(isAuth){
    dispatch(currentUser());
  }
    dispatch(getBooks())
  }, [ping]);
  return (
    <div className="App">
              <Nav ping={ping} setping={setping}/>

      <Switch>
      
     
       <Route exact path='/'>
        
         <Home/>
        
       </Route> 
       <Route  path='/contact' component={Contact}>
        <Contact ping={ping} setping={setping}/>
         
        
         
       </Route> 
       <Route  path='/books'>
        <List ping={ping} setping={setping}/>
        
        
         
       </Route> 
     <Route path='/addBook' component={AddBook}>
     <AddBook ping={ping} setping={setping}/>
     </Route>
       
       <Route path='/register' component={Register}/>
       <Route path='/login' component={Login}/>
       <PrivateRoute component={Profile}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
