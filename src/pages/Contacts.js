import "./contacts.css"

const Contacts = () => {
    return(
        <section className="contacts">
            <div className="contacts__container">
                <h2 className="contacts__header">Let's make something <br/> great together!</h2>
                <a className="tg-link" href="t.me/dagleb"><h2>t.me/dagleb</h2></a>
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