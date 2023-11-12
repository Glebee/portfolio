import { motion, useAnimation } from "framer-motion"

import "./header.css"
import me from "../../imgs/meSmall.png"
import { useEffect } from "react"




const Header = () => {
    function throttle(func, delay) {
        let lastCallTime = 0;

        return function (...args) {
            const now = new Date().getTime();

            if (now - lastCallTime >= delay) {
                func(...args);
                lastCallTime = now;
            }
        };
    }

    useEffect(() => {
        const handleScroll = () => {
            
            const header = document.querySelector(".header");
            if (header) {
                header.style.opacity = 1 - window.scrollY / 500;
            }
            // if (window.scrollY === 0) {
            //     header.style.opacity = 1;
            //     console.log("nu i hule")
            // }
        };

        window.addEventListener("scroll", throttle(handleScroll, 50));

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    Hello. I'm <em>Gleb</em>.
                    <br />A Frontend Developer.
                </h1>
                <div className="header__text">
                    <p>Crafting Digital Experiences</p>
                </div>
                <a href="https://sun1-14.userapi.com/impg/Ivs-gO76Fayt36euJRQm3_UwNOhzsMtYOTfyJA/PNrk3vjM_sk.jpg?size=529x604&quality=96&sign=fe0fd6da4c77bd98778ccad30fb08564&type=album" target="_blank" className="header__link">download CV</a>
                {/* <motion.div
                    initial="hidden"
                    whileInView="visiable"
                    variants={opacityAnimation}
                >
                    <img src={me} className="header__img" loading="lazy" />
                </motion.div> */}
            </div>

        </header>
    )
}

export default Header