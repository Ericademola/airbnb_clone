import company from '../assets/airbnb.png';
import './Header.css'
import { TbWorld } from 'react-icons/tb';
import { CgMenu } from 'react-icons/cg';
import { IoMdContact, IoMdSwitch } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { PiDot } from 'react-icons/pi';


const Header = () => {

  return (
    <header className='top_up'>

        <div className='top'>

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

        </div>

        <div className='media_top_select'>

            <div className='first_section'>
                
                <span className='search'>
                    <BiSearchAlt2 style={{fontSize: "17px", alignSelf: "center", cursor: "pointer"}}/>  
                </span>

                <div>
                    <p>
                        <button>
                            <h5 style={{cursor: "pointer"}}>Anywhere</h5>
                        </button>
                    </p>

                    <p className='select'>
                        <button>
                            <h5 style={{color: "#929292", cursor: "pointer"}}>
                                Any week
                            </h5>
                        </button>
                        <PiDot />
                        <button>
                            <h5 style={{color: "#929292", cursor: "pointer"}}>
                                Add guests
                            </h5>
                        </button>
                    </p>

                </div> 

            </div>

            <div>
                <span className='switch_button'>
                    <IoMdSwitch/>
                </span>
            </div> 

        </div>

    </header>
  )
}
export default Header