import "./header.css"
import me from "../../imgs/me.png"
const Header =()=>{
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hello, I'm <em>Gleb</em>,</strong>
                    <br/>a Frontend Developer
                </h1>
                <div className="header__text">
                    <p>Crafting Digital Experiences</p>
                </div>
                <a href="#" download className="header__link">download CV</a>
                <img src={me} className="header__img" loading="lazy"/>
            </div>
            
        </header>
    )
}

export default Header