import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from '../../../images/tech.png'
import logo2 from '../../../images/sport.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            {/* <img src={logo2} alt='' /> */}
            <p>Your go-to platform for the latest news across Technology, Business, Sports, Health, and Entertainment.</p>
            <i className='fa fa-envelope'></i>
            <span> <a href="amk0966@gmail.com">amk0966@gmail.com</a> </span> <br />
            <i className='fa fa-headphones'></i>
            <span>Phone No: +251966007795</span>
            <span>Follow our social media</span>
          
          <div className="social-links">
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-youtube"></a>
            <a href="#" className="fa fa-instagram"></a>
          </div>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <figure>
                <a href="https://www.fifa.com/en">
                <img src={logo2} alt='sport' />
                </a>
                <figcaption>Google To Boost Android Security In Few Days</figcaption>
              </figure>
              
            </div>
          </div>
          <div className='box'>
            <h3>TECH</h3>
            <div className='item'>
              <figcaption>
                <a href="https://www.reuters.com/technology/">
                <img src={logo} alt='' />
                </a>
                <figcaption>Renewable energy dead as industry waits for Policy</figcaption>
              </figcaption>
            </div>
          </div>
          <div className='box'>
            <h3>CATEGORIES</h3>
            <ul>
              <li><Link to='/' >Home</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to='/entertainment'>Entertainment</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with Alx<i className='fa fa-heart'></i> by amkmahi
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
