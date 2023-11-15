import { createPortal } from 'react-dom';
import "./projectModule.css";
import gitLogo from "../../imgs/icons/github.png"
import { useEffect } from 'react';



const ProjectModule = ({ isProjectModuleActiv, setActiveProjectModule, projectContent }) => {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setActiveProjectModule(false);
                document.body.style.overflow = 'unset';
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [setActiveProjectModule]);



    return (
        createPortal(
            <div className={isProjectModuleActiv ? "projectModule" : "projectModule hidden"} onClick={() => {
                setActiveProjectModule(false);
                document.body.style.overflow = "unset";
                }}>
                <div className="projectModule__container" onClick={e => e.stopPropagation()}>
                    <h2 className="projectModule__title">{projectContent.name}</h2>
                    <img className="projectModule__image" alt="project" src={projectContent.image} />
                


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


                    <a className="projectModule__link" href={projectContent.github} target="_blank" rel="noreferrer"><span>watch on</span><img src={gitLogo} alt='github'/></a>

                </div>
            </div>,
            document.body
        )
    )
}

export default ProjectModule;