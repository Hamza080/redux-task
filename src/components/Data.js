import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, deleteData, UpdateData } from "../reduser/UseReducer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import Edit from "./Edit";

const Data = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const record = new Date().getTime().toString();

  ///Updated Id
  const [updateId, setUpdateId] = useState();
  const [updateAge, setUpdateAge] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [updateName, setUpdateName] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // for dialogue box
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newData = {
    name: userName,
    age: userAge,
    status: userStatus,
    id: record,
  };
  const ChangeData = () => {
    dispatch(addData(newData));
    setUserAge("");
    setUserName("");
    setUserStatus("");
    console.log(userName, "name");
  };

  const deleteCard = (id) => {
    dispatch(deleteData(id));
  };

  ///update
  const updateCard = (id, name, age, status) => {
    // dispatch(UpdateData(newData));
    setUpdateId(id);
    setUpdateAge(age);
    setUpdateStatus(status);
    setUpdateName(name);
  };

  const detail = useSelector((state) => {
    return state.data;
  });
  console.log(detail, "junaid");
  return (
    <>
      <Box textalign="center">
        <Typography variant="h6" gutterBottom component="div">
          Enter Name
        </Typography>
        <TextField
          value={userName}
          label="Name"
          onChange={(e) => setUserName(e.target.value)}
        />

        <Typography variant="h6" gutterBottom component="div">
          Eneter Age
        </Typography>
        <TextField
          value={userAge}
          label="Age"
          onChange={(e) => setUserAge(e.target.value)}
        />

        <Typography variant="h6" gutterBottom component="div">
          Enter Status
        </Typography>

        <TextField
          value={userStatus}
          label="Status"
          onChange={(e) => setUserStatus(e.target.value)}
        />
      </Box>{" "}
      <br />
      <Button
        variant="outlined"
        onClick={() => {
          ChangeData();
        }}
      >
        Add Data
      </Button>{" "}
      <br /> <br />
      <div>
        {detail?.map((item, id) => {
          return (
            <>
              <Box textalign="center">
                <Card variant="outlined">
                  <React.Fragment>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Id is: {item.id}
                      </Typography>
                      <Typography variant="h5" component="div">
                        name is : {item.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        age is : {item.age}
                      </Typography>
                      <Typography variant="body2">
                        staus is : {item.status}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => {
                          deleteCard(item.id);
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="info"
                        onClick={() => {
                          handleOpen();
                          updateCard(item.id, item.name, item.age, item.status);
                        }}
                      >
                        Edit
                      </Button>
                    </CardActions>
                  </React.Fragment>
                </Card>
              </Box>
            </>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Task
          </Typography>
          <Edit
            handleClose={handleClose}
            updateId={updateId}
            updateName={updateName}
            updateAge={updateAge}
            updateStatus={updateStatus}
          />

          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Data;
