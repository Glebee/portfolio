import "./projectModule.css";
import gitLogo from "../../imgs/icons/github.png"

const ProjectModule = ({ isProjectModuleActiv, setActiveProjectModule, projectContent }) => {

    return (
        <div className={isProjectModuleActiv ? "projectModule" : "projectModule hidden"} onClick={() => {
            setActiveProjectModule(false);
            document.body.style.overflow = "unset";
            }}>
            <div className="projectModule__container" onClick={e => e.stopPropagation()}>
                <h2 className="projectModule__title">{projectContent.name}</h2>
                <img className="projectModule__image" src={projectContent.image} />
            


                <p className="projectModule__discription">{projectContent.discription}</p>

                {(projectContent.additionalInfo) ?
                    (<div className="projectModule__keyFeatures">
                        <h3>Key features</h3>
                        <ul className="projectModule__additionalInfo">
                            {projectContent.additionalInfo.map((e, index) => {
                                return (<li key={index}><p>{e}</p></li>)
                            })}
                        </ul>
                    </div>) : (<></>)}


                {Array.isArray(projectContent.skills) ? (
                    <ul className="projectModule__skillList">
                        {projectContent.skills.map((e, index) => (
                            <li key={index}><p>{e}</p></li>
                        ))}
                    </ul>
                ) : (
                    <></>
                )}


                <a className="projectModule__link" href={projectContent.github}><span>watch on</span><img src={gitLogo}/></a>

            </div>
        </div>
    )
}

export default ProjectModule;