import { Link } from "react-router-dom";
import Nav from "../Nav";
import Animation from "../animation";
import Loader from "../loader";

import decor from '../assets/decor/sirclePointsDecor.png';
import decorTop from '../assets/decor/one-decor.png';


function Home() {


    let left = 17

    return (
        <div className="main__home">
            <div className="loader__desktop">
                <Loader />
            </div>
            <Nav />
            <div className="home">
                <img className="top__side" src={decorTop} alt="decor2" />
                <div className="home__content">
                    <h1>hi ! i’m <span>Zura.</span></h1>
                    <p>I'm a front-end developer with experience in creating responsive and interactive user interfaces.</p>
                    <Link to={'/about'}><button className="btn btn__home">MORE ABOUT ME</button></Link>
                </div>
                <img className="bottom__left" src={decor} alt="decor" />


                <div className="home__nav__info">
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


                <div className="rain">
                    {[...Array(5)].map((_, i) => {

                        const style = { left: `${left}%` };
                        left += 17;

                        return (
                            <div className={`rain__${i+1}`} key={i} style={style}>
                                <div className={`rain__run__${i+1}`}></div>
                            </div>

                        )    
                    })}
                </div>

                
            </div>

            <Animation />
        </div>
    )
}

export default Home
