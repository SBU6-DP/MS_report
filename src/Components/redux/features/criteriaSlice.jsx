import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  criteriaFilter: [],
  xcelData:{}
};

export const filterSlice = createSlice({
  name: "criteria",
  initialState,
  reducers: {
    addCriteria: (state, action) => {
      state.criteriaFilter.push(action.payload);
    },
    deleteCriteria: (state, action) => {
      state.criteriaFilter.splice(action.payload, 1);
    },
    clearCriteria: (state) => {
      state.criteriaFilter = [];
    },
    setXcelData:(state,action)=>{
      state.xcelData = action.payload
    }
  },
});

export const { addCriteria, clearCriteria, deleteCriteria,setXcelData} =
  filterSlice.actions;

export default filterSlice.reducer;
