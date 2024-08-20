// src/contexts/ProjectContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { barbershop, jobboard, myshop, rentcar, restuarant, stephdb, agrolim, plutohr } from '../assets/projectImages';


const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects] = useState([
    { id: 1, src: barbershop, live: 'https://the-gentleman-barbershop.netlify.app/', github: 'https://github.com/OryemaStephen/the-gentleman-barbershop', title: "Barbershop", paragraph: "Gentleman's barbershop, offering fresh and clean haircuts with a modern touch." },
    { id: 2, src: jobboard, live: 'https://jobboard256.netlify.app/', github: 'https://github.com/OryemaStephen/job-board', title: "Job Board", paragraph: "An innovative job board platform that connects job seekers with opportunities" },
    { id: 3, src: myshop, live: 'https://myshop256.netlify.app/', github: 'https://github.com/OryemaStephen/shopping-cart', title: "ECommerce Shop", paragraph: "A dynamic and user-friendly e-commerce platform that brings the best online shopping experience with a wide range of products." },
    { id: 4, src: rentcar, live: 'https://rentcars256.netlify.app/', github: 'https://github.com/OryemaStephen/car-rental-landing-page', title: "Rent Cars", paragraph: "A seamless car rental service platform that offers users the ability to rent cars." },
    { id: 5, src: restuarant, live: 'https://eatup256.netlify.app/', github: 'https://github.com/OryemaStephen/Restaurant-website', title: "Restuarant App", paragraph: "A feature-rich restaurant application that allows users to browse menus, place orders, and make reservations." },
    { id: 6, src: stephdb, live: 'https://oryemasteve.netlify.app/', github: 'https://github.com/OryemaStephen/personal-movie-database', title: "Personal Movie Database", paragraph: "A personalized movie database that allows users to add, search, and keep track of their favorite movies." },
    { id: 7, src: plutohr, live: 'https://oryemasteve.netlify.app/', github: 'https://github.com/OryemaStephen/PlutoHR', title: "PlutoHR", paragraph: "An HR management system designed to streamline employee management, payroll, and other essential HR functions." },
    { id: 8, src: agrolim, live: 'https://agrolimgroceriesug.netlify.app/', github: 'https://github.com/OryemaStephen/', title: "Agrolim Groceries", paragraph: "An online platform that connects users with fresh groceries and agricultural products, making shopping for essentials convenient and sustainable." }
  ]);

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

// Add propTypes validation
ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useProjects = () => useContext(ProjectContext);
