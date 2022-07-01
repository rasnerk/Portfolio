// import CodeWrapper from './CodeWrapper'
// import Card from "./Card"
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Keifer from './Keifer'
import Banner from '../Banner/Banner'
import './Home.css'

const Home = () => {
    return (
        <div className="home d-flex flex-column">
            <Keifer />
            <Banner />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home