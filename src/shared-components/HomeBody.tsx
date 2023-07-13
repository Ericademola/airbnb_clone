import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineStar } from "react-icons/md"
import Nav from "./Nav";
import PriceToggle from "./PriceToggle";
import { Listing } from "../interfaces/listing";
import listings from '../db/db.json';
import { useState } from "react";
import './DisplayGrid.css';
import './HomeBody.css';



const HomeBody = () => {

    // const { label } = useParams();
    // const labelName = label !== undefined ? label : ''
    // console.log(labelName);
    
    
    // const [showImages, setShowImage] = useState<string>('Rooms');

    // useEffect(() => {
    //     setShowImage(labelName);
    //     console.log(showImages);
    // });

    const selected: Listing[] = listings.filter(select => select.trend.includes("Rooms"));

    //individual pic sellector

    const [showArror, setShowArror] = useState<boolean>(false);

    const displayArror = () => {
        if (showArror === false) {
            setShowArror(true);
        } else {setShowArror(false)}
    }

    const [seePics, setSeePics] = useState();

    const showNextPic = (images:{}) => {
        const pics = Object.values(images);
        
        console.log(pics);
    };

    const showPevPic = () => {};

  return (
    <div className="main_body">

        <Nav />

        <PriceToggle />

        <div className='trendGridContainer'>

            {selected && selected.map((list:Listing) => <div key={list.id}>

                <div className='gridItem' onMouseEnter={displayArror} onMouseLeave={displayArror}>
                    <div className='pictures'>

                        <div className='left_pic'>
                            <span className='button' onClick={showPevPic}><MdKeyboardArrowLeft/></span>
                        </div>

                        {/* <GridImages {{list}}/> */}
                        <img src={`images/${list.images.Rooms}`} alt={list.name} />
                        
                        {showArror && 
                            <div className='right_pic'>
                                <span className='button' onClick={(e) => showNextPic(list.images)}><MdKeyboardArrowRight/></span>
                            </div>
                        }

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
export default HomeBody;
