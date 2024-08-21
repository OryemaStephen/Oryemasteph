// import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Socials = () => {
  return (
    <div className="grid w-full grid-cols-3 py-5 text-center">
        <a href="https://www.linkedin.com/in/oryema-stephen-76b891133/" target='_blank'
                    rel='noopener noreferrer' className="flex flex-col items-center justify-center text-gray-400 hover:text-green-300">
            <div className="py-2 text-2xl md:text-4xl"><FaLinkedin /></div>
            <div className="text-lg">LinkedIn</div>
        </a>
        <a href="https://x.com/Oryemasteph" target='_blank'
                    rel='noopener noreferrer' className="flex flex-col items-center justify-center my-4 text-gray-400 hover:text-green-300">
            <div className="py-2 text-2xl md:text-4xl"><FaXTwitter /></div>
            <div className="text-lg">Twitter (X)</div>
        </a>
        <a href="https://github.com/OryemaStephen" target='_blank'
                    rel='noopener noreferrer' className="flex flex-col items-center justify-center text-gray-400 hover:text-green-300">
            <div className="py-2 text-2xl md:text-4xl"><FaGithub /></div>
            <div className="text-lg">GitHub</div>
        </a>
    </div>
  )
}

export default Socials