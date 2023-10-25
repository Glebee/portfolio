import "./footer.css"

import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <ul className="footer__social">
                <li className="footer__social-item">
                    <a href="#">telegram</a>
                </li>
               <li className="footer__social-item">
                       <a href="#">email</a>
                </li>
                <li className="footer__social-item">
                    <a href="#">github</a>
                </li>
            </ul>
            <h2>Gleb`s portfolio</h2>
        </div>
    </footer>
  )
}

export default Footer;