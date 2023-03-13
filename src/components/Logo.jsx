import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className='text-3xl font-semibold'>
        <span className='text-green-500'>C</span>
        <span>arreer</span>
        <span className='text-green-500'>R</span>
        <span>ev</span>
    </Link>
  )
}

export default Logo