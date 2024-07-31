import React from 'react'

const Header = () => {
  return (
    <div className='max-w-[1200px] h-[63px] mt-[42px] flex items-center justify-between'>

      {/* Logo */}
      <div className='flex items-center gap-1 md:gap-[10px]'>
        <img className='w-6 md:w-10 md:h-10 lg:w-16 lg:h-16' src="/images/logo.png" alt="logo" />
        <h1 className='text-xs md:text-lg lg:text-[32px] font-bold text-[#FFFFFF]'>My Streaming Platform</h1>
      </div>


      <div className='flex items-center gap-[10px]' >

        {/* Languages Option */}
        <select className='w-[64px] cursor-pointer h-12 text-base rounded-[15px] text-white bg-[#0B0B0A] border-2 px-2 border-[#353535] outline-none '>
          <option value="EN">En</option>
          <option value="SP">SP</option>
          <option value="CH">CH</option>
        </select>

        {/* Login Button */}
        <button className='md:w-[126px] h-12 px-[23px] border-2 border-[#00FF99] rounded-[15px] text-[15px] hover:bg-[#00FF99] duration-75 text-white'>
          Login
        </button>

      </div>
      
    </div>
  )
}

export default Header
