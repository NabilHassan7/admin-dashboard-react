
// importing React Router Dom
import { RouterProvider } from "react-router-dom";

// importing Global CSS File
import "./styles/global.scss"

import { router } from "./Routes/Routes";

function App() {
  return (
    // calling the router
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
