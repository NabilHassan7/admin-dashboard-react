
// importing React Router Dom
import { RouterProvider } from "react-router-dom";

// importing Global CSS File
import "./styles/global.scss"

import { router } from "./Routes/Routes";

import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    // calling the router
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App
