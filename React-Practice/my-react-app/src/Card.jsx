//Card is popular react component.
//That typically contains picture with title and description.

import profilePic from './assets/img3.jpg';

function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={profilePic}alt="profile picture" style={{width: '150px', height: '150px', objectFit: 'cover'}} />
           <h2 className='card-title'>Sri Lakshmi Bathula </h2>
            <p className='card-text'>I'm a CSE student Currently parsuing 2nd year Btech.</p>
        </div>
    );
}

export default Card;