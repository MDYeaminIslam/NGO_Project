
import { Outlet } from 'react-router-dom'
import './App.css'
import SideNavbar from './component/sidebar/SideNavbar'
import DashBoardNav from './component/dashboard/DashBoardNav'
import DynamicNavbar from './component/Navbar/DynamicNavbar'

function App() {
  return (
    <>
      <div className=' flex flex-col md:flex-row w-full  '>
        <div className='min-h-screen h-screen overflow-y-scroll w-1/5'>
          <SideNavbar />
        </div>
        <div className='w-4/5'>
<<<<<<< HEAD
          {/* <div><DashBoardNav /></div> */}
          {/* <div><DynamicNavbar /></div> */}
=======
          {/* <div><DashBoardNav /></div>
          <div><DynamicNavbar/></div> */}
>>>>>>> 207d787b32bfaa7a519a52623742d6df3282ec36
          <div className=' '>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
