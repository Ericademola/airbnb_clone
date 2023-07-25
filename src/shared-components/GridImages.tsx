import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineStar } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';

import './GridImages.css'
import { useState } from 'react';

const GridImages = ({pictures, trend, name, host, rating, date, cost}: any) => {

  const pics:object[] = pictures;

  const currentTrend:string = trend;

  console.log(pics);

  const picObject:{} = Object.assign({}, ...pics);

  console.log(picObject);

  const imageTitles = Object.keys(picObject); 
  console.log(imageTitles);
   
  const index = imageTitles.indexOf(currentTrend);

  console.log(index);

  const firstPic = pics[index]

  pics.splice(index, 1);

  pics.unshift(firstPic);

  console.log(pics);

  const imageValue = Object.values(picObject); 
  console.log(imageValue);


  console.log(imageTitles);

  // const n:number = 0;
  const [n, setN] = useState<number>(0);

  const [showArror, setShowArror] = useState<boolean>(false);

  const displayArror = () => {
    setShowArror(!showArror);
  }

  const [leftArror, setLeftArror] = useState<boolean>(false);

  const displayLeftArror = () => {
    setLeftArror(true);
    setN(n === imageValue.length - 1 ? imageValue.length - 1 : n + 1);
    // document.getElementById('mm')?.classList.add('forward')
  }

  const [seePics, setSeePics] = useState();

  const showNextPic = () => {
    
    console.log(pics);
  };

  const showPevPic = () => {
    setN(n === 0 ? 0 : n - 1)
  };

  return (
    <div
    onPointerEnter={displayArror}
    onPointerLeave={displayArror}>
      <div className='parent'>
      <div 
      // onAnimationStart={displayLeftArror}
      className="pictures" 
      id='mm'
      style={{background: `url(../images/${imageValue[n]}) no-repeat center center/cover`}}>
        
        <div className='heart'>
          <BsHeartFill className='heart_icon'/>
          {/* <BsHeartFill className='heart_icon2'/> */}
        </div>

        <div className='pic_button'>

          {showArror && leftArror ? 
            <div className='left_pic' onClick={showPevPic}>
              <span className='button' ><MdKeyboardArrowLeft/></span>
            </div> : ''
          } 

          {showArror ? 
            <div className='right_pic' onClick={displayLeftArror}>
              <span className='button' ><MdKeyboardArrowRight/></span>
            </div> : ''
          }

        </div>

      </div>
      </div>

      <div className="location">
        <span>
          {name}
        </span> 
        <span className="rating">
          <MdOutlineStar className="rating_star"/> {rating}
        </span>
      </div>

      <div>
        <p>Stay with {host}</p>
      </div>

      <div>
        <p>{date}</p>
      </div>

      <div>
        <u>
          <b>${cost}</b> night
        </u>
      </div>
          
    </div>
    
  )
}
export default GridImages
export {}