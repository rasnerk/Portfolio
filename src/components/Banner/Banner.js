import { socials } from "../../lib/socials"

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
        </div>
    )
}

export default Banner