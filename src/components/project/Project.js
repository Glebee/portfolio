import "./project.css"

const Project = ({ turnOnModule, name, skills, discription, additionalInfo, github, image, bigImage }) => {
    return (
        <li className="projects__list-item" onClick={() => turnOnModule(name, skills, discription, additionalInfo, github, image)}>
            
            <div className="project__list-item-content">
                <h2 className="projects__list-item-title">{name}</h2>
                {/* <p className="projects__list-item-skills">{skills}</p> */}
                {/* <p className="projects__list-item-discription">{discription}</p> */}
                {/* <a className="projects__list-item-github" href={github}>github</a> */}
                {/* <a href="" class="projects__list-item-link">More detailes</a> */}
                <img className="projects__list-item-image" loading="lazy" src={image} width="700px"/>
            </div>
        </li>
    )
}

export default Project;