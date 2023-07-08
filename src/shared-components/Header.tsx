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

        <nav className='nav'>

            <div className='trend_nav'>

                <div className='filters active'>
                    <div className='trend_icon'>
                        <TbBuildingSkyscraper />
                    </div>    
                    <span className='text'>Iconic Cities</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <GiFamilyHouse /> 
                    </div>
                    <span>Mansions</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <MdOutlineBedroomParent />
                    </div>
                    <span>Rooms</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <MdSportsGolf />
                    </div>
                    <span>Golfing</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <TbCamper />
                    </div>
                    <span>Campers</span>
                    <div className='horizontal_lineIcon'></div>    
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <PiCastleTurret />
                    </div>
                    <span>Castles</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <TbBeach />
                    </div>               
                    <span>Beach</span>
                    <div className='horizontal_lineIcon'></div>
                </div> 
                <div className='filters'>
                    <div className='trend_icon'>
                        <MdCabin />
                    </div>   
                    <span>Cabins</span>
                    <div className='horizontal_lineIcon'></div>
                </div>         
                <div className='filters'>
                    <div className='trend_icon'>
                        <TbChefHat />
                    </div>                
                    <span>Chef's kitchens</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <AiOutlineCoffee />
                    </div>               
                    <span>Bed & breakfasts</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <TbSailboat />
                    </div>              
                    <span>Boats</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <MdOutlineMapsHomeWork />
                    </div>               
                    <span>Design</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <GiWindmill />
                    </div>
                    <span>Windmills</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <PiFire />
                    </div>
                    <span>Trending</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <PiSwimmingPool />
                    </div>
                    <span>Amazing pools</span>
                    <div className='horizontal_lineIcon'></div>
                </div>
                <div className='filters'>
                    <div className='trend_icon'>
                        <GiCornerFlag />
                    </div>
                    <span>Top of the world</span>
                    <div className='horizontal_lineIcon'></div>
            
                </div>
            </div>
        </nav>

        <div className='horizontal_lineNav'></div>

    </div>
  )
}
export default Header