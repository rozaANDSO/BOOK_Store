import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/features/cart/CartSlice'
import booksApi from "../redux/features/books/BookApii"
import ordersApi from '../redux/features/books/order/OrderApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})