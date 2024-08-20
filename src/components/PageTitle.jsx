// import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from './SearchField';
import PropTypes from 'prop-types';

const PageTitle = ({ text, onSearchChange, image, showSearch = true }) => {
  return (
    <div className="flex items-center pt-2 justify-between w-full px-4 bg-white pb-2 border border-b-slate-300 h-fit">
      <div className="block w-full md:flex md:items-center md:justify-between lg:w-1/2">
        <div className="font-bold pl-2 md:pl-0 text-2xl uppercase md:hidden">OS</div>
        <div className="font-bold hidden md:block pl-2 md:pl-0 uppercase">{text}</div>
        {showSearch && (
          <SearchField
            placeholder="Search something here .... "
            onSearchChange={onSearchChange}
          />
        )}
      </div>
      <div className="items-center justify-end hidden w-1/2 gap-5 lg:flex">
        <Link to='/about' className='flex gap-1'>
          <img
            src={image}
            className="object-cover object-top w-10 h-10 rounded-full"
          />
          <div className="flex flex-col items-start text-xs">
            <div className="text-sm pb-1 font-bold">Stephen Oryema</div>
            <div>Web Developer </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  showSearch: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
};

export default PageTitle;
