import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            navigate(path);
        }, 2);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        if (isOpen || isClosing) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen, isClosing]);


    return (
        <div className="navigation">

            <div onClick={toggleMenu} className="burger burger__other">
                <div className={isOpen ? "line line_1 active" : "line line_1"}></div>
                <div className={isOpen ? "line line_2 active" : "line line_2"}></div>
                <div className={isOpen ? "line line_3 active" : "line line_3"}></div>
            </div>

            <div className={"navigation__info__link" + (isOpen ? " active" : "") + (isClosing ? " closing" : "")
            }>
                <nav className="nav__link">
                    <span className="link" onClick={() => handleLinkClick("/")}>Home</span>
                    <span className="link" onClick={() => handleLinkClick("/about")}>About me</span>
                    <span className="link" onClick={() => handleLinkClick("/portfolio")}>Portfolio</span>
                    <span className="link" onClick={() => handleLinkClick("/contact")}>Contact</span>
                </nav>
                <div className="nav__info">
                    <h2>Let's work together</h2>
                    <p>zuraberidze12@gmail.com</p>
                    <a href="tel:+995558294364">+995 558 29 43 64</a>
                    <div className="icon">
                        <a href="https://www.facebook.com/zura.beridze.metqi" target="blank"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://www.instagram.com/beridze_14/" target="blank"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="https://www.linkedin.com/in/zura-beridze-a39725197/" target="blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="https://github.com/beridzezura14?tab=repositories" target="blank"><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;