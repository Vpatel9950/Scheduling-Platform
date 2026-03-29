
import Navbar from './component/Navbar'
import LandingPage from './component/Landing'
import LoginPage from './component/LoginPage'
import LandingPage2 from './component/LandingPage2'
import LandingPage3 from './component/LandingPage3'
import LandingPage4 from './component/LandingPage4'
import Footer from './component/Footer'
import AdminDashboard from './component/AdminDashboard'
import PublicBookingPage from './component/PublicBookingPage'
import MeetingsPage from './component/MeetingsPage'
import NewEvent from './component/NewEvent'
// import { Routes, Route } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {


  const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar/>
      <LandingPage/>
      <LandingPage2/>
      <LandingPage3/>
      <LandingPage4/>
      <Footer/>
      </>
  },
  {
    path: "/login",
    element: <div><Navbar/><LoginPage/><Footer/></div>
  },
  {
    path: "/make-event",
    element: <div><NewEvent/></div>
  },
  {
    path: "/admin",
    element: <div><Navbar/><AdminDashboard/><Footer/></div>
  },
  {
    path: "/user-dashboard/:id",
    element: <div><Navbar/><PublicBookingPage/><Footer/></div>,
  },
  {
    path: "/user/meeting",
    element: <div><Navbar/><MeetingsPage/><Footer/></div>,
  }
])
  return (
<RouterProvider router={router} />
  )
}

export default App
