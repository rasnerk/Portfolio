import { useNavigate } from "react-router-dom"

const Card = () => {
    const navigate = useNavigate()
    return (
        <div className="card col-5">
            <h2>Customizable Websites & Applications</h2>
            <div className="d-flex justify-content-center">
                <p>
                    Hello, my name is Keifer Rasner! I am a full stack developer living in Appleton, Wisconsin.
                    I enjoy building any application from small business websites, to complex web applications, or even blockchain integrated platforms.
                    If you are looking for a custom applicaton to fit your needs check out the <b className='contact' onClick={() => navigate('/contact')}>Contact Me</b> link above!
                    Otherwise, have a look at some of my past projects on the <b className='projects' onClick={() => navigate('/projects')}>Projects</b> link!
                </p>
            </div>
            <div className="buttons">
                <button className="hire button slide">Hire Me</button>
                <button onClick={() => window.open("https://github.com/rasnerk", "_self")} className="button">Keifer's Github</button>
            </div>
        </div>
    )
}

export default Card