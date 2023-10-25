import "./skills.css"
import atom from "../../imgs/icons/atom.png"
import js from "../../imgs/icons/js.png"
import github from "../../imgs/icons/github.png"
import css from "../../imgs/icons/css.png"
import sass from "../../imgs/icons/sass.png"
import files from "../../imgs/icons/files.png"
import figma from "../../imgs/icons/figma.png"

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills__wrapper">
                <ul className="skills__list">
                    <li className="skill__list-item"><img src={js} className="skill__list-item-img"/></li>
                    <li className="skill__list-item"><img src={atom} className="skill__list-item-img"/></li>
                    <li className="skill__list-item"><img src={files} className="skill__list-item-img"/></li>
                    <li className="skill__list-item"><img src={css} className="skill__list-item-img"/></li>
                    <li className="skill__list-item"><img src={sass} className="skill__list-item-img"/></li>
                    <li className="skill__list-item"><img src={github} className="skill__list-item-img"/></li>
                    <li className="skill__list-item"><img src={figma} className="skill__list-item-img"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;