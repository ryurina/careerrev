import React from 'react'
import Logo from '../../components/Logo';
import { MdOutlinePlace, MdPhone, MdMailOutline } from "react-icons/md";
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='text-white bg-slate-900 flex flex-col py-3 px-3 md:flex-row md:py-10'>
      <div className='py-3 md:basis-1/4'>
        <Logo />
      </div>
      <div className='md:flex md:flex-row md:justify-evenly md:basis-1/2'>
        <div className='mb-3'>
            <h1 className='text-2xl font-bold uppercase'>Apropos</h1>
            <div className='flex flex-col'>
                <a href="#apropos" className='mb-1 hover:text-green-600'>Qui sommes-nous?</a>
                <a href="#" className='mb-1 hover:text-green-600'>Termes et conditions</a>
                <a href="#" className='mb-1 hover:text-green-600'>Politique de confidentialité</a>
            </div>
        </div>

        <div className='mb-3'>
            <h1 className='text-2xl font-bold uppercase'>Contact</h1>
            <div className='flex flex-col'>
                <p className='flex flex-row items-center mb-1'><MdOutlinePlace className='pr-1'/> Antananarivo - Atsimondrano</p>
                <p className='flex flex-row items-center mb-1'><MdPhone className='pr-1'/> +261 32 24 294 98</p>
                <p className='flex flex-row items-center mb-1'><MdMailOutline className='pr-1'/> contact@careerrev.mg</p>
            </div>
        </div>

      </div>
      <hr/>
      <div className='my-1'>
            <h1 className='text-2xl font-bold uppercase text-center'>Suivez-nous!</h1>
            <div className='flex flex-row w-full justify-between'>
                <SocialIcon 
                url="https://www.facebook.com/AkademikaMG"
                fgColor='white'
                bgColor='transparent'
                />
                <SocialIcon 
                url="https://instagram.com/ryurina23"
                fgColor='white'
                bgColor='transparent'
                />
                <SocialIcon 
                url="https://www.aedin.com/company/85937466/"
                fgColor='white'
                bgColor='transparent'
                />
                <SocialIcon 
                url="https://twitter.com/ryurina23"
                fgColor='white'
                bgColor='transparent'
                />
            </div>
        <p>Copyright &copy; <span className='font-semibold'>CarerRev</span> 2023.</p>
        <p>Design by <a href="https://github.com/ryurina" className='text-green-600'>ryurina</a>.</p>
      </div>
    </div>
  )
}

export default Footer
