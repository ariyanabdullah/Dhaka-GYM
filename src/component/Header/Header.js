import React from 'react';
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header-main'> 
        
            <h1> <span><FontAwesomeIcon icon={faDumbbell} /> </span>  Dhaka Gymnasium</h1>
        </div>
    );
};

export default Header;