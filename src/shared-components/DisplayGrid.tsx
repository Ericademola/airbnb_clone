import './DisplayGrid.css';
import listings from '../db/db.json';
import { Listing } from '../interfaces/listing';
import { MdOutlineStar } from 'react-icons/md';



const DisplayGrid = () => {

    // const picked = listings.forEach(
    //     function() {
    //         const fullStory = Object.keys(cost);
    //     }
    // )

    // const fullStory = listings.find((story: { id: number; }) =>
    // story.id == "k"
    // );

  return (
    <div >
        <div className='trendGridContainer'>

            {listings.map((list:Listing) => <div key={list.id}>

                <div className='gridItem'>
                    <div className='pictures'>
                        <img src={`images/${list.images.rooms}`} alt={list.name} />
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