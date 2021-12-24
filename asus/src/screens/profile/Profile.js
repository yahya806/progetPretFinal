import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../js/userSlice/userSlice";
import EditUser from "../editUser/EditUser";

import "./profile.css";

const Profile = ({ ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const history = useHistory();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div>
      <section className="all">
        <div>
          <h1 className="hash">
            Welcome{" "}
            {user ? (
              user.name
            ) : (
              <img
                src="https://brokerportal.anthem.com/ehb-portlet/images/loading.gif"
                alt="loading.."
              />
            )}{" "}
            !
          </h1>

          {/* <button style={{width:"80%", marginBottom:"18px"}} variant="secondary" onClick={handlelogout} >
                logout
            </button> */}

          <div class="carde">
            <div class="card__content">
              <div class="card__content-header">
                <div class="card__content-profile">
                  <div class="card__content-profile-image-container">
                    <picture class="card__content-profile-picture">
                      {/* image profile */}
                      <img
                        class="card__content-profile-image"
                        src={user ? user.photo : "upload photo"}
                      />
                    </picture>
                  </div>
                  <div className="card__content-profile-details">
                    <div className="esm">
                      <h3 className="es">Name:</h3>
                      <span class="card__content-profile-name">
                        {" "}
                        {user ? user.name : "user name"}
                      </span>
                    </div>
                    <div className="la9ab">
                      <h3 className="la9">LastName:</h3>{" "}
                      <span class="card__content-profile-job">
                        {" "}
                        {user ? user.lastname : "user lastname"}
                      </span>
                    </div>
                  </div>
                </div>
                <EditUser ping={ping} setping={setping} />
                {/* <a class="card__content-header-link" href="#">Edit profile</a> */}
              </div>
              <h1 class="card__content-title">Profession:</h1>
              <p class="card__content-body">
                {user ? user.profession : "profession"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
