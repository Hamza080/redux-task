import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { UpdateData } from "../reduser/UseReducer";

const Edit = ({
  handleClose,
  updateId,
  updateName,
  updateAge,
  updateStatus,
}) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => {
    return state.data;
  });
  const [newName, setNewName] = useState(updateName);
  const [newAge, setNewAge] = useState(updateAge);
  const [newStatus, setNewStatus] = useState(updateStatus);
  const userData = {
    name: newName,
    age: newAge,
    status: newStatus,
    id: updateId,
  };

  const update = () => {
    dispatch(UpdateData(userData, updateId));
  };

  return (
    <>
      <Form>
        <Form.Group className="mt-2">
          <Form.Control
            type="text"
            value={newName}
            placeholder="Enter Name"
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Form.Group className="mt-2">
          <Form.Control
            type="text"
            value={newAge}
            placeholder="Enter Age"
            onChange={(e) => setNewAge(e.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Form.Group className="mt-2">
          <Form.Control
            type="text"
            value={newStatus}
            placeholder="Enter Status"
            onChange={(e) => setNewStatus(e.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Button
          className="mt-3"
          variant="success"
          onClick={() => {
            handleClose();
            update();
          }}
        >
          Update Task
        </Button>
      </Form>
    </>
  );
};

export default Edit;
