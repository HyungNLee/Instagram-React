import React from 'react';
import Card from './Card';

const nameArray = [
  'Ryan',
  'Meria',
  'Skye',
  'Panatda',
  'Cathy'
]

function MainBody() {
  return (
    
    <div className='container'>
      <style jsx>{`
        .main-body {
          width: 100%;
          background-color: #fafafa;
        }
        .left-body {
          width: 60%;
        }
        .right-body {
          width: 35%;
          float: right;
          border: 1px solid black;
        }
      `}</style>
      <div className='main-body'>
        <div className='left-body'>
          {nameArray.map((name, index) => 
            <Card name={name}
            key={index} />
            )}
        </div>
        <div className='right-body'>

        </div>
      </div>
    </div>

  );
}

export default MainBody;