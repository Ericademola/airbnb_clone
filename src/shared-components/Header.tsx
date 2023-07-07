import company from '../assets/airbnb.png';
import './Header.css'
import { TbWorld, TbBuildingSkyscraper } from 'react-icons/tb';
import { GiCornerFlag, GiWindmill, GiFamilyHouse } from 'react-icons/gi';
import { PiSwimmingPool, PiFire,PiCastleTurret } from 'react-icons/pi';
import { MdOutlineMapsHomeWork, MdCabin, MdSportsGolf, MdOutlineBedroomParent } from 'react-icons/md';
import { TbSailboat, TbChefHat, TbBeach, TbCamper } from 'react-icons/tb';
import { AiOutlineCoffee } from 'react-icons/ai';
import { CgMenu } from 'react-icons/cg';
import { IoMdContact } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import {  } from 'react-icons/hi';




const Header = () => {
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

        <nav className='trend_nav'>

            <div className='filters'>
                <TbBuildingSkyscraper />
                <span>Iconic Cities</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <GiFamilyHouse />
                <span>Mansions</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <MdOutlineBedroomParent />
                <span>Rooms</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <MdSportsGolf />
                <span>Golfing</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <TbCamper />
                <span>Campers</span>
                <div className='horizontal_line'></div>    
            </div>
            <div className='filters'>
                <PiCastleTurret />
                <span>Castles</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <TbBeach />
                <span>Beach</span>
                <div className='horizontal_line'></div>
            </div> 
            <div className='filters'>
                <MdCabin />
                <span>Cabins</span>
                <div className='horizontal_line'></div>
            </div>         
            <div className='filters'>
                <TbChefHat />
                <span>Chef's kitchens</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <AiOutlineCoffee />
                <span>Bed & breakfasts</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <TbSailboat />
                <span>Boats</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <MdOutlineMapsHomeWork style={{color: "green"}}/>
                <span>Design</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <GiWindmill />
                <span>Windmills</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <PiFire />
                <span>Trending</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <PiSwimmingPool />
                <span>Amazing pools</span>
                <div className='horizontal_line'></div>
            </div>
            <div className='filters'>
                <GiCornerFlag />
                <span>Top of the world</span>
                <div className='horizontal_line'></div>
            </div>

        </nav>

    </div>
  )
}
export default Header