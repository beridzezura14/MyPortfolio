import Nav from "../Nav";
import Loader from "../loader";
import phone from '../assets/icon/phone.png'
import email from '../assets/icon/email.png'
import map from '../assets/icon/map.png'


function Contact() {
    return (
        <div className="main__contact">
            <div className="loader__desktop">
                <Loader />
            </div>
            <div className="main__head">
                <div className="point"></div> 
                <div>Contact</div>
            </div>
            <Nav />
            <div className="contact">
                <div className="contact__info">
                    <div className="contact__info--call">
                        <div>
                            <div className="div__img">
                                <img src={phone} alt="phone icon" />
                            </div>
                            <a href="tel:+995558294364">+995 558 29 43 64</a>                        
                        </div>
                        <div>
                            <div className="div__img">
                                <img src={email} alt="email email icon" />
                            </div>
                            <p>zuraberidze12@gmail.com</p>
                        </div>
                        <div>
                            <div className="div__img">
                                <img src={map} alt="email email icon" />
                            </div>
                            <p>Georgia, Tbilisi</p>
                        </div>
                    </div>
                    <div className="contact__info--message">
                        <div className="soc__media">
                            <div className="send__email">
                                <h3>Send Me An <span>Email</span></h3>
                                <p>Feel free to get in touch with me. I am always open to discussing new projects or creative ideas.</p>
                            </div>
                            <div className="follow">
                                <h3>Follow <span>Me</span></h3>
                                <div>
                                    <a href="https://www.facebook.com/zura.beridze.metqi" target="blank"><ion-icon name="logo-facebook"></ion-icon></a>
                                    <a href="https://www.instagram.com/beridze_14/" target="blank"><ion-icon name="logo-instagram"></ion-icon></a>
                                    <a href="https://www.linkedin.com/in/zura-beridze-a39725197/" target="blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                                    <a href="https://github.com/beridzezura14?tab=repositories" target="blank"><ion-icon name="logo-github"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div>
                                <input type="text" placeholder="YOUR NAME" />   
                                <input type="text" placeholder="SUBJECT" />   
                                <input type="email" placeholder="YOUR EMAIL" name="" id="" />
                            </div>
                            <textarea placeholder="YOUR MESSAGE" name="" id=""></textarea>
                            <button className="btn send__btn">SEND</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
