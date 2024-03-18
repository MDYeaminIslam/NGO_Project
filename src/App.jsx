
import { Outlet } from 'react-router-dom'
import './App.css'
import SideNavbar from './component/sidebar/SideNavbar'
import DashBoardNav from './component/dashboard/DashBoardNav'

function App() {


  return (
    <>
      <div className=' flex '>
        <div className='min-h-screen h-screen overflow-y-scroll'>
          <SideNavbar />
        </div>
        <div>
          <div><DashBoardNav /></div>
          <div className=''>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
