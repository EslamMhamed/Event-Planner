import { createBrowserRouter, RouterProvider } from "react-router-dom"


import ErrorPage from "./pages/ErrorPage.tsx"
import LayoutRoot from "./pages/LayoutRoot.tsx"
import EventListPage from "./pages/EventListPage.tsx"
import EventCreatePage from "./pages/EventCreatePage.tsx"
import EventDetailsPage from "./pages/EventDetailsPage.tsx"
import EventEditPage from "./pages/EventEditPage.tsx"
import EventProvider from "./context/EventContect.tsx"


function App() {

  const route = createBrowserRouter([
    {path:"/" , element:<LayoutRoot />, errorElement: <ErrorPage /> , children:[
      {index: true, element: <EventListPage />},
      {path: "/create", element: <EventCreatePage /> },
      {path:"/event/:id", element:<EventDetailsPage />},
      {path:"/edit/:id", element:<EventEditPage/> }
    ]},
    
  ])

  return (
    <EventProvider>
      <RouterProvider router={route} />
    </EventProvider>
  )
}

export default App
