import company from '../assets/airbnb.png';
import './Header.css'
import { TbWorld } from 'react-icons/tb';
import { CgMenu } from 'react-icons/cg';
import { IoMdContact } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <div className='top_up'>

        <header className='top'>

            <div className='logo_section'>
                <Link to='/'>
                    <a href="">
                        <img src={company} alt="logo-and-name" />
                    </a>
                </Link>
            </div>

            <div className='header_select'>
                <button>
                    <h4>Anywhere</h4>
                </button>
                <div className='vertical_line'></div>
                <button>
                    <h4>Any week</h4>
                </button>
                <div className='vertical_line'></div>
                <button>
                    <h4 style={{color: "#929292"}}>Add guests</h4>
                </button>
                <span className='search'>
                    <BiSearchAlt2 style={{color: "#fff", fontSize: "17px", alignSelf: "center"}}/>  
                </span>
            </div>

            <div className='top_right'>
                <a href="#" className='airbnb_home'>Airbnb your home</a>
                <a href="#" className='airbnb_world'>
                    <TbWorld />
                </a>
                <button className='profile_button'>
                    <CgMenu style={{color: "#595959", fontSize: "18px", padding: "0 6px 0 10px"}}/>
                    <IoMdContact style={{color: "#717171", fontSize: "35px", padding: "0 3px"}}/>
                </button>
            </div>

            <div className='horizontal_line'></div>

        </header>

    </div>
  )
}
export default Header