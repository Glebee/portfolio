import "./projects.css"
import git from "../../imgs/icons/github.png"

import Project, { MProject } from "../project/Project";
import { projects } from "../../helpers/projectsList"
import ProjectModule from "../projectModule/ProjectModule";
import { useState } from "react";


// Анимации для компонента Projects
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
    // Состояния для управления модулем проекта и overflow
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
    
    // Функция для включения модуля проекта
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
    }


    return (
        <section className="projects">
            <ProjectModule isProjectModuleActiv={activeProjectModule} setActiveProjectModule={setActiveProjectModule} projectContent={projectContent} />
            <div className="title__wrapper">
                <h1 className="projects__title"><strong>PROJECTS</strong></h1>
                {/* <a href="https://github.com/Glebee"><img className="projects__git" src={git} alt="github" /></a> */}
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
            </div>
        </section>
    )
}

export default Projects;