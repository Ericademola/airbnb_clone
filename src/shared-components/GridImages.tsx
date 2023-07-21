import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { GoHeart } from 'react-icons/go';

import './GridImages.css'

const GridImages = ({pictures, trend}: any) => {

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
  console.log(imageTitles);

  const n:number = 0;

  return (
    <div className="pictures" id='pic' style={{background: `url(images/${imageValue[n]}) no-repeat center center/cover`}}>
      <GoHeart />
    <div className='left_pic'>
      <span className='button' ><MdKeyboardArrowLeft/></span>
    </div>

    <div className='right_pic'>
      <span className='button' ><MdKeyboardArrowRight/></span>
    </div>

    </div>
  )
}
export default GridImages
export {}