import './Nav.css';
import { IoMdSwitch } from 'react-icons/io';
import trends from '../constants/trendIcon';
import { Icon } from '../interfaces/trendIcon';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Nav = () => {

    const showMoreTrend = () => {
        console.log('hi');
        
    }

  return (
    <div>
        
         <nav className='nav'>

            <div className='left_arrow'>
                <span className='button'><MdKeyboardArrowLeft/></span>
            </div>

            <div className='trend_nav'>

                {trends.map((trend:Icon) => <div key={trend.id}>

                    <div className='trend_filters'>
                        <div className='trend_icon'>
                            {trend.icon}
                        </div>    
                        <span className='text'>{trend.label}</span>
                        <div className='horizontal_lineIcon'></div>
                    </div>

                </div>)}
                
                
            </div>

            <div className='right_arrow'>
                <span className='button' onClick={showMoreTrend}><MdKeyboardArrowRight/></span>
                <span className='filter'><IoMdSwitch /> fliter</span>
            </div>

        </nav>

        <div className='horizontal_lineNav'></div>

    </div>
  )
}
export default Nav