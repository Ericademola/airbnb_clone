import company from '../assets/airbnb.png';
import './Header.css'
import { TbWorld } from 'react-icons/tb';
import { GiCornerFlag, GiWindmill } from 'react-icons/gi';
import { PiSwimmingPool, PiFire,PiCastleTurret } from 'react-icons/pi';
import { MdOutlineMapsHomeWork, MdCabin } from 'react-icons/md';
import { TbSailboat, TbChefHat, TbBeach } from 'react-icons/tb';
import { AiOutlineCoffee } from 'react-icons/ai';
import { CgMenu } from 'react-icons/cg';
import { IoMdContact } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';



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

        <nav>
            <PiCastleTurret />
            <TbBeach />
            <MdCabin />
            <TbChefHat />
            <AiOutlineCoffee />
            <TbSailboat />
            <MdOutlineMapsHomeWork style={{color: "green"}}/>
            <GiWindmill />
            <PiFire />
            <PiSwimmingPool />
            <GiCornerFlag />
        </nav>

    </div>
  )
}
export default Header