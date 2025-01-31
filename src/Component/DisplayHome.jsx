import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import Songitems from './Songitems'
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (<Albumitem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>today's biggest hits</h1>
        <div className='flex overflow-auto'>
           {songsData.map((item,index)=>(<Songitems key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome