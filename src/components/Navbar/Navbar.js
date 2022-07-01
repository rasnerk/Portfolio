import NavChildren from "./NavChildren/NavChildren"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar sticky-top">
            <NavChildren />
        </div>
    )
}

export default Navbar