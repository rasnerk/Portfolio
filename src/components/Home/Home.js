import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Scene from '../Scene/Scene'
import Keifer from "./Keifer"
import './Home.css'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#keifer").classList.add("fadeOut")
            setTimeout(() => {
                document.querySelector("#keifer").style.display = "none"
            }, 1500)
        },9000)
    })
    return (
        <div className="home d-flex flex-column">
            <Scene />
            <div id="keifer" style={{position: "absolute", top: "30%", left: "25%"}}>
                <Keifer />
            </div>
            <Projects />
            <Contact />
        </div>
    )
}

export default Home