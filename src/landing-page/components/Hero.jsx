import React from 'react'
import HeroImg from '../../assets/img/hero.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='home' className='p-3 md:h-screen md:grid md:grid-cols-2 md:items-center md:px-7'>
        <div className='space-y-3'>
            <h1 className='text-4xl font-bold'>
                Naviguez vers le succès : notre plateforme de lancement de carrière peut vous aider
            </h1>
            <p className='text-xl'>
                La plateforme est conçue pour fournir des conseils, des ressources et un soutien pour aider les utilisateurs à naviguer sur le marché de l'emploi et à tirer le meilleur parti de leurs opportunités de carrière.
            </p>
            <div>
                <Link to="/client/" className='text-xl py-1 px-5 bg-green-600 text-white font-semibold rounded-full shadow-sm hover:bg-green-900 hover:shadow-md'>Commencer</Link>
            </div>
        </div>
        <div className='drop-shadow-md z-2'>
            <img src={HeroImg} alt="carreerrev" />
        </div>
    </div>
  )
}

export default Hero