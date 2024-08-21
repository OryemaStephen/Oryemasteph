// src/contexts/ProjectContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import { portfolio, barbershop, jobboard, myshop, rentcar, restuarant, stephdb, agrolim, plutohr } from '../assets/projectImages';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects] = useState([
    {
      id: 1,
      src: portfolio,
      live: 'https://oryemasteve.netlify.app/',
      github: 'https://github.com/OryemaStephen/Oryemasteph',
      title: "Personal Portfolio",
      paragraph: "A professional personal portfolio showcasing my skills, projects, and experience as a fullstack web developer. Built with React and styled with Tailwind CSS, it features a responsive design and modern UI.",
      skills: ['React', 'Tailwind CSS']
    },
    { 
      id: 2, 
      src: barbershop, 
      live: 'https://the-gentleman-barbershop.netlify.app/', 
      github: 'https://github.com/OryemaStephen/the-gentleman-barbershop', 
      title: "Barbershop", 
      paragraph: "Gentleman's barbershop, offering fresh and clean haircuts with a modern touch.",
      skills: ['React', 'Tailwind CSS']
    },
    { 
      id: 3, 
      src: jobboard, 
      live: 'https://jobboard256.netlify.app/', 
      github: 'https://github.com/OryemaStephen/job-board', 
      title: "Job Board", 
      paragraph: "An innovative job board platform that connects job seekers with opportunities",
      skills: ['React', 'Tailwind CSS', 'API Integration']
    },
    { 
      id: 4, 
      src: myshop, 
      live: 'https://myshop256.netlify.app/', 
      github: 'https://github.com/OryemaStephen/shopping-cart', 
      title: "ECommerce Shop", 
      paragraph: "A dynamic and user-friendly e-commerce platform that brings the best online shopping experience with a wide range of products.",
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 5, 
      src: rentcar, 
      live: 'https://rentcars256.netlify.app/', 
      github: 'https://github.com/OryemaStephen/car-rental-landing-page', 
      title: "Rent Cars", 
      paragraph: "A seamless car rental service platform that offers users the ability to rent cars.",
      skills: ['React', 'React Bootstrap', 'Bootstrap']
    },
    { 
      id: 6, 
      src: restuarant, 
      live: 'https://eatup256.netlify.app/', 
      github: 'https://github.com/OryemaStephen/Restaurant-website', 
      title: "Restaurant App", 
      paragraph: "A feature-rich restaurant application that allows users to browse menus, place orders, and make reservations.",
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 7, 
      src: stephdb, 
      live: 'https://oryemasteve.netlify.app/', 
      github: 'https://github.com/OryemaStephen/personal-movie-database', 
      title: "Personal Movie Database", 
      paragraph: "A personalized movie database that allows users to add, search, and keep track of their favorite movies.",
      skills: ['HTML', 'JavaScript', 'CSS', 'NodeJs', 'ExpressJs', 'Axios', 'Responsive Design', 'MySQL']
    },
    { 
      id: 8, 
      src: plutohr, 
      live: 'https://oryemasteve.netlify.app/', 
      github: 'https://github.com/OryemaStephen/PlutoHR', 
      title: "PlutoHR", 
      paragraph: "An HR management system designed to streamline employee management, payroll, and other essential HR functions.",
      skills: ['React', 'CSS', 'Django',  'SqLite']
    },
    { 
      id: 9, 
      src: agrolim, 
      live: 'https://agrolimgroceriesug.netlify.app/', 
      github: 'https://github.com/OryemaStephen/', 
      title: "Agrolim Groceries", 
      paragraph: "An online platform that connects users with fresh groceries and agricultural products, making shopping for essentials convenient and sustainable.",
      skills: ['HTML', 'JavaScript', 'CSS']
    }
  ]);

  const [skills] = useState([
    'ReactJS', 'TailwindCSS', 'Bootstrap', 'JavaScript', 'CSS', 'HTML5', 'NodeJS', 'ExpressJS', 'MySQL'
  ]);

  return (
    <ProjectContext.Provider value={{projects, skills}}>
      {children}
    </ProjectContext.Provider>
  );
};

// Add propTypes validation
ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useProjects = () => useContext(ProjectContext);
