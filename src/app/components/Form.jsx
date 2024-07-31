import React from 'react'

const Form = () => {
    return (
        <div className='w-full lg:w-[562px] flex flex-col items-center gap-[10px]' >

            {/* Heading */}

            <h1 className='text-gradient text-[36px] font-bold px-8 relative'>Welcome!</h1>
            <p className='text-white text-sm -mt-2'>Join the Streaming Paradise!</p>

            {/* Input Fields */}
            <div className='flex flex-col gap-[10px] my-[12px]'>
                <input className='input' type="email" placeholder='E-mail' />
                <input className='input' type="password" placeholder='Password' />
                <input className='input' type="text" placeholder='Full name' />
            </div>

            {/* Checkboxes */}
            <div className='flex items-center gap-[17px] w-[328px] h-[46px] px-1'>
                <input className='w-[15px] h-[15px]' type="radio" />
                <p className='text-[#414141] text-pg'>By signing up, you agree to X’s <br />
                    <span className='text-[#757575] border-b '>Terms of Service </span>  and <span className='text-[#757575] border-b'>Privacy Policy</span></p>
            </div>
            
            <div className='flex items-center gap-[17px] w-[328px] h-[43px] px-1 '>
                <input className='w-[15px] h-[15px]' type="radio" />
                <p className='text-[#414141] text-pg'>I accept the communication policies</p>
            </div>

            {/* Button */}

            <button className='w-[328px] h-[55px] text-black bg-[#00FF99] font-bold rounded-[10px]'>Sign up</button>

            <div className='flex items-center gap-[10px] my-[10px]'>
                <div className='w-[84px] border border-[#5A5A5A]'></div>
                <p className='text-pg text-[#747474] font-semibold'>or continue with</p>
                <div className='w-[84px] border border-[#5A5A5A]'></div>
            </div>

            {/* Social Icons  */}

            <div className='flex items-center gap-[47px]'>
                <img className='w-[43px] h-[43px]' src="/images/google.png" alt="" />
                <img className='w-[43px] h-[43px]' src="/images/facebook.png" alt="" />
                <img className='w-[43px] h-[43px]' src="/images/facebook.png" alt="" />
            </div>

            {/* Login Text */}

            <p className='text-pg text-[#5A5A5A] font-medium my-[10px]'>Already have an account?
                <span className='text-[#05955C]'> Login </span>
            </p>

        </div>
    )
}

export default Form
