import React from 'react'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';
import Navbar from './Navbar';

const DisplayAlbum = () => {
    const {id} = useParams();
    const album = albumsData[id];
  return (
    <>
    <Navbar/>
    <div className=' mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
      <img src={albumsData[id].image } alt="" />  
    </div>
    </>
  )
}

export default DisplayAlbum