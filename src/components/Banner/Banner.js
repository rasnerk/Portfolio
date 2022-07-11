import { socials, frameworks } from "../../lib/socials"

const Banner = () => {
    return (
        <div className="banner">
            {socials.map(social => (
                <div key={social.name}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                        <img src={social.icon} alt={social.name} style={{width: "50px", height: "50px"}} />
                    </a>
                </div>    
            ))}
            <div id="frameworks" className="d-flex flex-wrap">
                {frameworks.map(frame => (
                    <div key={frame.name} style={{padding:"0 0.5em"}}>
                        <a href={frame.href} target="_blank" rel="noreferrer">
                            <img src={frame.icon} alt={frame.name} style={{width: "50px", height: "50px"}} />
                        </a>
                    </div>    
                ))}
            </div>
        </div>
    )
}

export default Banner