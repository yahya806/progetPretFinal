import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css"


const SendEmail = () => {
  const [show, setshow] = useState(false);

  const sendEmaill = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnpw0fj",
        "template_ihjt9y4",
        e.target,
        "user_eCYIpynyxzADleAFrlJwH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <button id="butsend"  onClick={() => setshow(!show)}>Send Email</button>

      {show ? (
        <div className="modal-bg">
          <div className="modal-body">
            
            <form onSubmit={sendEmaill} className="modal-body-form">
             
              <input className="col-75" type="text" placeholder="Enter your name" name="name" />
              <input className="col-75" type="text" placeholder="Enter your email" name="email" />
              <input className="col-75"
                type="text"
                placeholder="Enter your subject"
                name="subject"
              />
              <textarea className="tex"
                name=""
                cols="30"
                rows="6"
                placeholder="enter your message here ..."
                name="message"
              ></textarea>

              <input id="butsend" type="submit" value="Send" />

              <button id="butclose"
              onClick={() => setshow(!show)}
              size={28}
              className="close-email">Close
            </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SendEmail;