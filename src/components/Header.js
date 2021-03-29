import { Link } from 'react-router-dom'
import Wlogo from '../images/wayfarer-logo.png';

const Header = () => {
  return (
    <header>
        <div className="header">
            <div className="wayfare-logo">
              <Link to="/"><img src={Wlogo} alt="" id="wayfarer-logo"/></Link>
            </div>
            <div className="nav">
              <Link to="/"><li className="home">Home</li></Link>
              <li className="divider"></li>
              <Link to="/cities"><li className="view-cities">View Cities</li></Link>
              <li className="divider"></li>
              <Link to="/cities"><li className="log-in">Sign In</li></Link>
              <li className="divider"></li>
              <Link to="/cities"><li className="log-out">Sign Out</li></Link>
            </div>
        </div>
    </header>
  )
}

export default Header;