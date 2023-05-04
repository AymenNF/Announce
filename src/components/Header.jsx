import React from 'react'
import { announce, user, cart } from '../images';

const Header = () => {
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <div>
                    <img className='w-28' src={announce} alt="" />
                </div>
                <div className='flex items-center gap-8' >
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Home</li>
                        <li className='text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Categories</li>
                        <li className='text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>About</li>
                        <li className='text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Contact</li>
                    </ul>

                    <div className='relative'>
                        <img className='w-10 hover:text-blue-900 underline-offset-2 decoration-[1px] cursor-pointer' src={cart} alt="cart" />
                        <span className='absolute w-6 h-6 top-3 left-2 text-sm flex items-center justify-center font-semibold font-titleFont'>0</span>
                    </div>
                    <div>
                        <img className='w-8 h-8 rounded-full hover:text-blue-900 underline-offset-2 decoration-[1px] cursor-pointer' src={user} alt="user" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
