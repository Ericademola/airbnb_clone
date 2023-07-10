import company from '../assets/airbnb.png';
import './Header.css'
import { TbWorld } from 'react-icons/tb';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CgMenu } from 'react-icons/cg';
import { IoMdContact, IoMdSwitch } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import trends from '../constants/trendIcon';
import { Icon } from '../interfaces/trendIcon';


const Header = () => {
    
    const button = {
        padding: "2px 5px",
        borderRadius: "66px",
        border: "1px solid #ddd",
        fontSize: "20px",
        cursor: "pointer",
    }

    const filter = {
        marginLeft: "23px",
        marginRight: "40px",
        padding: "13px 18px",
        border: "1px solid #ddd",
        borderRadius: "15px",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        fontSize: "16px",
        cursor: "pointer",
    }

  return (
    <div>

        <header className='top'>

            <div className='logo_section'>
                <a href="">
                    <img src={company} alt="logo-and-name" />
                </a>
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

        </header>

        <div className='horizontal_line'></div>

        <nav className='nav'>

            <div className='left_arrow'>
                <span style={button}><MdKeyboardArrowLeft/></span>
            </div>

            <div className='trend_nav'>

                {trends.map((trend:Icon) => <div key={trend.id}>

                    <div className='filters'>
                        <div className='trend_icon'>
                            {trend.icon}
                        </div>    
                        <span className='text'>{trend.label}</span>
                        <div className='horizontal_lineIcon'></div>
                    </div>

                </div>)}
                
                
            </div>

            <div className='right_arrow'>
                <span style={button}><MdKeyboardArrowRight/></span>
                <span style={filter}><IoMdSwitch /> fliter</span>
            </div>

        </nav>

        <div className='horizontal_lineNav'></div>

    </div>
  )
}
export default Header