import { motion } from "framer-motion"

import "./header.css"
import me from "../../imgs/meSmall.png"

const opacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visiable: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
        }
    }
}

const Header = () => {
    return (
        <motion.header
            initial="hidden"
            whileInView="visiable"
            variants={opacityAnimation}
            className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hello, I'm <em>Gleb</em>,</strong>
                    <br />a Frontend Developer
                </h1>
                <motion.div
                    initial="hidden"
                    whileInView="visiable"
                    variants={opacityAnimation}
                    className="header__text">
                    <p>Crafting Digital Experiences</p>
                </motion.div>
                <motion.a
                    initial="hidden"
                    whileInView="visiable"
                    variants={opacityAnimation}
                    href="../../../public/soldatov_frontend.pdf" download className="header__link">download CV</motion.a>
                {/* <motion.div
                    initial="hidden"
                    whileInView="visiable"
                    variants={opacityAnimation}
                >
                    <img src={me} className="header__img" loading="lazy" />
                </motion.div> */}
            </div>

        </motion.header>
    )
}

export default Header