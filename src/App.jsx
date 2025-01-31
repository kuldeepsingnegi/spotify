import React from 'react'
import Sidebar from './Component/Sidebar'
import Play from './Component/Play'
import Display from './Component/Display'
const App = () => {

  return (
   
    <div className='h-screen bg-black '>
      <div className=' h-[90%] flex '>
        <Sidebar/>
        <Display/>
      </div>
      <Play/>
    </div>
              )
  
}
export default App