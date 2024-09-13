import React from 'react'
import Header from './header'
import Arrow_forward from "../../../public/images/arrow_forward.svg"

const Hero_section = () => {
    return (
        <div className='bg-[#ECEDEE]  h-auto'>
            <Header/>
            <div className='w-[55px] h-[55px] bg-[#FEB2F2]'></div>
            <div className='w-[55px] h-[55px] bg-[#1CB26A] relative left-[55px]'></div>
            <h1 className=' absolute left-40 mt-32 z-10 text-[60px] font-black'>Meet</h1>
            <div className='w-[200px] h-[250px] bg-[#1CB26A] absolute right-0 animate-expandContractSmall'></div>
            <div className=" ml-[110px] w-[580px]  h-[250px] bg_green  animate-expandContractGreen"></div>
            <h1 className=' absolute left-40 -mt-24 z-10 text-[220px] font-black'>Composer</h1>
            <div className='absolute z-20 left-[690px] w-[535px] h-[100px] opacity-80 bg_pink animate-expandContract'></div>
            <div className='w-[110px] h-[220px] bg-[#FEB2F2]'></div>
            <div className='w-[330px] h-[100px] bg-[#2CD2FA] absolute right-[200px] z-40 opacity-80 animate-expandContractBlue bottom-[37px]'></div>
            <div className='w-[200px] h-[120px] bg_pink float-right relative bottom-[22px] '></div>
            <div className='relative left-40'>
            <p className='font-open-sans text-[36px] w-[580px]'>Build trading algorithms with AI, backtest them, then execute—all in one platform. No coding skills required.</p>
            <p className='font-open-sans text-[36px] w-[580px] py-10'>Trading. Built better.</p>
            <button className='bg-[#000000] text-[36px] font-open-sans flex items-center gap-2 justify-center text-white w-[350px] py-3 rounded-full'>Get started
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>  
            </button>
            <div className='w-[180px] relative bottom-[335px] float-right right-[360px] h-[60px] bg-[#2CD2FA]'></div>
            <div className='w-[40px] relative bottom-[335px] float-right -right-5 h-[60px] bg-[#1CB26A]'></div>
            </div>
            <div className='w-[160px] relative bottom-[275px] float-right -right-[180px] h-[60px] bg-[#ECAE34]'></div>
        </div>
    )
}

export default Hero_section
