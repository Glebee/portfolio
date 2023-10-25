import Project from "../../components/project/Project";
import "./projects.css"
import { projects } from "../../helpers/projectsList"

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title"><strong>Projects</strong></h2>
                <ul className="projects__list">
                    {projects.map(e => {
                        return (
                            <Project
                                name={e.name}
                                skills={e.skills}
                                discription={e.discription}
                                github={e.github}
                                image={e.image}
                                bigImage={e.bigImage} 
                            />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Projects;