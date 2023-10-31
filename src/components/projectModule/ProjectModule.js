import "./projectModule.css";

const ProjectModule = ({ isProjectModuleActiv, setActiveProjectModule, projectContent }) => {
    return (
        <div className={isProjectModuleActiv ? "projectModule" : "projectModule hidden"} onClick={() => setActiveProjectModule(false)}>
            <div className="projectModule__container" onClick={e => e.stopPropagation()}>
                <img className="projectModule__image" src={projectContent.image} />
                <h2 className="projectModule__title">{projectContent.name}</h2>
                <ul className="projectModule__list">
                    <li className="projectModule__list-item"></li>
                    <li className="projectModule__list-item"></li>
                    <li className="projectModule__list-item"></li>
                </ul>


                <p className="projectModule__discription">{projectContent.discription}</p>

                <a className="projectModule__link" href={projectContent.github}>github</a>

            </div>
        </div>
    )
}

export default ProjectModule;