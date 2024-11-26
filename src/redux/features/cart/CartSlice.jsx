import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.name == action.payload.name
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "successfully-cart added",
          showConfirmButton: false,
          timer: 1500,
        });
      } else (
        Swal.fire({
          title: "Already Added cart",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ok!",
        })
      )
    },
    removeFromCart: (state, action) => {
      state.cartItems=state.cartItems.filter(item => item.name !== action.payload.name)
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  }
})
      
   

export const { addToCart ,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
