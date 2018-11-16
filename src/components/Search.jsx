import React from 'react';

function Search() {
  return(
    <div className='search-container'>
      <style jsx>{`
        .search-container {
          height: 77px;
          margin: 0 auto;
        }
        input{
          text-align: center;
          background-color: #fafafa;
          border-radius: 5px;
        }
      `}</style>
      <div>
        <input type='text' placeholder='Search' className='form-control'/>
      </div>
    </div>
    
  );
}

export default Search;