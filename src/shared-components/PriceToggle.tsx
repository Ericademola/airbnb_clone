import {  MdDone } from 'react-icons/md';
import './PriceToggle.css';
import { useState } from 'react';


const PriceToggle = () => {

  const [showMark, setShowMark] = useState<boolean>(false);

  const toggleOn = () => {

    setShowMark(!showMark)

    document.querySelector(".toggleBoxToggle")?.classList.toggle('toggleBoxChange');

  }


  return (
      
    <div className='toggleBox'>

      <div className='toggleBoxContent'>
        
        <div className='toggleBoxText'>
          <p>
            Display total price
          </p>

          <div style={
            {height: "25px", 
            width: "1.2px", 
            backgroundColor: "#dddddd",
            margin: "0 15px"}
            }>
          </div>

          <p>
            Includes all fees, before taxes
          </p>
        </div>

        <div className='media_toggleBoxText'>
          <h4>
            Display total price
          </h4>

          <p>
            Includes all fees, before taxes
          </p>
        </div>

        <div className='toggleBoxToggle' id="toggleBoxChange">

          <button className='toggleButton' onClick={toggleOn}>{showMark ? <MdDone/> : ''}</button>

        </div>

      </div>

    </div>

  )
}
export default PriceToggle;