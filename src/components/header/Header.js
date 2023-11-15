import { useEffect } from "react"

import "./header.css"





const Header = () => {
    function debounce(func, delay) {
        let timeoutId;
      console.log("hi from deb")
        return function (...args) {
          clearTimeout(timeoutId);
      
          timeoutId = setTimeout(() => {
            func(...args);
          }, delay);
        };
      }

      const handleScroll = () => {
            
        const header = document.querySelector(".header");
        if (header) {
            
            header.style.opacity = 1 - window.scrollY / 500;
            
        }
        (header.style.opacity < 0) ? header.style.visibility = "hidden" : header.style.visibility = "visible"
    };
  
    useEffect(() => {        
        const debouncedScroll = debounce(handleScroll, 10);
        window.addEventListener("scroll", debouncedScroll);

        return () => {
            window.removeEventListener("scroll", debouncedScroll);
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
                <a href="https://drive.google.com/file/d/1ndepLortBncQm1sBLQCa5CZPa0AFsMCz/view?usp=sharing" target="_blank" rel="noreferrer" className="header__link">download CV</a>
            </div>

        </header>
    )
}

export default Header