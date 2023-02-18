

import {  FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return(
        <>
         {/*************** footer section start here ******************/}

         <section className='footer_main'>
         <div className='container'>
             <div className='footer_title'>
                 <div className='footer_logo'>
                     <h4>Prashant Kumar</h4>
                 </div>
                 <div className='footer_text'>
                     <p>Kilaboris nisi ut aliquip ex ea commodo consequat uis aute cupidatat non proident sunt in culd est laborum.</p>
                 </div>
                 <div className='footer_social_icon'>
                     <ul>
                         <li><FaFacebookF /></li>
                         <li><FaTwitter /></li>
                         <li><FaLinkedinIn /></li>
                         <li><FaYoutube /></li>
                         <li><FaInstagram /></li>
                       
                     </ul>
                 </div>
             </div>

             <div className='footer_bar'>
                 <div className='alright_reserved'>
                     <p>All rights reserved © 2022 </p>
                 </div>
                 <div className='term_condition'>
                     <ul>
                         <li><p>Terms & Condition</p></li>
                         <li><p>Privacy Policy</p></li>
                     </ul>
                 </div>
             </div>
         </div>
     </section>

     {/*************** footer section end here ******************/}
     </>
    )
}

export default Footer;