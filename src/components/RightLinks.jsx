import React from 'react';

function RightLinks() {
  return (
    <div className='right-container'>
      <style jsx>{`
      .right-container {
        height: 77px;
        border: 0px solid black;
        width: 100%;
      }
      i {
        font-size: 26px;
        display: inline-block;
        margin: 0px 10px;
      }
      .icon-container {
        float: right;
      }
      `}
      </style>
      <div className='icon-container'>
        <i className="fa fa-compass" aria-hidden="true"></i>
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    </div>

  );
}

export default RightLinks;