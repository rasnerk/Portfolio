import CodeWrapper from './CodeWrapper'
import Card from "./Card"
import './Home.css'

const Home = () => {
    return (
        <div className="home d-flex flex-column align-items-center justify-content-center">
            <CodeWrapper />
            <Card />
        </div>
    )
}

export default Home