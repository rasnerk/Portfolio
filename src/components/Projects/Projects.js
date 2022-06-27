import Project from "./Project"
import { projectsList, comingSoon } from "../../lib/projects"
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects-wrapper d-flex flex-wrap justify-content-evenly">
            {projectsList.map(proj => <Project key={proj.name} data={proj} /> )}
            <div className="col-12" style={{textAlign: "center", color: "white", padding: "4em 0", borderBottom: "1px solid white", marginBottom: "4em"}}>
                <h2>Coming Soon...</h2>
            </div>
            {comingSoon.map(proj => <Project key={proj.name} data={proj} /> )}
        </div>
    )
}

export default Projects