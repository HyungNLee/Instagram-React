import React from 'react';

function Card(props) {
  return (
    <div>
      <style jsx>{`
      .card{
        width: 90%;
        margin: 20px auto;
        border-radius: 4px;
      }
      .small-profile-picture {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-block;
      }
      .card-header, .card-body, .card-footer {
        background-color: white;
      }
      .card-header h5 {
        display: inline-block;
      }
      .card-body {
        padding: 0;
      }
      i{
        margin: 5px;
        font-size: 26px;
        display: inline-block;
      }
      input{
        border: none;
        width: 100%;
      }
      .icon-container{

      }
    `}
      </style>
      <div className="card">
        <div className="card-header">
          <img className='small-profile-picture' src="http://lihatsinopsis.com/wp-content/uploads/2018/07/compromise-new-cartoon-characters-outstanding-chartoon-character-50-of-the-most.jpg" />&nbsp;
          <h5>{props.name}</h5>
        </div>
        <div className="card-body">
          <img className='card-img' src='https://hdbackgroundspot.com//storage/upload/photography-background/photography-background-14.jpg' />
          <div className='icon-container'>
            <i className="fa fa-heart-o" aria-hidden="true"></i>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <i className="fa fa-upload" aria-hidden="true"></i>
          </div>
          <div className="card-footer">
          <input type='text' placeholder='Add a comment...'/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;