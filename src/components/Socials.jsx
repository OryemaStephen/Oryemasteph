// import React from 'react'

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="grid w-full grid-cols-1 py-10 text-center sm:grid-cols-2 md:grid-cols-3">
        <a href="https://www.linkedin.com/in/oryema-stephen-76b891133/" target='_blank'
                    rel='noopener noreferrer' className="flex flex-col items-center justify-center text-gray-400 hover:text-green-300">
            <div className="py-2 text-4xl"><FaLinkedin /></div>
            <div className="text-xl">LinkedIn</div>
        </a>
        <a href="https://x.com/Oryemasteph" target='_blank'
                    rel='noopener noreferrer' className="flex flex-col items-center justify-center my-4 text-gray-400 hover:text-green-300">
            <div className="py-2 text-4xl"><FaTwitter /></div>
            <div className="text-xl">Twitter (X)</div>
        </a>
        <a href="https://github.com/OryemaStephen" target='_blank'
                    rel='noopener noreferrer' className="flex flex-col items-center justify-center text-gray-400 hover:text-green-300">
            <div className="py-2 text-4xl"><FaGithub /></div>
            <div className="text-xl">GitHub</div>
        </a>
    </div>
  )
}

export default Socials