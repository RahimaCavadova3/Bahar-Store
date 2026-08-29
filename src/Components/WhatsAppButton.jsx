import React from 'react'
import whatsappIcon from '/src/assets/logo-wa-500x417.png'

function WhatsAppButton() {
  return (
    <>
    <a href='https://wa.me/994502280309' target='_blank' rel="noopener noreferrer"><img className='fixed hidden md:flex bottom-5 right-3 z-50 w-20' src={whatsappIcon} alt="WhatsAppButton" /></a>
    </>
  )
}

export default WhatsAppButton