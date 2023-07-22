import { MdOutlineStar } from "react-icons/md";
import { HiMap } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
import GridImages from "./GridImages";
import listings from '../db/db.json';
import './DisplayGrid.css';


const DisplayGrid = ({homeTrendDisplayed, showImages}:any) => {

    const displayedTrend = showImages ?? homeTrendDisplayed;

    console.log(displayedTrend);

    const selected = listings.filter(select => select.trend.includes(displayedTrend));

  return (
    
    <div className="lists_display">
        
        <div className='trendGridContainer'>

            {selected && selected.map((list) => <div key={list.id}>

                <div className='gridItem' >
                    <div className='pictures'>

                        <GridImages pictures={list.images} trend={displayedTrend}/>

                    </div>

                    <div className="location">
                        <span>
                            {list.name}
                        </span> 
                        <span className="rating">
                            <MdOutlineStar className="rating_star"/> {list.rating}
                        </span>
                    </div>

                    <div>
                        <p>Stay with {list.host}</p>
                    </div>

                    <div>
                        <p>{list.date}</p>
                    </div>

                    <div>
                        <u>
                            <b>${list.cost}</b> night
                        </u>
                    </div>

                </div>

            </div>)}
            
        </div>
        
    </div>
  )
}
export default DisplayGrid