import Nav from "./Nav"
import './DisplayGrid.css';
import listings from '../db/db.json';
import { Listing } from '../interfaces/listing';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DisplayGrid from "./DisplayGrid";

const TrendBodyDisplay = () => {

    const { label } = useParams();
    const labelName = label !== undefined ? label : ''
    console.log(labelName);
    
    
    const [showImages, setShowImage] = useState<string | undefined>();

    useEffect(() => {
        setShowImage(labelName);
        console.log(showImages);
    });


  return (
    <div>

        <Nav />

        <DisplayGrid showImages={showImages}/>

    </div>
  )
}
export default TrendBodyDisplay
