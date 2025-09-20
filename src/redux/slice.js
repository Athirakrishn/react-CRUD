import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
   
    add: (state, action) => {
      state.data.push({
        id: Date.now(),
        title: action.payload,
        done: false,
      });
    },

   
    edit: (state, action) => {
      const { id, title } = action.payload;
      const item = state.data.find((d) => d.id === id);
      if (item) {
        item.title = title;
      }
    },

   
    remove: (state, action) => {
      state.data = state.data.filter((d) => d.id !== action.payload);
    },

 
    done: (state, action) => {
      const item = state.data.find((d) => d.id === action.payload);
      if (item) {
        item.done = !item.done;
      }
    },
  },
});

export const { add, edit, remove, done } = slice.actions;
export default slice.reducer;
