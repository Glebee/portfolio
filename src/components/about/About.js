import { motion } from "framer-motion"

import "./about.css";
import atom from "../../imgs/icons/atom.png"
import js from "../../imgs/icons/js.png"
import github from "../../imgs/icons/github.png"
import css from "../../imgs/icons/css.png"
import sass from "../../imgs/icons/sass.png"
import files from "../../imgs/icons/files.png"
import figma from "../../imgs/icons/figma.png"

const skillsAnimation = {
    hiddenJs: {
        opacity: 0,
    },

    visiableJs: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },

    hiddenDown: {
        opacity: 0,
        y: 100,
    },

    hiddenUp: {
        opacity: 0,
        y: -100,
    },

    visiable: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 1
        },
    },



}

const About = () => {
    return (
        <section className="about">
            <h1 className="about-title">About me</h1>
            <div className="about__wrapper">

                <div className="about__content">
                    <motion.p
                        initial="hiddenJs"
                        whileInView="visiableJs"
                        variants={skillsAnimation}
                        className="about__content-text ">I have recently graduated from university, studied programming, and I am now looking for my first job in IT. I enjoy creating websites, have experience with various graphic editors, and am fairly confident in English. I aim to apply all of this in practice and improve my skills in a team environment. <br /><br /> I am ready to start my journey with an internship since my commitment to learning and growth in this field is important to me, and I am willing to actively contribute to achieving outstanding results.</motion.p>
                    <ul className="about__content-skillList">
                        <ul className="skill__list-row">
                            <li className="skill__list-item">
                                <motion.img
                                    initial="hiddenJs"
                                    whileInView="visiableJs"
                                    variants={skillsAnimation}
                                    loading="lazy"
                                    src={js} className="skill__list-item-img" />
                            </li>
                        </ul>
                        <motion.ul
                            initial="hiddenUp"
                            whileInView="visiable"
                            variants={skillsAnimation}
                            className="skill__list-row">
                            <li className="skill__list-item"><img src={atom} loading="lazy" className="skill__list-item-img" /></li>
                            <li className="skill__list-item"><img src={files} loading="lazy" className="skill__list-item-img" /></li>
                            <li className="skill__list-item"><img src={css} loading="lazy" className="skill__list-item-img" /></li>
                        </motion.ul>
                        <motion.ul
                            initial="hiddenDown"
                            whileInView="visiable"
                            variants={skillsAnimation}
                            className="skill__list-row">
                            <li className="skill__list-item"><img src={sass} loading="lazy" className="skill__list-item-img" /></li>
                            <li className="skill__list-item"><img src={github} loading="lazy" className="skill__list-item-img" /></li>
                            <li className="skill__list-item"><img src={figma} loading="lazy" className="skill__list-item-img" /></li>
                        </motion.ul>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default About;