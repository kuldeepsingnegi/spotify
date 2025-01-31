import React from 'react'

const Songitems = ({image,name,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
    <img className='rounded last:' src={image} alt=" song1" />
    <p className='font-bold mt-2 mb-1 '>{name}</p>
    <p className=' text-slate-200 text-sm'>{desc}</p>
</div>
  )
}

export default Songitems