import GridImages from "./GridImages";
import listings from '../db/db.json';
import './DisplayGrid.css';


const DisplayGrid = ({homeTrendDisplayed, showImages}:any) => {

    const displayedTrend = showImages ?? homeTrendDisplayed;

    console.log(displayedTrend);

    const selected = listings.filter(select => select.trend.includes(displayedTrend));


    return (  

        <section className="lists_display">
            
            <div 
            className='trendGridContainer'>

                {selected && selected.map((list) => <div key={list.id}>

                    <div className='gridItem'>
            
                        <div className='pictures'>

                            <GridImages 
                            pictures={list.images} 
                            trend={displayedTrend} 
                            name={list.name}
                            host={list.host}
                            rating={list.rating}
                            date={list.date}
                            cost={list.cost}/>

                        </div>

                    </div> 

                </div>)}
                
            </div>
            
        </section>

    )
}
export default DisplayGrid;