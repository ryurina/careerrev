import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineDownload, HiPlusSm} from 'react-icons/hi'
import Footer from '../../landing-page/components/Footer'
import NavbarLogged from '../company/components/NavbarLogged'
import ProfileImg from '../../assets/img/profilepic.jpg'

const CandidateProfile = () => {
  return (
    <div className='p-2 md:max-w-[88%] md:mx-auto text-slate-900 space-y-5'>
        <NavbarLogged />
        <div className='flex flex-col items-center justify-center md:grid md:grid-cols-3 md:items-start md:py-12 md:gap-24'>
            <div className='flex flex-col items-center justify-center gap-1 border-[1px] py-7 px-11 rounded-xl shadow-md md:p-7'>
                <img src={ProfileImg} alt="CarreerRev" className='w-[200px] object-contain rounded-full'/>
                <h3 className='text-xl font-semibold'>John Doe</h3>
                <p className='text-md text-slate-400'>Dev Front-End</p>
                <div className='flex items-center gap-2'>
                    <button className='flex items-center gap-1 border-[1px] text-green-600 font-semibold border-green-600 rounded-lg px-5 py-1 hover:text-white hover:bg-green-600 shadow-sm hover:shadow-md'><HiOutlineDownload /><span>CV</span></button>
                    <button className='flex items-center gap-1 border-[1px] bg-green-600 hover:border-green-900 font-semibold border-green-600 rounded-lg px-5 py-1 text-white hover:bg-green-900 shadow-sm hover:shadow-md'><HiPlusSm /><span>Interessé</span></button>
                </div>
            </div>
            <div className='p-3 md:col-span-2'>
                <div>
                    <h3 className='text-lg font-semibold'>Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deleniti, architecto alias eligendi possimus mollitia beatae eos, perferendis maiores eveniet nisi accusamus nesciunt at exercitationem dolorum quis sapiente eum iure.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CandidateProfile