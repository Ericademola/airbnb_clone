import './Footer.css'
import { MdKeyboardArrowUp, MdDone } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { TiTimes } from 'react-icons/ti';
import { PiDot, PiCopyrightLight } from 'react-icons/pi';


const Footer = () => {
  return (
    <footer className='footer_line'>


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
                <span className='dot drug'>
                    <MdDone className='done'/>
                    <TiTimes className='times'/>
                </span>
                <span className='dot'>
                    <PiDot />
                </span> 
                <span>
                    Destinations
                </span>
                
            </div>
            
            <div className='right_side'>  
                <span className='dot space'>         
                    <TbWorld />
                </span>
                <span className='space'>
                    English (US) 
                </span>
                <span>
                    <span className='space'>
                        $
                    </span> 
                    <span className='space'>
                        USD
                    </span>  
                </span>
                <span className='space'>
                    Support & resources
                </span>
                <span className='dot space'>
                    <MdKeyboardArrowUp />
                </span>
            </div>
        </div>


    </footer>
  )
}
export default Footer