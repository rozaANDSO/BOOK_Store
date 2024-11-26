import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'

import router from './routes/Routes.jsx'
import { store } from './redux/Store.jsx'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
