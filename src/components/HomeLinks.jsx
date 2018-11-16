import React from 'react';

function HomeLinks() {

  return (
    <div className='home-links'>
      <style jsx>{`
        .home-links {
          height: 77px;
          float: left;
          border: 0px solid black;
        }
        .link-container {
          height: 100%;
        }
        i {
          display: inline-block;
          font-size: 26px;
        }
        .vertical-bar {
          display: inline-block;
          border-left: 1px solid black;
          height: 28px;
          position: relative;
          transform: translate(0px, 5px);
          margin: 0px 20px;
        }
        h4 {
          display: inline-block;
        }
        
      `}</style>
      <div className="link-container">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <div className="vertical-bar"></div>
        <h4>instagram</h4>
      </div>
    </div>
  );
}

export default HomeLinks;