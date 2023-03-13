import React from 'react'
import Navbar from '../../landing-page/components/Navbar'
import EmployeeImg from '../../assets/img/employee.png'
import {HiOutlinePaperAirplane} from 'react-icons/hi'
import Footer from '../../landing-page/components/Footer'

const EmployeeForm = () => {
  return (
    <div className='p-2 md:max-w-[88%] md:mx-auto text-slate-900 space-y-5'>
        <Navbar/>
        <br />
        <div className='md:h-screen'>
        <h3 className='p-3 text-3xl font-semibold'>Candidature</h3>
        <div className='md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-5'>
            <div className='p-3 flex flex-col gap-3'>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Nom: </span>
                    <input type="text" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Prénom: </span>
                    <input type="text" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>E-mail: </span>
                    <input type="email" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Poste recherché: </span>
                    <input type="text" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Téléphone: </span>
                    <input type="number" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md' placeholder='03X XX XXX XX'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Lien portfolio ou github (optionel): </span>
                    <input type="text" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>

                <label className='flex flex-col'>
                    <span className='font-semibold'>CV: </span>
                    <input type="file" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold'>Photo: </span>
                    <input type="file" className='border-[1px] border-green-600 rounded-lg py-1 px-2 shadow-sm text-slate-900 focus:shadow-md'/>
                </label>

                <button className='text-white bg-green-600 hover:bg-green-900 flex gap-2 items-center justify-center font-semibold text-lg rounded-lg p-1 shadow-sm hover:shadow-md'>
                    <HiOutlinePaperAirplane />
                    <span>Envoyer</span>
                </button>
            </div>
            <div className='hidden md:block drop-shadow-md'>
                <img src={EmployeeImg} alt="CareerRev" />
            </div>
        </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default EmployeeForm