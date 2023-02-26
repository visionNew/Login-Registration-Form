/* eslint-disable jsx-a11y/anchor-is-valid */
import './login.css'; // CSS FILE FOR COMPONENT
import { useState } from 'react'; // REACT HOOKS
import { BsFillPersonFill } from 'react-icons/bs'; // IMPORT ICON FILE
import { FaRegWindowClose, FaFacebook, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa'; // IMPORT ICON FILE

const Login = () => {
// START FUNCTION FOR POPUP
const [ isOpen, setIsOpen ] = useState(false);
const togglePopup = () => setIsOpen(!isOpen); 
const closePopup =() => setIsOpen(false); 
// END FUNCTION FOR POPUP

const [isFlipped, setIsFlipped] = useState(false);

const handleClick = () => {
  setIsFlipped(!isFlipped);
};

  return (
    <div className="popup">
        <div onClick={togglePopup} className="btn login_btn">Login <BsFillPersonFill /> </div>
      
         {    isOpen &&
                <div className={isFlipped ? "form__box flipped jello-horizontal" : "form__box jello-horizontal"}>
                    <div className="flip__inner">
                      <div className="front__box">
                          <div className="front__btn">
                            <div onClick={handleClick} className="flip__btn btn">Sign in with</div>
                            <div onClick={closePopup} className="close__btn btn"><FaRegWindowClose className='close__icon' /></div>
                          </div>
                          <h2> Sign Up</h2>
                          <form>
                            <input type="text" name="username" placeholder="Username"/>
                            <input type="email" name="email" placeholder="Email"/>
                            <input type="password" name="password" placeholder="Password"/>
                            <input type="password" name="password2" placeholder="Retype password"/>
                            <div className="checkbox">
                              <input type="checkbox" name="policy" value="1" />
                              <label className="check__text"><span>AGREED WITH <a href="#">GENERAL CONDITIONS</a></span><span>AND <a href="#">CONFIDENTIALITY POLICY</a></span></label>
                            </div>
                          </form>
                          <button type="submit" className='btn btn__submit'>Sign Up</button>  
                      </div>
                      <div className="back__box">
                        <div className="front__btn">
                          <div onClick={handleClick} className="flip__btn btn">Sign up</div>
                          <div onClick={closePopup} className="close__btn btn"><FaRegWindowClose className='close__icon' /></div>
                        </div>
                        <h2>Sign in with <br/> Social Network</h2>
                          
                        <div className="social_btn">
                          <button><FaFacebook className='btn icon__f'/><span className="btn">Log in with Facebook</span></button>    
                          <button><FaTwitter className='btn icon__t'/><span className="btn">Log in with Twitter</span></button> 
                          <button><FaGoogle className='btn icon__g'/><span className="btn">Log in with Google</span></button>
                          <button><FaLinkedinIn className='btn icon__l'/><span className="btn">Log in with LinkedinIn</span></button>
                        </div>
                      </div>
                    </div>
                </div>
        }
    </div>
  )
}

export default Login