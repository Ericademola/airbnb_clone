import { MdOutlineStar } from "react-icons/md"
import GridImages from "./GridImages";
import listings from '../db/db.json';
import './DisplayGrid.css';


const DisplayGrid = ({homeTrendDisplayed, showImages}:any) => {

    const displayedTrend = showImages ?? homeTrendDisplayed;

    console.log(displayedTrend);

    const selected = listings.filter(select => select.trend.includes(displayedTrend));

  return (
    <div>
        
        <div className='trendGridContainer'>

            {selected && selected.map((list) => <div key={list.id}>

                <div className='gridItem' >
                    <div className='pictures'>

                        <GridImages pictures={list.images} trend={displayedTrend}/>

                    </div>

                    <div style={{justifyContent: "space-between", display: "flex"}}>
                        <span>{list.name}</span> <span><MdOutlineStar /> {list.rating}</span>
                    </div>

                    <div><small>stay with {list.host}</small></div>
                    <div><small>{list.date}</small></div>
                    <div><small>${list.cost} night</small></div>

                </div>

            </div>)}

        </div>

    </div>
  )
}
export default DisplayGrid