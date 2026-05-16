import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

function Testimonails() {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonails'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Textimonials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories From Those Who Found Home With Us</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((textimonial,index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={textimonial.image} alt={textimonial.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{textimonial.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'> {textimonial.title} </p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length : textimonial.rating},(items,index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                    ))}
                </div>
                <p className='text-gray-600'> {textimonial.text} </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonails
