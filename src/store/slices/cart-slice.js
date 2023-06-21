
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "text",
  initialState: {
    textvalue: [],
  },
  reducers: {
    setCartItems(state, action) {
      state.textvalue = action.payload;
      console.log("slice-code@@@", state.textvalue);
    },
  },
});

export const {
  setCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
