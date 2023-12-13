import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// importing from Auth Provider
import AuthProvider from './providers/AuthProvider';

// importing for react query 
import { QueryClient, QueryClientProvider } from 'react-query';

// import { router } from "./Routes/Routes";
// import { RouterProvider } from "react-router-dom";

// creating the query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      {/* <RouterProvider router={router}></RouterProvider> */}
    </AuthProvider>
  </React.StrictMode>,
)
