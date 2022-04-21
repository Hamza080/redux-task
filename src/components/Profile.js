// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   nameUpdate,
//   ageUpdate,
//   fetchUser,
//   statusUpdate,
// } from "../reduser/UseReducer";

// const Profile = () => {
//   const { name, age, status } = useSelector((state) => {
//     return state;
//   });

//   const dispatch = useDispatch();
//   const [updateName, setUpdateName] = useState("");
//   const [updateAge, setUpdateAge] = useState("");
//   const [updateStatus, setUpdateStatus] = useState("");

//   const ChangeAge = () => {
//     dispatch(ageUpdate(updateAge));
//     setUpdateAge("");
//   };

//   const ChangeName = () => {
//     // const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     // const result = await res.json();
//     dispatch(fetchUser());
//     setUpdateName("");
//   };

//   const ChangeStatus = () => {
//     dispatch(statusUpdate(updateStatus));
//     setUpdateStatus("");
//   };

///with Action file with out silice////
// const dispatch = useDispatch();
// const UpdateAge = () => {
//   dispatch({
//     type: "Update_Age",
//     payload: updateAge,
//   });
// };

// const UpdateNames = async () => {
//   dispatch(FetchName());
// };

// const ChangeStatus = () => {
//   dispatch(statusUpdate(updateStatus));
// };

//   return (
//     <>
//       <h1> I am {name} </h1>
//       <input
//         value={updateName}
//         onChange={(e) => setUpdateName(e.target.value)}
//       />
//       <div>
//         <button onClick={() => ChangeName()}>UpdateNames</button>
//       </div>
//       <h1> My age is: {age} </h1>
//       <input value={updateAge} onChange={(e) => setUpdateAge(e.target.value)} />
//       <div>
//         <button onClick={() => ChangeAge()}>UpdateAge</button>
//       </div>
//       <h1>My Status is:{status}</h1>
//       <input
//         value={updateStatus}
//         onChange={(e) => setUpdateStatus(e.target.value)}
//       />

//       <div>
//         <button onClick={() => ChangeStatus()}>UpdateStatus</button>
//       </div>
//     </>
//   );
// };

// export default Profile;
