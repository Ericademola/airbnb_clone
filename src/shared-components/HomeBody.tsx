import Nav from "./Nav";
import PriceToggle from "./PriceToggle";
import { useState } from "react";
import DisplayGrid from "./DisplayGrid";


const HomeBody = () => {

  const [homeTrendDisplayed, setHomeTrendDisplayed] = useState<string>();

  const getPicDisplay = (first: string) => {
    setHomeTrendDisplayed(first)
  }
    
  console.log(homeTrendDisplayed);

    
  return (
    <div className="main_body">

      <Nav getPicDisplay={getPicDisplay}/>

      <PriceToggle />

      <DisplayGrid homeTrendDisplayed = {homeTrendDisplayed}/>

    </div>
  )
}
export default HomeBody;
export {}
