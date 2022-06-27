import { useNavigate } from "react-router-dom"
const Links = () => {
    const navigate = useNavigate()

    return (
        <div className="col-4">
        {/* <img src='img/menu.png' alt='menu' width={"75px"} height={"75px"} id="menu-img"></img> */}
          <ul id='menu'>
              <li onClick={(e) => navigate(`${e.target.id}`)}>Home</li>
              <li onClick={(e) => navigate(`${e.target.id}`)} id='projects'>Projects</li>
              <li onClick={(e) => navigate(`${e.target.id}`)} id='contact'>Contact Me</li>
          </ul>
      </div>
    )
}

export default Links