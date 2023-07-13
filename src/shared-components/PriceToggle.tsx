import {  MdDone } from 'react-icons/md';
import './PriceToggle.css';
import { useState } from 'react';


const PriceToggle = () => {

  const [onToggle, setOnToggle] = useState<boolean>(false);
  const [checkMoveNext, setCheckMoveNext] = useState<boolean>(false);
  const [showMark, setShowMark] = useState<boolean>(false);



  const toggleOn = () => {

    setShowMark(!showMark)

    setOnToggle(true);
    document.getElementById("toggleBoxChange")?.classList.toggle('toggleBoxChange');

    setCheckMoveNext(prevState => {
      return !prevState
    })

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

        <div onAnimationEnd={toggleOn}
        className=  'toggleBoxToggle' id="toggleBoxChange">

          <button className='button' onClick={toggleOn}>{showMark ? <MdDone/> : ''}</button>

        </div>
      </div>

    </div>

  )
}
export default PriceToggle

// showMark ? 'buttonMove' :