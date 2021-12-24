import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../js/userSlice/userSlice";
import "../editBook/editBook.css";

const EditUser = ({ ping, setping }) => {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const [updated, setupdated] = useState({});
  const handleEdit = () => {
    dispatch(updateUser({ userupdated: updated, id: user?._id }));
    window.location.reload();
  };
  return (
    <div>
      <Button style={{ width: "100%" }} variant="primary" onClick={handleShow}>
        update user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the user</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "gray" }}>
          {" "}
          <div className="inputEdit">
            <h1>{user?.name}</h1>

            <input
              type="text"
              placeholder="Enter the name"
              onChange={(e) => setupdated({ ...updated, name: e.target.value })}
            />

            <input
              id="title"
              placeholder="Enter thelastname"
              type="text"
              onChange={(e) =>
                setupdated({ ...updated, lastname: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Enter the email"
              onChange={(e) =>
                setupdated({ ...updated, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Enter the password"
              onChange={(e) =>
                setupdated({ ...updated, password: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Enter the photo"
              onChange={(e) =>
                setupdated({ ...updated, photo: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Enter the profession"
              onChange={(e) =>
                setupdated({ ...updated, profession: e.target.value })
              }
            />
            {/* <button style={{backgroundColor:"green"}} onClick={handleEdit}>Edit</button> */}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "gray" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
