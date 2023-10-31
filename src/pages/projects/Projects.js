import "./projects.css"
import git from "../../imgs/icons/github.png"

import Project from "../../components/project/Project";
import { projects } from "../../helpers/projectsList"
import ProjectModule from "../../components/projectModule/ProjectModule";
import { useState } from "react";

const Projects = () => {
    const [activeProjectModule, setActiveProjectModule] = useState(false);
    const [projectContent, setProjectContent] = useState({
        name: "",
        skills: "",
        discription: "",
        github: "",
        image: "",
    })

    const turnOnModule = (name , skills, discription, github, image) => {
        setActiveProjectModule(true);
        setProjectContent({
            name: name,
            skills: skills,
            discription:discription,
            github:github,
            image: image,
        })
        console.log("success")
    }

    return (
        <section className="projects">
            <ProjectModule isProjectModuleActiv={activeProjectModule} setActiveProjectModule={setActiveProjectModule} projectContent={projectContent}/>
            <div className="projects__wrapper">
                <div className="title__wrapper">
                    <h2 className="projects__title"><strong>PROJECTS</strong></h2>
                    <a href="https://github.com/Glebee"><img className="projects__git" src={git} alt="github"/></a>
                </div>

                <ul className="projects__list">
                    {projects.map(e => {
                        return (
                            <Project
                                turnOnModule={turnOnModule}
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