import DisplayGrid from "../shared-components/DisplayGrid"
import Footer from "../shared-components/Footer"
import Header from "../shared-components/Header"
import TreandDisplay from "../shared-components/TreandDisplay"

const Home = () => {
  return (
    <div>
        <Header />
        <TreandDisplay />
        <DisplayGrid />
        <Footer />
    </div>
  )
}
export default Home