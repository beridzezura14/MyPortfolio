import Nav from "../Nav";
import Load from "../Load";

import me from '../assets/me.jpg'


import bd from '../assets/icon/cake.png'
import flag from '../assets/icon/report.png'
import setting from '../assets/icon/settings.png'
import phone from '../assets/icon/phone.png'
import map from '../assets/icon/map.png'
import email from '../assets/icon/email.png'




const personalInfo = [
    {   
        id: 1,
        img: bd,
        name: "Birthdate ",
        answer: "May 1997"
    },
    {   
        id: 2,
        img: flag,
        name: "Nationality ",
        answer: "Georgian"
    },
    {   
        id: 3,
        img: setting,
        name: "Experience",
        answer: "2 Years"
    },
    {   
        id: 4,
        img: phone,
        name: "Phone",
        answer: "+995 558 29 43 64"
    },
    {   
        id: 5,
        img: map,
        name: "Adress",
        answer: "Georgia, Tbilisi"
    },
    {   
        id: 6,
        img: email,
        name: "Mail",
        answer: "zuraberidze12@gmail.com"
    },
    
]
const experience = [
    {   
        id: 1,
        name: "Global-Erty",
        position: "Telecommunications service provider",
        date: "2018-2020"
    },
    {   
        id: 2,
        name: "Architectural Service",
        position: "Architect and land surveyor",
        date: "2020-2022"
    },
    {   
        id: 3,
        name: "Ministry of Defence",
        position: "Information Tecnology Specialist (IT specialist)",
        date: "2022 - today"
    },
   
]
const skills = [
    {   
        id: 1,
        name: "HTML",
        percentage: "95"
    },
    {   
        id: 2,
        name: "CSS",
        percentage: "90"
    },
    {   
        id: 3,
        name: "Javascript",
        percentage: "40"
    },
    {   
        id: 4,
        name: "React.JS",
        percentage: "35"
    },
    {   
        id: 5,
        name: "Python",
        percentage: "15"
    },
    {   
        id: 6,
        name: "SCSS",
        percentage: "70"
    },
   
]

function About() {
    return (
        <div className="main__about">
            <div className="loader__desktop">
                <Load />
            </div>
            <div className="main__head">
                <div className="point"></div> 
                <div>About <span>Me</span></div>
            </div>
            <Nav />

            <div className="about">
                <div className="about__me">
                    <img src={me} alt="my photo (zura beridze)" />
                    <div className="about__me__content">
                        <h2>Zura Beridze</h2>
                        <p className="about__p about_anim">
                            {`I'm Zura, a  front-end developer with a strong foundation in HTML, CSS, and JavaScript. I enjoy creating responsive websites using modern frameworks like React.js, and I have experience in adding dynamic animations using GSAP.`}
                        </p>

                    
                        <ul className="personal__info" >
                            {
                                personalInfo.map(item => (
                                        <li className="info" key={item.id}>
                                            <img src={item.img} alt="icons" /> 
                                            <p className="li__1">{item.name}</p>
                                            <p>:</p>
                                            <p className="li__3">{item.answer}</p>
                                        </li>
                                ))   
                            } 
                        </ul>
                        
                        <div className='content__btn'>
                            <a href='/CV.pdf' download='CV.pdf' className="btn contact__btn">DOWNLOAD MY CV</a>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <h2>Work <span>Experince</span> </h2>

                    <div className="exp__item__row">
                        {
                            experience.map(item => (
                                <div className="exp__item" key={item.id}>
                                    <h3><b>{item.name}</b></h3>
                                    <div className="exp__position">{item.position}</div>
                                    <div className="exp__date">{item.date}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="skills">
                    <h2>My <span>Skills</span></h2> 
                    <div className="skills__info" >
                        {
                            skills.map(item => (
                                <div className="lines" key={item.id}>
                                    <div className="name__percentage">
                                        <div>{item.name}</div>  
                                        <div>{item.percentage}%</div>
                                    </div>
                                    <div className="percentage__line">
                                        <div className="knowledge__level"
                                            style={
                                                {
                                                    width: `${item.percentage}%`,
                                                    backgroundColor: `#FF5722`,
                                                    height: `4px`,
                                                    position: `relative`,
                                                    zIndex: `1`,
                                                    borderRadius: `50px`,
                                                }
                                            }
                                        ></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
