import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Banner from '../Banner/Banner'
import Scene from '../Scene/Scene'
import './Home.css'

const Home = () => {
    return (
        <div className="home d-flex flex-column">
            <Scene />
            <Banner />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home