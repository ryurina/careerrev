import React from 'react'
import Footer from '../../landing-page/components/Footer'
import NavbarLogged from '../company/components/NavbarLogged'
import CandidateCard from './CandidateCard'
import {HiPlus} from 'react-icons/hi'

const Candidats = () => {
  return (
    <div className='p-2 md:max-w-[88%] md:mx-auto text-slate-900 space-y-5'>
        <NavbarLogged />
        <div className=''>
          <h3 className='text-3xl font-semibold py-7'>Candidatures</h3>
          <div>

          </div>
          <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
          </div>
          <br />
          <button className='flex gap-1 items-center bg-green-600 text-white rounded-lg shadow-sm hover:shadow-md px-7 py-1 font-semibold text-lg hover:bg-green-900'><HiPlus /> <span>Voir plus</span></button>
        </div>
        <Footer />
    </div>
  )
}

export default Candidats