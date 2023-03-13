import React from 'react'
import ProfileImg from '../../assets/img/profilepic.jpg'
import {HiOutlineDownload, HiPlusSm} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const CandidateCard = () => {
  return (
    <div className='max-w-sm rounded-lg border-[1px] overflow-hidden shadow-lg text-slate-900'>
        <Link to="/candidatures/JohnDoe">
          <img src={ProfileImg} alt="CarreerRev" className='w-full'/>
        </Link>
        <div className='p-3'>
            <h3 className='text-lg font-semibold'>John Doe</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ipsam, atque omnis saepe et itaque obcaecati corrupti asperiores.
            </p>
        </div>
        <div className='flex gap-2 items-center justify-center p-3'>
            <button className='flex items-center gap-1 border-[1px] text-green-600 font-semibold border-green-600 rounded-lg px-5 py-1 hover:text-white hover:bg-green-600 shadow-sm hover:shadow-md'><HiOutlineDownload /><span>CV</span></button>
            <button className='flex items-center gap-1 border-[1px] bg-green-600 hover:border-green-900 font-semibold border-green-600 rounded-lg px-5 py-1 text-white hover:bg-green-900 shadow-sm hover:shadow-md'><HiPlusSm /><span>Interessé</span></button>
        </div>
    </div>
  )
}

export default CandidateCard