
import { Outlet } from 'react-router-dom'
import './App.css'
import SideNavbar from './component/sidebar/SideNavbar'


function App() {
  return (
    <>
      <div className=' flex flex-col md:flex-row w-full  '>
        <div className='min-h-screen h-screen overflow-y-scroll no-scrollbar w-1/5 '>
          <SideNavbar />
        </div>

        <div className=' w-full md:w-4/5'>

          <div className='h-screen overflow-y-scroll '>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
