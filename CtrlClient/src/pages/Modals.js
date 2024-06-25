import React from 'react'

import PageTitle from '../components/Typography/PageTitle'

import SectionTitle from '../components/Typography/SectionTitle'

function Modals() {


  return (
    <>
      <PageTitle>Двигатели</PageTitle>

      <SectionTitle>Спальня</SectionTitle>
        <div onClick={() => toggleSpan("toggle1")} className="w-1/2 md:w-1/3 cursor-pointer">
          <div className="mb-8 shadow border rounded-full h-10  flex relative items-center">
            <div className="w-full flex justify-center">
                <span className='dark:text-gray-200'>Выкл</span>
            </div>
            <div className="w-full flex justify-center">
                <span className='dark:text-gray-200'>Вкл</span>
            </div>
            <span id='toggle1'
            className="elSwitch bg-red-500 shadow text-white flex items-center justify-center w-1/2 rounded-full h-12 transition-all top-[4px] absolute left-0">
              Выкл
            </span>
          </div>
        </div>
      <SectionTitle>Зал</SectionTitle>
      <div onClick={() => toggleSpan("toggle2")} className="w-1/2 md:w-1/3 cursor-pointer">
          <div className="mb-8 shadow border rounded-full h-10  flex relative items-center">
            <div className="w-full flex justify-center">
                <span className='dark:text-gray-200'>Выкл</span>
            </div>
            <div className="w-full flex justify-center">
                <span className='dark:text-gray-200'>Вкл</span>
            </div>
            <span id='toggle2'
            className="elSwitch bg-red-500 shadow text-white flex items-center justify-center w-1/2 rounded-full h-12 transition-all top-[4px] absolute left-0">
              Выкл
            </span>
          </div>
        </div>

      <SectionTitle>Кухня</SectionTitle>
      <div onClick={() => toggleSpan("toggle3")} className="w-1/2 md:w-1/3 cursor-pointer">
          <div className="mb-8 shadow border rounded-full h-10  flex relative items-center">
            <div className="w-full flex justify-center">
                <span className='dark:text-gray-200'>Выкл</span>
            </div>
            <div className="w-full flex justify-center">
                <span className='dark:text-gray-200'>Вкл</span>
            </div>
            <span id='toggle3'
            className="elSwitch bg-red-500 shadow text-white flex items-center justify-center w-1/2 rounded-full h-12 transition-all top-[4px] absolute left-0">
              Выкл
            </span>
          </div>
        </div>
      
    </>
  )
}

export default Modals
function toggleSpan(id){
  const e = document.querySelector('#'+id);
  if (e.classList.contains('right-0')){
    e.classList.remove('right-0')
    e.classList.remove('bg-purple-600')
    e.classList.add('left-0')
    e.classList.add('bg-red-500')
    e.innerText ="Выкл"; 
  }else {
    e.classList.remove('left-0')
    e.classList.remove('bg-red-500')
    e.classList.add('right-0')
    e.classList.add('bg-purple-600')

    e.innerText ="Вкл";
  }
}