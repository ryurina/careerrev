import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../../components/Logo';
import { Link } from 'react-router-dom'
import { HiMenuAlt3, HiX, HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi";

const NavbarLogged = () => {
    const [nav, setNav] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    let menuRef = useRef(null)

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handler)
    })

    const handleNav = () =>{
        setNav(!nav)
    }
    const handleDropdown = () =>{
        setDropdown(!dropdown)
    }
  return (
    <div>
        <div className='hidden md:flex items-center justify-between text-base border-b-sm'>
            <div>
                <Logo />
            </div>
            <div className='flex gap-5 font-semibold'>
                <Link to="/candidatures" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Candidatures</Link>
                <Link to="/#apropos" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Apropos</Link>
                <Link to="/#contact" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Contact</Link>
            </div>
            <div>
              <button onClick={handleDropdown} className='flex gap-1 items-center text-lg'>
                <HiOutlineUserCircle/>
                <span className='font-semibold'>R-CORP</span>
              </button>
            
            {
                dropdown
                ?
                <div className='bg-green-100 p-3 text-lg shadow-md rounded-md fixed mx-r-5 flex flex-col' ref={menuRef}>
                    <Link to="/company-name/profile" className='hover:text-green-600'>Profile</Link>
                    <Link to="/company-name/setting" className='hover:text-green-600'>Paramètre</Link>
                    <Link to="/company-name/logout" className='flex items-center gap-1 hover:text-green-600'><HiOutlineLogout /><span>Deconnexion</span></Link>
                </div>
                :
                ''
            }
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
                <Link to="/candidature" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Candidatures</Link>
                <Link to="/#apropos" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Apropos</Link>
                <Link to="/#contact" className='hover:text-green-900 hover:underline hover:underline-offset-8'>Contact</Link>
                <Link to="/company-name/profile" className='hover:text-green-600 flex items-center gap-1'><HiOutlineUserCircle/><span className='font-semibold'>R-CORP</span></Link>
                <Link to="/company-name/setting" className='hover:text-green-600'>Paramètre</Link>
                <Link to="/company-name/logout" className='flex items-center gap-1 hover:text-green-600'><HiOutlineLogout /><span>Deconnexion</span></Link>
            </div>
            </div>
            :
            ''}
        </div>

        
        

    </div>
  )
}

export default NavbarLogged