import './Footer.css'
import { MdKeyboardArrowUp, MdDone } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { TiTimes } from 'react-icons/ti';
import { PiDot, PiCopyrightLight } from 'react-icons/pi';





const Footer = () => {
  return (
    <div className='footer_line'>

        <div className='horizontal_line'></div>

        <div className='footer'>

            <div className='left_side'>
                <span className='dot'>
                    <PiCopyrightLight />
                </span> 
                <span>
                    2023 Airbnb, Inc.
                </span> 
                <span className='dot'>
                    <PiDot /> 
                </span> 
                <a href="">
                    Terms
                </a> 
                <span className='dot'>
                    <PiDot />
                </span> 
                <a href="">
                    Sitemap
                </a>                
                <span className='dot'>
                    <PiDot />    
                </span> 
                PrivacyYour Privacy 
                <span className='dot'>
                    <PiDot />
                </span>
                <a href="">
                    Choices
                </a> 
                <span className='dot'>
                    <MdDone />
                    <TiTimes />
                </span>
                <span className='dot'>
                    <PiDot />
                </span> 
                <button>
                    Destinations
                </button>
                
            </div>
            
            <div className='right_side'>  
                <span className='dot'>         
                    <TbWorld />
                </span>
                <button>
                    English (US) 
                </button>
                <button>
                    <span>$</span> 
                    <span>USD</span>  
                </button>
                <span>
                    Support & resources
                </span>
                <span className='dot'>
                    <MdKeyboardArrowUp />
                </span>
            </div>
        </div>


    </div>
  )
}
export default Footer