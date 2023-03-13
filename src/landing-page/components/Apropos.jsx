import React from 'react'
import AproposImg from '../../assets/img/apropos.png'

const Apropos = () => {
  return (
    <div id='apropos' className='p-3 md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
         <h3 className='text-3xl font-semibold'>Apropos</h3>
         <br/>
        <div className='md:grid md:grid-cols-2 md:items-center md:gap-4'>
            <div className='md:p-5'>
                <p className='text-lg'>
                    CarreerRev est une plateforme qui connecte les chercheurs d'emploi et les entreprises en quête de talents.
                    Ils offrent des solutions innovantes pour aider les chercheurs d'emploi à trouver leur prochain défi professionnel et des services de recrutement personnalisés pour aider les entreprises à trouver les meilleurs talents pour leurs besoins.
                    Ils sont passionnés par leur travail et s'engagent à fournir des résultats de qualité supérieure.
                </p>
            </div>
            <div className='hidden md:block drop-shadow-md'>
                <img src={AproposImg} alt="CarreerRev" />
            </div>
        </div>
    </div>
  )
}

export default Apropos