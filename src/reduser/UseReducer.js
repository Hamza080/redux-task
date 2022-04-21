import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },

    deleteData: (state, action) => {
      return {
        data: [...state.data.filter((item) => item.id !== action.payload)],
      };
    },

    UpdateData: (state, action) => {
      let userData = state.data.map((item) => {
        return item.id == action.payload.id ? action.payload : item;
      });
      state.data = [...userData];
    },
  },
});
export const { addData, deleteData, UpdateData } = userReducer.actions;
export default userReducer.reducer;

////api Data

// const initialState = {
//   name: "Hamza",
//   age: 20,
//   status: "Coder",
// };

// export const fetchUser = createAsyncThunk("usersFetch", async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const result = await res.json();
//   return result[Math.floor(Math.random(0) * 10)].name;
// });

// const userReducer = createSlice({
//   name: "person",
//   initialState,
//   reducers: {
//     nameUpdate(state, action) {
//       state.name = action.payload;
//     },
//     ageUpdate(state, action) {
//       state.age = action.payload;
//     },
//     statusUpdate(state, action) {
//       state.status = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchUser.fulfilled]: (state, action) => {
//       state.name = action.payload;
//     },
//     [fetchUser.pending]: (state, action) => {
//       state.name = "Panding!!!";
//     },
//     [fetchUser.rejected]: (state, action) => {
//       state.name = "Try Again";
//     },
//   },
// });
// export const { nameUpdate, ageUpdate, statusUpdate } = userReducer.actions;

// export default userReducer.reducer;

// export default createReducer(initialState, (builder) => {
//   builder.addCase("Update_Age", (state, action) => {
//     state.age = action.payload;

//     // state.status = action.payload.updateStatus;
//   });
//   builder.addCase("Update_Name", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase("Update_Status", (state, action) => {
//     state.status = action.payload;
//   });
// });
