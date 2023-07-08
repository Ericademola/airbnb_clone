import {  MdDone } from 'react-icons/md';

const TreandDisplay = () => {

  const toggleBox = {
    margin: "30px 0",
    alignItems: "center",
  }

  const toggleBoxContent = {
    display: "flex",
    margin: "auto",
    width: "622.5px",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "15px",
    height: "66px",
    justifyContent: "space-between",
    // backgroundColor: "red"
  }

  const toggleBoxText = {
    padding: "20px",
    display: "flex",
  }

  const toggleBoxToggle ={
    marginRight: "20px",
    width: "50px",
    backgroundColor: "#b0b0b0",
    borderRadius: "55px",
    border: "1px solid #ddd",
    padding: "2px 2px", 
  }

  const button ={
    height: "30px",
    width: "30px",
    borderRadius: "66px",
    border: "none",
  }

  return (
      
    <div style={toggleBox}>

      <div style={toggleBoxContent}>
        <div style={toggleBoxText}>
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
        <div style={toggleBoxToggle}>
          <button style={button}><MdDone/></button>
        </div>
      </div>

    </div>

  )
}
export default TreandDisplay
