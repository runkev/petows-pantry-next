import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <a
        href="https://www.instagram.com/kevinpetow"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-cookie flex justify-center my-8"
    >
        <FaInstagram className="inline-block w-6 h-6 mr-1" />
    </a>
  )
}

export default Footer;
