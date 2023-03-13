import React from 'react'
import Navbar from '../../landing-page/components/Navbar'
import CompanyImg from '../../assets/img/company.png'
import {HiOutlinePaperAirplane} from 'react-icons/hi'
import Footer from '../../landing-page/components/Footer'
import { Link } from 'react-router-dom'

const CompanyFormSignup = () => {
  return (
    <div className='p-2 md:max-w-[88%] md:mx-auto text-slate-900 space-y-5'>
        <Navbar/>
        <br />
        <div className='md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
        <h3 className='p-3 text-3xl font-semibold'>Entreprise</h3>
        <div className='md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-5'>
            <div className='p-3 flex flex-col gap-3'>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Nom de l'entreprise: </span>
                    <input type="text" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>E-mail de l'entreprise: </span>
                    <input type="email" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Téléphone: </span>
                    <input type="number" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md' placeholder='03X XX XXX XX'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Mot de passe: </span>
                    <input type="password" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Logo: </span>
                    <input type="file" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>

                <div className='flex flex-col'>
                    <span className='flex items-center gap-1'>Vous avez déjà un compte? <Link to="/client/company/login" className='text-green-600 hover:text-green-900 font-semibold'>Se connecter</Link></span>
                </div>

                <button className='text-white bg-green-600 hover:bg-green-900 flex gap-2 items-center justify-center font-semibold text-lg rounded-lg p-1 shadow-sm hover:shadow-md'>
                    <HiOutlinePaperAirplane />
                    <span>Inscrire</span>
                </button>
            </div>
            <div className='hidden md:block drop-shadow-md'>
                <img src={CompanyImg} alt="CareerRev" />
            </div>
        </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default CompanyFormSignup