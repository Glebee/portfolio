import "./projects.css"
import git from "../../imgs/icons/github.png"

import Project from "../../components/project/Project";
import { projects } from "../../helpers/projectsList"
import ProjectModule from "../../components/projectModule/ProjectModule";
import { useState } from "react";

const Projects = () => {
    const [activeProjectModule, setActiveProjectModule] = useState(false);
    const [overflowBody, setOverflowBody] = useState(false);



    const [projectContent, setProjectContent] = useState({
        name: "",
        skills: "",
        discription: "",
        additionalInfo: "",
        github: "",
        image: "",
    })

    const turnOnModule = (name, skills, discription, additionalInfo, github, image) => {
        setActiveProjectModule(true);
        document.body.style.overflow = "hidden";
        setProjectContent({
            name: name,
            skills: skills,
            discription: discription,
            additionalInfo: additionalInfo,
            github: github,
            image: image,
        })
        console.log("success")
    }

    return (
        <section className="projects">
            <ProjectModule isProjectModuleActiv={activeProjectModule} setActiveProjectModule={setActiveProjectModule} projectContent={projectContent} />
            <div className="projects__wrapper">
                <div className="title__wrapper">
                    <h2 className="projects__title"><strong>PROJECTS</strong></h2>
                    <a href="https://github.com/Glebee"><img className="projects__git" src={git} alt="github" /></a>
                </div>

                <ul className="projects__list">
                    {projects.map(e => {
                        return (
                            <Project
                                turnOnModule={turnOnModule}
                                name={e.name}
                                skills={e.skills}
                                discription={e.discription}
                                additionalInfo={e.additionalInfo || undefined}
                                github={e.github}
                                image={e.image}
                                bigImage={e.bigImage}
                            />
                        )
                    })}
                </ul>
                <a href="https://github.com/Glebee"><img className="projects__git-mobile" src={git} alt="github" /></a>
            </div>
        </section>
    )
}

export default Projects;