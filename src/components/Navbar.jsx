import React from 'react';
import Search from './Search';
import HomeLinks from './HomeLinks';
import RightLinks from './RightLinks';
function Navbar() {
  return (
    <div className="navbar">
      <style jsx>{`
        .navbar {
          height: 77px;
          padding-top: 40px;
          width: 100%;
          border-bottom: 1px solid lightgray;
          background-color: white;
        }
        .nav{
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3,1fr);
        }
      `}</style>
      <div className='container'>
        <div className='nav'>
          <HomeLinks />
          <Search />
          <RightLinks />
        </div>
      </div>
    </div>
  );
}

export default Navbar;