import React from 'react'
import ReactDOM from 'react-dom/client'
// НА ПОТОМ
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import { QrCodeGenerator } from './QrCodeGenerator/QrCodeGenerator'
// import { QrCodeScanner } from './QrCodeScanner/QrCodeScanner'
import { Layout } from './Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

// НА ПОТОМ
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//   },
//   {
//     path: '/generate',
//     element: <QrCodeGenerator />,
//   },
//   {
//     path: '/scan',
//     element: <QrCodeScanner />,
//   },
// ])
// НА ПОТОМ
// ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
    }}
  >
    <Layout />
  </BrowserRouter>
  // <Layout />
)
