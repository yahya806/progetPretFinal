import React from "react";
import "./contact.css";
import { deleteUser } from "../../js/userSlice/userSlice";

import { useDispatch, useSelector } from "react-redux";


const UserCard = ({ user, ping, setping }) => {
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(user._id));
    setping(!ping)
    console.log(user._id);
  };
  return (
    <div className="userCard">
      <img src={user.photo} alt="" />
      <h2>{user.name}</h2>
      <p id="idp">{user.profession}</p>
      {users?.isAdmin ? (
        <div>
          {" "}
         
          <button id="deluser"
            ping={ping}
            setping={setping}
            style={{ width: "100%" }}
          
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserCard;
