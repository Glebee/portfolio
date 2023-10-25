import "./contacts.css"

const Contacts = () => {
    return(
        <main className="contacts">
            <div className="contacts__container">
                <h2 className="contacts__header">Contacts</h2>
                <ul className="contacts__list">
                    <li className="contacts__list-item">
                        <h2><strong>Location</strong></h2>
                        <p>Nizhniy-Novgorod, Russia</p>
                    </li>
                    <li className="contacts__list-item">
                        <h2><strong>Telegram</strong></h2>
                        <a href="tel:+79991382769">+7 (999) 138-27-69</a>
                    </li>
                    <li className="contacts__list-item">
                        <h2><strong>Email</strong></h2>
                        <a href="mailto:soldatov.glieb@gmail.com">soldatov.glieb@gmail.com</a>
                    </li>
                </ul>
            </div>
            
        </main>
    )
}

export default Contacts;