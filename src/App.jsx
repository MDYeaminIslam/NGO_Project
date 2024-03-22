
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
          {/* <div><DashBoardNav /></div> */}
          {/* <div><DynamicNavbar /></div> */}
          <div className=' '>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
