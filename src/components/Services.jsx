// import React from 'react'

import { FaCode } from "react-icons/fa"
import { PiPaintBrushBroadFill } from "react-icons/pi"
import { SiGoogleanalytics } from "react-icons/si"

const Services = () => {
  return (
    <div className="w-full pb-5">
        <div className="w-full text-center">
            <h2 className="pb-3 text-3xl font-bold">Services</h2>
            <p className="text-lg">Get the best services at affordable cost.</p>
        </div>
        <div className="grid items-center justify-between w-full grid-cols-1 gap-4 py-5 md:grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-start p-2 text-black bg-slate-400">
                <div className="flex items-center justify-center p-2 text-5xl bg-white rounded-full w-fit">
                    <PiPaintBrushBroadFill />
                </div>
                <h4 className="py-5 text-2xl font-bold">UI/UX Design</h4>
                <p className="text-lg text-center">
                    Top-tier UI/UX design services aimed at 
                    creating user-friendly and aesthetically pleasing interfaces.
                </p>
            </div>
            <div className="flex flex-col items-center justify-start p-2 text-black bg-slate-400">                            
                <div  className="flex items-center justify-center p-2 text-5xl bg-white rounded-full w-fit">
                    <FaCode />
                </div>
                <h4 className="py-5 text-2xl font-bold">Web Development</h4>
                <p className="text-lg text-center">
                    Offers web development services to power 
                    your applications with secure, scalable, and efficient logic.
                    I craft dynamic, interactive, and 
                    responsive websites.
                </p>
            </div>
            <div className="flex flex-col items-center justify-start p-2 text-black bg-slate-400">
                <div  className="flex items-center justify-center p-2 text-5xl bg-white rounded-full w-fit">
                    <SiGoogleanalytics />
                </div>
                <h4 className="py-5 text-2xl font-bold">Analytics</h4>
                <p className="text-lg text-center">
                    Provides comprehensive analytics solutions to 
                    empower you to make data-driven decisions. 
                </p>                
            </div>

        </div>

    </div>
  )
}

export default Services