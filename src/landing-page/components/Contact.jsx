import React from 'react'
import ContactImg from '../../assets/img/contact.png'

const Contact = () => {
  return (
    <div id='contact' className='p-3 md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
        <h3 className='text-3xl font-semibold'>Contact</h3>
        <br />
        <div className='md:grid md:grid-cols-2 md:gap-5 md:items-center'>
            <div>
                <form className='flex flex-col gap-2'>
                    <label className='flex flex-col'>
                        <span>Nom et prénom:</span>
                        <input type="text" className='border border-md rounded-md p-1 shadow-sm focus:shadow-md'/>
                    </label>
                    <label className='flex flex-col'>
                        <span>E-mail:</span>
                        <input type="email" className='border border-md rounded-md p-1 shadow-sm focus:shadow-md'/>
                    </label>
                    <label className='flex flex-col'>
                        <span>Messages:</span>
                        <textarea type="text" rows="5" className='resize-none border border-md rounded-md p-1 shadow-sm focus:shadow-md'></textarea>
                    </label>

                    <button className='bg-green-600 text-white font-semibold rounded-lg p-1 shadow-sm hover:shadow-md hover:bg-green-900'>Envoyer</button>
                </form>
            </div>
            <div className='hidden md:block drop-shadow-md'>
                <img src={ContactImg} alt="CareerRev" />
            </div>
        </div>
    </div>
  )
}

export default Contact