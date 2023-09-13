import './App.css'
import Header from '@/components/shared/header'
import { Outlet } from "react-router-dom"
import Sidebar from './components/base/sidebar'


const App = () => {

  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='p-5 w-full'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
