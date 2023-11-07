import "./about.css";
import atom from "../../imgs/icons/atom.png"
import js from "../../imgs/icons/js.png"
import github from "../../imgs/icons/github.png"
import css from "../../imgs/icons/css.png"
import sass from "../../imgs/icons/sass.png"
import files from "../../imgs/icons/files.png"
import figma from "../../imgs/icons/figma.png"

const About = () => {
    return(
        <section className="about">
            <div className="about__wrapper">
                <h1 className="about-title">About</h1>
                <div className="about__content">
                    <p className="about__content-text">Hello! I have recently graduated from university, studied programming, and I am now looking for my first job in IT. I enjoy creating websites, have experience with various graphic editors, and am fairly confident in English. I aim to apply all of this in practice and improve my skills in a team environment. I am ready to start my journey with an internship since my commitment to learning and growth in this field is important to me, and I am willing to actively contribute to achieving outstanding results.</p>
                    <ul className="about__content-skillList">
                        <ul className="skill__list-row">
                            <li className="skill__list-item"><img src={js} className="skill__list-item-img"/></li>
                        </ul>
                        <ul className="skill__list-row">
                            <li className="skill__list-item"><img src={atom} className="skill__list-item-img"/></li>
                            <li className="skill__list-item"><img src={files} className="skill__list-item-img"/></li>
                        </ul>
                        <ul className="skill__list-row">
                            <li className="skill__list-item"><img src={css} className="skill__list-item-img"/></li>
                            <li className="skill__list-item"><img src={sass} className="skill__list-item-img"/></li>
                        </ul>
                        <ul className="skill__list-row">
                            <li className="skill__list-item"><img src={github} className="skill__list-item-img"/></li>
                            <li className="skill__list-item"><img src={figma} className="skill__list-item-img"/></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default About;