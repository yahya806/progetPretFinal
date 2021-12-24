import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { loginUser } from '../../js/userSlice/userSlice';
import "../register/register.css"
const Login = () => {
  const [login, setlogin] = useState({
 
    email: "",
    password:"",
});
const history =useHistory();
const dispatch = useDispatch();
const handlelogin=(e)=>{
  e.preventDefault();
    dispatch(loginUser(login))
   setTimeout(()=>{ history.push("/Profile");},1000);
};
    return (
      <div>
        <div className='logscreen'>
          <div className="box1">
            <Form>
                <h1 className="hash">Log in</h1>
                 
                <Form.Group className="mb-3" >
    <Form.Label className="label" style={{fontStyle:"obtique",color:"#957bda"}}>Email address</Form.Label>
    <Form.Control style={{width:"80%"}} type="email" placeholder="Enter email" 
        onChange={(e)=> setlogin({...login,email: e.target.value})} />
        
    <Form.Text className="text-muted">
      Dont share your email.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label className="label" style={{ fontStyle:"obtique",color:"#957bda"}}>Password</Form.Label>
    <Form.Control style={{width:"80%"}} type="password" placeholder="Password" 
        onChange={(e)=> setlogin({...login,password: e.target.value})} />
        
  </Form.Group>
  
  <Button  style={{width:"80%", marginBottom:"18px",}}  onClick={handlelogin}>
    Submit
  </Button>
  <h5 style={{color:"#8c8c8c"}}>If you dont have acount <Link to='/register'>Sign up</Link> </h5>
</Form>
</div>  
<div className="box2">
  <img src="maxim.jpg" alt="stanna chway"/>
  </div>   
  
        </div>
        </div>
    )
}

export default Login
