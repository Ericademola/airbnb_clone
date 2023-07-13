import './Nav.css';
import { IoMdSwitch } from 'react-icons/io';
import trends from '../constants/trendIcon';
import { Icon } from '../interfaces/trendIcon';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BiSlider } from 'react-icons/bi';


const Nav = () => {

    const [leftArrow, setLeftArrow] = useState<boolean>(false);
    const [OtherTrends, setOtherTrends] = useState<Icon[] | undefined>(trends.slice(0, 14));
    const [checkMoveNext, setCheckMoveNext] = useState<boolean>(false);
    const [checkMovePrev, setCheckMovePrev] = useState<boolean>(false);


    const random = Math.random() * 10;

    const nextTrend = () => {

        if (random > 7) {
            setOtherTrends(trends.slice(-15, -1))
        } else {setOtherTrends(trends.slice(random))}
        setLeftArrow(true);

        setCheckMoveNext(prevState => {
            return !prevState
        })

    }


    const prevTrend = () => {
        if (random > 7) {
            setOtherTrends(trends.slice(0, 15))
        } else {setOtherTrends(trends.slice(random))}

        setCheckMovePrev(prevState => {
            return !prevState
        })
    }

    return (
        <div className='nav_top'>
            
            <nav className='nav'>

                { leftArrow &&
                    <div className='left_arrow'>
                        <span className='button' onClick={prevTrend}><MdKeyboardArrowLeft/></span>
                    </div>
                }

                <div onAnimationEnd={prevTrend}
                className={checkMoveNext ? ('backward' || 'forward'): 'trend_nav'} id='slider'>

                    {(OtherTrends ?? trends).map((trend:Icon) => <div key={trend.id}>

                        <Link to={`/Trendings/${trend.label}`} state={`${trend.label}`}>

                            <div className='trend_filters'>
                                <div className='trend_icon'>
                                    {trend.icon}
                                </div>    
                                <span className='text'>{trend.label}</span>
                                <div className='horizontal_lineIcon'></div>
                            </div>

                        </Link>

                    </div>)}
           
                    
                </div>

                <div className='right_arrow'>
                    <span className='button' onClick={nextTrend}><MdKeyboardArrowRight/></span>
                    <span className='filter'><IoMdSwitch /> fliter</span>
                </div>

            </nav>

            <div className='horizontal_lineNav'></div>

        </div>
    )
}
export default Nav