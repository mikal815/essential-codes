import React, { useState } from 'react'
import './ContentTablet.css'
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import OCHS from '../../assets/images/OCHS.PNG'
import Shapes from '../../assets/images/Shapes.PNG';
import SurferDepot from '../../assets/images/surfer-depot.PNG';
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link';


export default function Content() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.id === "name") {
            setName(e.target.value)
        }

        else if (e.target.id === "email") {
            setEmail(e.target.value)
        }

        else {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = (e) => {

        if (validateEmail(email)) {
            e.preventDefault();

            const dataToSubmit = {
                name,
                email,
                message
            }

            axios.post("/sendMail", dataToSubmit).then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    alert('Message Sent!')
                }
            })

            resetForm();
        }
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className="content-tablet" id="top-link">
            <div className='navigation-tablet'>
                <div><Link smooth to="#services-link" className='navi-link-tablet'>Services</Link></div>
                <div><Link smooth to="#about-link" className='navi-link-tablet'>About</Link></div>
                <div><Link smooth to="#projects-link" className='navi-link-tablet'>Projects</Link></div>
                <div><Link smooth to="#hire" className='hire-tablet'>Hire Me</Link></div>
            </div>

            <div className="header-tablet">
                <h1>MIKE MENSINGER</h1>
                <p>Web Developer</p>
            </div>

            <div className="blockquote">
                <p>'Putting the pieces together for you and your business'-</p>
            </div>

            <div className="about" id="about-link">
                <h2>About</h2>
                <p>
                    Software developer building good looking functional websites and apps while
                    taking into consideration the user experience and accessibility of the end
                    product. Complex design and developmet challenges are solved using familiarity
                    with technologies and tools as well as coding abilities, analytical thinking, and creativity.
                    Certified "Full Stack Web Developer" through UPenn LPS coding boot camp &
                    The New York Code + Design Academy.
                </p>
            </div>

            <div className="services-tablet" id="services-link">
                <h2 id="services">Services</h2>
                <div className="services-item-container">
                    <div className="services-item">
                        <div className="services-inner-title-tablet">FRONTEND</div>
                        <div>HTML5</div>
                        <div>CSS3/Sass</div>
                        <div>Javascript(ES6)</div>
                        <div>React</div>
                        <div>Redux</div>
                        <div>Responsive Design</div>
                        <div>Photoshop</div>
                    </div>
                    <div className="services-item">
                        <div className="services-inner-title-tablet">SERVER</div>
                        <div className="services-sub-section">
                            <div>Node.js</div>
                            <div>Express</div>
                            <div>RESTful Web Services</div>
                            <div>Email Services</div>
                            <div>Payment systems</div>
                            <div>Caching</div>
                            <div>Configuration</div>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="services-inner-title-tablet">DATABASE</div>
                        <div className="services-sub-section">
                            <div>MongoDB</div>
                            <div>MySQL</div>
                            <div>Password hashing</div>
                            <div>Authentication</div>
                            <div>Authorization</div>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="services-inner-title-tablet">ADDITIONAL</div>
                        <div className="services-sub-section">
                            <div>Debugging</div>
                            <div>Testing/Error handling</div>
                            <div>Tech integration</div>
                            <div>Scaling</div>
                            <div>Project Architecture</div>
                            <div>Data Scraping</div>
                            <div>Version Control</div>
                            <div>Deployment</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-tablet" id="projects-link">
                <div className="portfolio-container-tablet">
                    <div className="project-tablet-sd">
                        <h2 id="portfolio-title-tablet">Projects</h2>
                        <div className="inner-title-tablet">SURFER DEPOT</div>
                        <a href="https://surfer-depot.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={SurferDepot} alt="Surfer Depot" />
                        </a>
                        <div className="git-link-container">
                            <a href="https://github.com/mikal815/surfer-depot" className="git-link">VIEW CODE</a>
                        </div>
                        <div className="caption-tablet">
                            Full stack e-commerce web app. Front-end tech used:
                            React, Redux, Material-UI, Bootstrap, HTML5, CSS3.
                            Back-end tech used: MongoDB, Node.js, and Express.
                            Uses login system with password hashing. User can browse an inventory of surfboards and filter
                            results by brand, length, shape,
                            and price. A logged in user can add or remove items from their cart which persists with
                            MongoDB.
                            Admin view allows the administrator to add new products onto
                            the
                            site. Users must pass authentication to access the admin area.
                        </div>
                    </div>

                    <div className="project-tablet-it">
                        <div className="inner-title-tablet">ICARUS TRAVEL</div>
                        <a href="https://superb-science.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <img src={Icarus} alt="Icarus" />
                        </a>
                        <div className="git-link-container">
                            <a href="https://github.com/mikal815/icarus" className="git-link">VIEW CODE</a>
                        </div>
                        <div className="caption-tablet">
                            Website built with HTML5, CSS, and Bootstrap.  Features scrolling image carousels and various animations.
                        </div>
                    </div>

                    <div className="project-tablet-ss">
                        <div className="inner-title-tablet">SHAPE SHIFTER</div>
                        <a href="https://fluffy-zoo.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <img src={Shapes} alt="Shape Shifter" />
                        </a>
                        <div className="git-link-container">
                            <a href="https://github.com/mikal815/clicky-game" className="git-link">VIEW CODE</a>
                        </div>
                        <div className="caption-tablet">
                            Memory game build with React. Goal is to click each shape
                            without clicking the same shape twice. Images are randomly repositioned
                            after every click increasing difficulty. 12 shapes in total; once your score
                            reaches 12 you win. Click a shape twice and score is reset to zero and a new game begins. Top
                            score indicator helps you gauge your progress.
                        </div>
                    </div>

                    <div className="project-tablet-bps">
                        <div className="inner-title-tablet">BOARDWALK PIER STAGE</div>
                        <a href="https://bps-site.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <img src={BPS} alt="Boardwalk Pier Stage" />
                        </a>
                        <div className="git-link-container">
                            <a href="https://github.com/mikal815/the-event" className="git-link">VIEW CODE</a>
                        </div>
                        <div className="caption-tablet">
                            Featuring React on the frontend as well as a countdown clock which displays the amount of
                            days, hours, minutes and seconds until the event. Other features include a carousel and a side menu drawer.
                            After clicking a link the user is vertically scrolled directly to the appropriate content.
                            Animations give a zoom effect on certain elements. An iframe shows the venue's
                            location on google maps.
                        </div>
                    </div>

                    <div className="project-tablet-ochs">
                        <div className="inner-title-tablet">OCHS BASEBALL</div>
                        <a href="https://ochs-baseball.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <img src={OCHS} alt="OCHS Baseball" />
                        </a>
                        <div className="git-link-container">
                            <a href="https://github.com/mikal815/ochs" className="git-link">VIEW CODE</a>
                        </div>
                        <div className="caption-tablet">
                            Featuring React for frontend framework, Twitter plugin and carousel. Layout using CSS Grid.
                        </div>
                    </div>

                    <div className="project-tablet-mtme">
                        <div className="inner-title-tablet">MUSIC TO MY EARS</div>
                        <a href="https://music-to-my-ears-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={MTME} alt="Music to My Ears" />
                        </a>
                        <div className="git-link-container">
                            <a href="https://github.com/mikal815/ear-trainer" className="git-link">VIEW CODE</a>
                        </div>
                        <div className="caption-tablet">
                            Ear training app for musicians using intervals.
                            The app runs a sequence of two notes consecutively
                            and the user must mimic the same sequence using only their ears as a guide. The key
                            farthest to the left is the key the user must start on.
                            Built using React on the frontend and Node.js, Express,
                            and MongoDB (save score) on the backend. Also features a login system using
                            Passport.js.
                        </div>
                    </div>
                </div>
            </div>

            <div className="blockquote">
                <div className="tag-line-tablet">'Programming the future!'-<br></br></div>
            </div>

            <div className="contact-tablet" id="hire">
                <h2>Contact</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="input-tablet" id="name" placeholder="Name" value={name} onChange={handleChange}></input><br></br>
                    <input className="input-tablet" id="email" placeholder="Email" type="email" value={email} onChange={handleChange}></input><br></br>
                    <textarea className="textarea-tablet" id="message" placeholder="Message" value={message} onChange={handleChange}></textarea><br></br>
                    <button className="btn span-row-2" onClick={handleSubmit}>Send</button>
                </form>
            </div>

            <div className="footer-tablet">
                <Link smooth to="#top-link">Top</Link>
                <Link smooth to="#about-link">About</Link>
                <Link smooth to="#services-link">Services</Link>
                <Link smooth to="#projects-link">Projects</Link>
            </div>
        </div>
    )
}
