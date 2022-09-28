import { createSlice } from "@reduxjs/toolkit";
import { DogI, initialStateI } from "../../types";

const initialState: initialStateI = {
  dogs: [],
  dogsFilter: [],
  dog: {
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperament: "",
    image: "",
  },
};

export const slice = createSlice({
  name: "wikidogs",
  initialState: initialState,
  reducers: {
    //==== get dogs=====
    getDogs: (state, action) => {
      state.dogs = action.payload;
      state.dogsFilter = action.payload;
    },
  },
});

export const { getDogs } = slice.actions;

export default slice.reducer;
