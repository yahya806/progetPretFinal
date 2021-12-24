import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {registerUser} from "../../js/userSlice/userSlice"
import  "./register.css"
const Register = () => {
     const [register, setregister] = useState({
         name:"",
         lastname:"",
         email: "",
         password:"",
         photo:"",
         profession:"",
     });
     const history =useHistory();
     const dispatch = useDispatch();
     const handleRegister=(e)=>{
       e.preventDefault();
         dispatch(registerUser(register))
         setTimeout(()=>{history.push("/Profile");},1000);
     };

    return (
      <div>
        <div className='logscreen'>
          <div className='box1'>
            <Form>
                <h1 className='hash'>Sign up</h1>
                 
     <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"600", fontStyle:"obtique",color:"#957bda"}}>Name</Form.Label>
    <Form.Control style={{width:"80%"}} type="text" placeholder="Enter name" 
    onChange={(e)=> setregister({...register,name: e.target.value})} />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"600", fontStyle:"obtique",color:"#957bda"}}>Last name</Form.Label>
    <Form.Control style={{width:"80%"}} type="text" placeholder="Enter last name" 
        onChange={(e)=> setregister({...register,lastname: e.target.value})} />
        
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"600", fontStyle:"obtique",color:"#957bda"}}>Email address</Form.Label>
    <Form.Control style={{width:"80%"}} type="email" placeholder="Enter email" 
        onChange={(e)=> setregister({...register,email: e.target.value})} />
        
    <Form.Text className="text-muted">
      Dont share your email.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"600", fontStyle:"obtique",color:"#957bda"}}>Password</Form.Label>
    <Form.Control style={{width:"80%"}} type="password" placeholder="Password" 
        onChange={(e)=> setregister({...register,password: e.target.value})} />
        
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"600", fontStyle:"obtique",color:"#957bda"}}>Profile photo</Form.Label>
    <Form.Control style={{width:"80%"}} type="text" placeholder="enter url image" 
        onChange={(e)=> setregister({...register,photo: e.target.value})} />
        
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{fontWeight:"600", fontStyle:"obtique",color:"#957bda"}}>Profession</Form.Label>
    <Form.Control style={{width:"80%"}} type="text" placeholder="enter your profession" 
        onChange={(e)=> setregister({...register,profession: e.target.value})} />
        
  </Form.Group>
  
  <Button style={{width:"80%", marginBottom:"18px"}}  onClick={handleRegister}>
    Register
  </Button>
  <h5>If you have account you can <Link to='/login'>Log in</Link> </h5>
</Form>
</div>
<div className='box2'>
<img className="logoregister" src="kajetan.jpg" alt="logo book"/>
        </div>
       
        </div>
</div>
    )
}

export default Register
