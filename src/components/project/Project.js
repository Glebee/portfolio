import "./project.css"

const Project = ({ name, skills, discription, github, image, bigImage }) => {
    return (
        <li className="projects__list-item">
            <h2 className="projects__list-item-title">{name}</h2>
            {/* <p className="projects__list-item-skills">{skills}</p> */}
            <p className="projects__list-item-discription">{discription}</p>
            {/* <a className="projects__list-item-github" href={github}>github</a> */}
            <a href="" class="projects__list-item-link">More detailes</a>
            <img className="projects__list-item-image" src={image} />
        </li>
    )
}

export default Project;