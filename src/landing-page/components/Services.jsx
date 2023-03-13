import React from 'react'
import {HiCheck} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Services = () => {
    const servicesClient = ["Recherche d'emploi", "Évaluation de compétences", "Coaching de carrière", "Conseils en rédaction de CV"] 
    const servicesCompany = ["Recrutement de personnel", "Évaluation des compétences", "Formation et développement", "Consultation en RH"]
  return (
    <div id='services' className='p-3 md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
        <h3 className='text-3xl font-semibold'>Nos services</h3>
        <br /><br />
        <div className='flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5'>
            <div className='md:mx-7 bg-green-100 rounded-xl flex flex-col gap-5 p-5 items-center shadow-md hover:shadow-lg'>
                <h4 className='font-semibold'>Pour les particuliers</h4>
                <div>
                    {servicesClient.map((service, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <HiCheck />
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
                <Link to="/services/employee" className='bg-green-600 py-1 px-11 text-lg text-white font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-green-900'>Détails</Link>
            </div>
            <div className='md:mx-12 bg-green-100 rounded-xl flex flex-col gap-5 p-5 items-center shadow-md hover:shadow-lg'>
                <h4 className='font-semibold'>Pour les entreprises</h4>
                <div>
                {servicesCompany.map((service, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <HiCheck />
                        <span>{service}</span>
                    </div>
                ))}
                </div>
                <Link to="/services/company" className='bg-green-600 py-1 px-11 text-lg text-white font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-green-900'>Détails</Link>
            </div>
        </div>
    </div>
  )
}

export default Services