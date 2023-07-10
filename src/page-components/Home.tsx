import DisplayGrid from "../shared-components/DisplayGrid"
import Footer from "../shared-components/Footer"
import Header from "../shared-components/Header"
import PriceToggle from "../shared-components/PriceToggle"

const Home = () => {
  return (
    <div>
        <Header />
        <PriceToggle />
        <DisplayGrid />
        <Footer />
    </div>
  )
}
export default Home