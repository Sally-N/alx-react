import React, { useContext } from "react";
import { getFooterCopy, getFullYear } from '../utils/utils'
import './Footer.css';
import { UserContext } from "../App/AppContext";



function Footer() {
  const { user } = useContext(UserContext);
  return (
    <div className='App-footer'>
      {
        user.isLoggedIn && <p><a href="#">Contact Us</a></p>
      }
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>

  )
}

export default Footer;
