import React, { useState } from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'
import { HiMenuAlt3, HiX, HiOutlineUser, HiOutlineUserGroup } from "react-icons/hi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div>
        <div className='hidden md:flex items-center justify-between text-base border-b-sm'>
            <div>
                <Logo />
            </div>
            <div className='flex gap-5 font-semibold'>
                <a href="/#home" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Accueil</a>
                <a href="/#services" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Services</a>
                <a href="/#apropos" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Apropos</a>
                <a href="/#contact" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Contact</a>
            </div>
            <div className='flex gap-2'>
                <Link to="/client/employee" className='flex gap-1 items-center py-1 px-5 border-[1px] border-green-600 text-green-600 font-semibold rounded-full shadow-sm hover:bg-green-600 hover:text-white hover:shadow-md'><HiOutlineUser/><span>Particulier</span></Link>
                <Link to="/client/company/signup" className='flex gap-1 items-center py-1 px-5 bg-green-600 text-white font-semibold rounded-full shadow-sm hover:bg-green-900 hover:shadow-md'><HiOutlineUserGroup/><span>Entreprise</span></Link>
            </div>
        </div>


        {/* Mobile Menu */}
        <div className='md:hidden'>
            <div className='z-30 flex justify-between items-center'>
                <Logo />
                <button onClick={handleNav}>
                    {nav ? <HiX size={35}/> : <HiMenuAlt3 size={35}/>}
                </button>
            </div>
            {nav
            ?
            <div className='fixed bg-green-100 p-2 flex flex-col gap-36 top-0 bottom-0 left-0 h-screen w-full'>
            <div className='z-30 flex justify-between items-center'>
                <Logo />
                <button onClick={handleNav}>
                    {nav ? <HiX size={35}/> : <HiMenuAlt3 size={35}/>}
                </button>
            </div>
            <div className='z-5 flex flex-col justify-center items-center gap-7 bg-green-100 font-semibold text-2xl'>
                <a href="/#home" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Accueil</a>
                <a href="/#services" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Services</a>
                <a href="/#apropos" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Apropos</a>
                <a href="/#contact" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Contact</a>
                <Link to="/client/employee" className='flex gap-1 items-center py-1 px-5 border-[1px] border-green-600 text-green-600 font-semibold rounded-full shadow-sm hover:bg-green-600 hover:text-white hover:shadow-md'><HiOutlineUser/><span>Particulier</span></Link>
                <Link to="/client/company/signup" className='flex gap-1 items-center py-1 px-5 bg-green-600 text-white font-semibold rounded-full shadow-sm hover:bg-green-900 hover:shadow-md'><HiOutlineUserGroup/><span>Entreprise</span></Link>
            </div>
            </div>
            :
            ''}
        </div>

        
        

    </div>
  )
}

export default Navbar