import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 
// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'
 
// Import the components
import IndexPage from './routes'
import ContactPage from './routes/contact'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import DashboardPage from './routes/dashboard'
import InvoicesPage from './routes/dashboard.invoices'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      { path: '/contact', element: <ContactPage /> },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/invoices', element: <InvoicesPage /> }
        ]
      }
    ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)