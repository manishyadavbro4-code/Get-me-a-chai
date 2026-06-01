import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white flex justify-around px-4 h-16 items-center'>
        <p className='text-center'>
           Copyright &copy; {new Date().getFullYear()}  Get me A Chai - All rights reserved!
        </p>
    </footer>
  )
}

export default Footer
