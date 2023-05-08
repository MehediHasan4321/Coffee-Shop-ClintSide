import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'
import AllCoffee from './components/AllCoffee/AllCoffee.jsx'

const route = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<AllCoffee/>,
        loader:()=>fetch('http://localhost:5000/coffees')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee/>
      },
      {
        path:'/updateCoffee',
        element:<UpdateCoffee/>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
