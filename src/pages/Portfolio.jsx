import { Link } from "react-router-dom";

import Nav from "../Nav";
import Load from "../Load";

import web_1 from '../assets/portfolio-img/web_1.webp'
import web_2 from '../assets/portfolio-img/web_2.webp'
import web_3 from '../assets/portfolio-img/web_3.webp'
import web_5 from '../assets/portfolio-img/web_5.webp'
import web_6 from '../assets/portfolio-img/web_6.webp'
import pizza from '../assets/portfolio-img/pizza.png'
import salia from '../assets/portfolio-img/salia.png'
import meiwa from '../assets/portfolio-img/meiwa.png'


const publishedWeb = [
    {
        id: 1,
        img: salia,
        name: 'Salia Travel ',
        language: ["Javascript", "React.JS", "SCSS", "GSAP", "Swiper.js"],
        description: "Explore breathtaking destinations, plan your perfect getaway, and let your next adventure begin. From hidden gems to world-famous landmarks, we bring the world to your fingertips.",
        responsive: true,
        link: 'https://saliatravel.com/',
    },
    {
        id: 2,
        img: meiwa,
        name: 'Meiwa Georgia LLC ',
        language: ["HTML", "CSS", "Javascript"],
        description: "We specialize in exporting heavy construction machinery from Japan to meet global demand.With access to rare equipment and trusted partnerships in Japan, we ensure fast and reliable delivery of specialized machinery and parts worldwide.",
        responsive: false,
        link: 'https://meiwageorgia.ge/',
    },
]


const portfolioList = [
    {
        id: 1,
        img: pizza,
        name: 'Pizzon',
        language: ["Javascript", "React.JS", "SCSS", "GSAP"],
        responsive: true,
        link: 'https://pizza-blush-nine.vercel.app/Home',
        source: 'https://github.com/beridzezura14/Pizza',
    },
    {
        id: 2,
        img: web_1,
        name: 'Your Hotel',
        language: ["Javascript", "React.JS", "SCSS", "GSAP"],
        responsive: false,
        link: 'https://incomparable-cajeta-d5db83.netlify.app/',
        source: 'https://github.com/beridzezura14/Your-Hotel',
    },
    {
        id: 3,
        img: web_2,
        name: 'Marco Restorant',
        language: ["HTML", "CSS", "Javascript"],
        responsive: true,
        link: 'https://beridzezura14.github.io/Marco-Restaurant/index.html',
        source: 'https://github.com/beridzezura14/Marco-Restaurant',
    },
    {
        id: 4,
        img: web_3,
        name: 'film.ge',
        language: ["HTML", "CSS", "Javascript"],
        responsive: true,
        link: 'https://beridzezura14.github.io/Film.ge/index.html',
        source: 'https://github.com/beridzezura14/Film.ge',
    },
    {
        id: 5,
        img: web_5,
        name: 'Your Lawyer',
        language: ["HTML", "CSS", "Javascript"],
        responsive: false,
        link: 'https://beridzezura14.github.io/Your-Lawyer/',
        source: 'https://github.com/beridzezura14/Your-Lawyer',
    },
    {
        id: 6,
        img: web_6,
        name: 'NFT Project',
        language: ["HTML", "CSS"],
        responsive: true,
        link: 'https://beridzezura14.github.io/NFT-project/',
        source: 'https://github.com/beridzezura14/NFT-project',
    },
]


function Portfolio() {
    return (
        <div className="main__portfolio">
            <div className="loader__desktop">
                <Load />
            </div>
            <div className="main__head">
                <div className="point"></div> 
                <div>Portfolio</div>
            </div>
            <Nav />
            <div className="portfolio">
                <div className="git__portfolio__row">
                    <h2>Published  <span>Websites</span> </h2>
                    <p className="git__portfolio__row--p">Here are some of the fully developed and deployed web projects.</p>
                    <div className="gap__line"></div>
                    <div className="items">
                        {
                            publishedWeb.map(item => (
                                <div key={item.id} className="item">
                                    <h3 className="show"><span>{item.id}</span>{item.name}</h3>
                                    <div className="marquee__overflow">
                                        <span className="hover">
                                            {`${item.name} - `.repeat(15)}
                                        </span>
                                    </div>
                                    <img src={item.img} alt={item.name} />
                                    <div className="for__desktop">
                                        <div className="languages">
                                            {
                                                item.language.map((lang, i) => (
                                                    <span key={i}>{lang}</span>
                                                ))
                                            }
                                        </div>
                                        <Link to={item.link} target="blank"><button className="visit">Visit Website</button></Link> 
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="git__portfolio__row">
                    <h2>Practice <span>Projects</span> </h2>
                    <p className="git__portfolio__row--p">These are personal or demo projects, usually hosted on GitHub, Netlify, Vercel, etc., often built for practice or learning.</p>
                    <div className="gap__line"></div>
                    
                    <div className="items">
                        {
                            portfolioList.map(item => (
                                <div key={item.id} className="item">
                                    <h3 className="show"><span>{item.id}</span>{item.name}</h3>
                                    <div className="marquee__overflow">
                                        <span className="hover">
                                            {`${item.name} - `.repeat(15)}
                                        </span>
                                    </div>
                                    <img src={item.img} alt={item.name} />
                                    <div className="for__desktop">
                                        <div className="languages">
                                            {
                                                item.language.map((lang, i) => (
                                                    <span key={i}>{lang}</span>
                                                ))
                                            }
                                        </div>
                                        <Link to={item.link} target="blank"><button className="visit">Visit Website</button></Link>
                                        <Link to={item.source} target="blank"><button className="visit mobile">Source</button></Link> 
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="github">For more visit to my github page: 
                        <a href="https://github.com/beridzezura14?tab=repositories" target="blank">Github page link</a>
                    </div>
                </div>
            </div>




            {/*             <Link to={item.source} target="blank"><button className="btn btn__port btn__source">SOURCE</button></Link> */}

        </div>
    )
}

export default Portfolio
