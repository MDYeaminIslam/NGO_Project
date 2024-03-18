
import { Outlet } from 'react-router-dom'
import './App.css'
import SideNavbar from './component/sidebar/SideNavbar'

function App() {


  return (
    <>
      <div className=' flex'>
        <div className='min-h-screen'>
          <SideNavbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
