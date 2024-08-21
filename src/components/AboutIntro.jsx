// import React from 'react'

import Socials from "./Socials"

const AboutIntro = () => {
  return (
    <div className="w-full p-5">
        <h2 className="mb-4 text-2xl font-bold">About Me</h2>
        <p className="text-lg text-justify">
            My name is Stephen Oryema, a frontend developer 
            with a bit of backend knowledge and skills. 
            I like building and maintaining responsive websites.
            I convert figma designs into code with ease and love.
            I strive to making the web more beautiful, one pixel at a time.
            Did I tell you that I am a geologist too? Well I am! It is love for tech that made me join tech.
            I joined Tunga Tech Impact Academy fullstack track learning HTML, CSS, JavaScript and MySQL and 
            frameworks, ReactJS, NodeJS, ExpressJS, TailwindCSS and Bootstrap.
        </p>
        <div className="hidden md:block">
            <Socials />
        </div>
    </div>
  )
}

export default AboutIntro