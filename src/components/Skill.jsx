// import React from 'react';
import { useProjects } from '../contexts/ProjectContext';

const Skill = () => {
  const { skills } = useProjects(); 

  return (
    <div className='w-full pb-4'>
        <div className="w-full text-center">
            <h2 className="pb-3 text-3xl font-bold">Skills</h2>
            <p className='text-lg'>Imagine getting all these for the same cost? Yes</p>
        </div>
        <div className='grid w-full grid-cols-3 gap-2 py-4'>
            {skills.map((skill, index) => (
                <div key={index} className='flex items-center justify-center px-3 py-1 text-black rounded-lg bg-slate-400'>
                    <span className='text-lg'>{skill}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Skill;
