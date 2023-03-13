import React from 'react'
import Apropos from './components/Apropos'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className='p-2 md:max-w-[88%] md:mx-auto text-slate-900 space-y-5'>
    <Navbar />
    <Hero />
    <Services />
    <Apropos />
    <Contact />
    <Footer />
    </div>
  )
}

export default LandingPage