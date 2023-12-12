import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import AuthProvider from './providers/AuthProvider';

// import { router } from "./Routes/Routes";
// import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      {/* <RouterProvider router={router}></RouterProvider> */}
    </AuthProvider>
  </React.StrictMode>,
)
