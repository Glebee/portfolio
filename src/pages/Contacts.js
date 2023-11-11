import "./contacts.css"
import { motion } from "framer-motion"

const revealAnimation = {
    hiddenLeft: {
        opacity: 1,
        x: -100,
    },

    hiddenRight: {
        opacity: 0,
        x: 100,
        transition: {
            duration: 1
        },
    },

    visiable: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
    },
    visiableDelay: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 1
        },
    },
}

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts__container">
                <motion.h2
                    initial="hiddenLeft"
                    whileInView="visiable"
                    variants={revealAnimation}
                    className="contacts__header">Let's make something <br /> great together!</motion.h2>
                <motion.a
                    initial="hiddenRight"
                    whileInView="visiableDelay"
                    variants={revealAnimation}
                    className="tg-link" href="t.me/dagleb"><h2>t.me/dagleb</h2></motion.a>
                <ul className="contacts__list">
                    <li className="contacts__list-item">

                        <p>© 2023 Soldatov Gleb • Nizhniy-Novgorod, Russia</p>
                        <a href="mailto:soldatov.glieb@gmail.com">soldatov.glieb@gmail.com</a>
                    </li>

                    <li className="contacts__list-item">
                        <ul className="contacts__list-row">
                            <li><a href="https://github.com/Glebee/">Github</a></li>
                            <li><a href="https://vk.com/spaceinventor">VK</a></li>
                            {/* <li><a href="https://instagram.com/yesgleb">instagram</a></li> */}
                        </ul>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default Contacts;