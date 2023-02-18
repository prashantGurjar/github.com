import heroimg from '../assets/images/hero_main_image.jpeg';
import textimgone from '../assets/images/hero-element-1.png';
import textimgtwo from '../assets/images/hero-element-5.png';
import textimgthree from '../assets/images/hero-element-4.png';
import Header from '../partials/Header';
import {  FaFacebookF } from 'react-icons/fa';
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCursorFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import Footer from '../partials/Footer';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





const Home = () => {
    return(
        <>
        <Header />
        <section className='hero_main'>
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_text">
                        <h2>Hello, I'm</h2>
                        <h3>Prashant <span>Kumar</span></h3>
                        <h4>A passionate <span>Frontend Developer</span> from <span>Mohali !</span></h4>
                        <div className='hero_social_wrapper'>
                            <a href="#">Contact Me</a>
                            <div className='social_icons'>
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaLinkedinIn /></li>
                                    <li><FaYoutube /></li>
                                    <li><FaInstagram /></li>
                                </ul>
                                
                          
                            </div>
                        </div>
                        <div className='animate_img'>
                            <img className='img_one' src={textimgone} />
                            <img className='img_two' src={textimgtwo} />
                            <img className='img_three' src={textimgthree} />
                        </div>
                    </div>
                    <div className="hero_image">
                        <img src={heroimg} />
                        <span></span>
                    </div>
                </div>
            </div>
        </section>

         {/************ about me section start here ******************/}

        <section className='about_main'>
            <div className='container'>
                <div className='about_wrapper'>
                    <div className='about_img'>
                        <div className='about_img_bg'>
                        <h4>1</h4>
                        <h5>Year of Experience</h5>
                        <h6>Prashant Kumar</h6>
                        </div>
                    </div>
                    <div className='about_text'>
                        <h2>My Intro</h2>
                        <h3>About Me</h3>
                        <p>With 10 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                        <div className='personal_info'>
                            
                            <table>
                                <tr>
                                    <th>Name:</th>
                                    <td>Prashant Kumar</td>
                                </tr>
                                <tr>
                                    <th>Date of Birth:</th>
                                    <td>20-May-2022</td>
                                </tr>
                                <tr>
                                    <th>Address:</th>
                                    <td>Sector 114 Mohali</td>
                                </tr>
                                <tr>
                                    <th>Zip code:</th>
                                    <td>140306</td>
                                </tr>

                                <tr>
                                    <th>Email:</th>
                                    <td>prashantsourav78@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone:</th>
                                    <td>7895092459</td>
                                </tr>
                            </table>
                        </div>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>

        {/************ about me section end here ******************/}

        {/************* my expert area section start here ***************/}

        <section className='my_expert_main'>
            <div className='container'>
                <div className='my_expert_wrapper'>
                    <div className='my_expert_text'>
                        <h3>Skills</h3>
                        <h2>My expert areas</h2>
                        <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.</p>
                        
                        <p>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>

                        <a href="#">My Resume</a>
                    </div>
                    <div className='my_expert_skills'>
                        
                        <div className='my_skills_info'>
                            <ul>
                                <li><a href="#">Html</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Tailwind</a></li>
                                <li><a href="#">Sass</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">javscript</a></li>
                                <li><a href="#">Emails</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/************* my expert area section end here ***************/}

        {/************ contact us section start here ****************/}

        <section className='contact_us_main'>
            <div className='container'>
                <div className='contact_us_title'>
                    <h3>Get In <span>Touch</span></h3>
                    <p>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est.</p>
                </div>
                <div className='contact_us_wrapper'>
                    <div className='contact_us_address'>
                        <ul>
                            <li><BsFillGeoAltFill /> <p><span>Address:</span>
                            198 West 21th Street, Suite 721 New York NY 10016</p></li>

                            <li><BsFillTelephoneFill /> <p><span>Phone:</span>
                            7895092459</p></li>
                            

                            <li><BsCursorFill /> <p><span>Email:</span>
                            prashantsourav78@gmail.com</p></li>

                            <li><FaGlobeAmericas /> <p><span>Website:</span>
                            www.yoursite.com</p></li>
    
                        </ul>
                    </div>
                    <div className='contact_us_form'>
                        <form>
                            <div className='username'>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className='subject'>
                            <input type="text" placeholder="subject" />
                            </div>
                            <div className='textbody'>
                            <textarea type="text" placeholder="Your Message"></textarea>
                            </div>
                            <a href="#">Send Message</a>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>

        {/************ contact us section end here ****************/}


       <Footer />

        </>

    )
}
export default Home;