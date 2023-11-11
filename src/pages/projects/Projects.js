import "./projects.css"
import git from "../../imgs/icons/github.png"

import Project, { MProject } from "../../components/project/Project";
import { projects } from "../../helpers/projectsList"
import ProjectModule from "../../components/projectModule/ProjectModule";
import { useState } from "react";

const revealAnimation = {
    hiddenLeft: {
        opacity: 1,
        x: -100,
    },

    hiddenRight: {
        opacity: 1,
        x: 100,
    },

    visiable: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
    },
}

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
        console.log(name)
    }


    return (
        <section className="projects">
            <ProjectModule isProjectModuleActiv={activeProjectModule} setActiveProjectModule={setActiveProjectModule} projectContent={projectContent} />
            <div className="title__wrapper">
                <h2 className="projects__title"><strong>PROJECTS</strong></h2>
                <a href="https://github.com/Glebee"><img className="projects__git" src={git} alt="github" /></a>
            </div>
            <div className="projects__wrapper">


                <ul className="projects__list">
                    {projects.map((e, index) => {
                        return (
                            <MProject
                                initial={(index % 4 === 2 || index % 4 === 3) ? "hiddenRight" : "hiddenLeft"}
                                whileInView="visiable"
                                variants={revealAnimation}
                                key={index}
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