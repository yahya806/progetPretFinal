import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'
import "./contact.css"
import SendEmail from './SendEmail'
const Contact = ({ping,setping}) => {
    const users=useSelector(state=>state.user.userlist)
    const isAuth=localStorage.getItem("token");
    return (
        <div className="kolchay">
            <div className="te7tkolchay">
            <div className="divcontact">
                <div className="titlecontact" >
                    <h2 className="hash" >Contact us on :</h2>
                </div>
            </div>
            <div className="information">
                <div className="sociale">
                
<div className="soc1"><div style={{height:"30%",paddingTop:"14%"}}>Facebook</div><div style={{height:"30%",paddingTop:"24%"}}>Twitter</div><div style={{height:"30%",paddingTop:"29%"}}>Instagram</div></div>
<ul class="socialIcons">
  <li class="facebook"><a href=""><i class="fa fa-fw fa-facebook"></i>Facebook</a></li><br/>
  <li class="twitter"><a href=""><i class="fa fa-fw fa-twitter"></i>Twitter</a></li><br/>
  <li class="instagram"><a href=""><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>
  
</ul>
<div style={{width:"10%"}}></div>
<div className="adres"><h2>   Get in touch</h2><br/><p><h5>Adresse:</h5>	Rue Taieb M'hiri 6000 Gabès - GABES <br/><br/>
<h5>Tél:</h5>75 275 420<br/><br/>
<h5>Fax:</h5>	75 275 420</p></div>
                </div>
                <div className="elmap">
                <img style={{borderRadius:"25px"}} src="Capture.jpg" alt="logo map"/>
                </div>
                
            </div>

                            {/* feedback */}

                <div className="fogelfeed">
            <div className="feedbk">

            <h1 className="hash">Message us</h1>


<div class="containere">
  <SendEmail/>
  {/* <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="tunisia">Ariana</option>
        <option value="gabes">Béja</option>
        <option value="sfax">Ben Arous</option>
        <option value="tunisia">Bizerte</option>
        <option value="gabes">Gabes</option>
        <option value="sfax">Gafsa</option>
        <option value="tunisia">Jendouba</option>
        <option value="gabes">Kairouane</option>
        <option value="sfax">kasserine</option>
        <option value="tunisia">Kebili</option>
        <option value="gabes">Manouba</option>
        <option value="sfax">Kef</option>
        <option value="tunisia">Mahdia</option>
        <option value="gabes">Médenine</option>
        <option value="sfax">Monastir</option>
        <option value="tunisia">Nabeul</option>
        <option value="gabes">Sfax</option>
        <option value="sfax">Sidi Bouzid</option>
        <option value="tunisia">Siliana</option>
        <option value="gabes">Sousse</option>
        <option value="sfax">Tataouine</option>
        <option value="tunisia">Tozeur</option>
        <option value="gabes">Tunis</option>
        <option value="sfax">Zaghouan</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Subject</label>
    </div>
    <div className="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
  <br/>
  <div class="row">
    <input type="submit" value="Submit"/>
  </div>
  </form> */}
</div>

            </div>
            <div className="picfeed">
               <img style={{borderRadius:"25px"}} className="felpic" src="ppl.jpg" alt="logo"/> 
            </div>
            </div>
                                        {/* community */}

            {isAuth? <div style={{marginLeft:"25px"}} className="community">
                <h2 className="hash">Community</h2>
            </div>:<div style={{paddingBottom:"5%"}}><h1></h1></div>}
            {isAuth?<div className="showuser">
              {users? users.map((el)=><UserCard ping={ping} setping={setping} user={el}/>):<h1>loading...</h1>}
            </div>:<div></div>}
            </div>

        </div>
    )
}

export default Contact
