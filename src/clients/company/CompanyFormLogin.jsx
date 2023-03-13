import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../landing-page/components/Navbar'
import {HiOutlineLogin} from 'react-icons/hi'
import Footer from '../../landing-page/components/Footer'

const CompanyFormLogin = () => {
  return (
    <div className='p-2 md:max-w-[88%] md:mx-auto text-slate-900 space-y-5 md:h-screen'>
        <Navbar/>
        <br />
        <div className='md:flex md:flex-col md:px-60 md:py-11 md:gap-5'>
            <h3 className='p-3 text-3xl font-semibold'>Se connecter</h3>
            <div className='p-3 flex flex-col gap-7'>
                <label className='flex flex-col gap-1'>
                    <span className='font-semibold'>E-mail de l'entreprise: </span>
                    <input type="email" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col gap-1'>
                    <span className='font-semibold'>Mot de passe: </span>
                    <input type="password" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                    <Link to="/company-name/passwordreset" className='hover:text-green-600 text-end'>Mot de passe oublié?</Link>
                </label>
                <div className='flex flex-col'>
                    <span className='flex items-center gap-1'>Vous n'avez pas encore de compte? <Link to="/client/company/signup" className='text-green-600 hover:text-green-900 font-semibold'>S'inscrire</Link></span>
                </div>

                <button className='text-white bg-green-600 hover:bg-green-900 flex gap-2 items-center justify-center font-semibold text-lg rounded-lg p-1 shadow-sm hover:shadow-md'>
                    <HiOutlineLogin />
                    <span>Se connecter</span>
                </button>
            </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default CompanyFormLogin