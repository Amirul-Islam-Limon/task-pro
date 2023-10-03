import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import routes from './routes/Routes.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <Provider store={store}>
        <RouterProvider router={routes}>
        </RouterProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
