import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "lip" },
  { id: "2", name: "kim" },
  { id: "3", name: "saul" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
