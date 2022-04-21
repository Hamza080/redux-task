// // export default (updateStatus) => {
// //   return {
// //     type: "Update_Status",
// //     payload: updateStatus,
// //   };
// // };

// import { createAction } from "@reduxjs/toolkit";
// export const statusUpdate = createAction("Update_Status");

// export const FetchName = () => {
//   return async (dispatch) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const result = await res.json();
//     dispatch({ type: "Update_Name", payload: result[0].name });
//   };
// };
