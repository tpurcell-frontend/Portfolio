import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'
import Button from '../components/Button'

import { useFadeInBottom } from '../assets/animations/useScrollFadeIn';
import { useFadeInMoon } from '../assets/animations/useFadeInMoon';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Home() {
  const { ref: bottomRef, className: bottomClassName } = useFadeInBottom();
    const { ref: moonRef, className: moonClassName } = useFadeInMoon();

    const tools = [
        'React.js',
        'Material UI',
        'Cypress React Testing',
        'Bootstrap'
    ];

    const platforms = [
        'Pantheon',
        'Node.js',
        'Docker',
        'Jira',
    ];

    const cms = [
        'WordPress',
        'Drupal',
        'Git',
        'Bitbucket'
    ];

    return (
        <>
            { /* Starfield Background */}
            <div className="starfield">
                <div className="stars"></div>
            </div>

            {/* Header */}
            <Header />

            <section className="intro-section">
                <div className="container">
                    <h1 className="mb-0">Hello, my name is Travis. </h1>
                    <p className="mb-0 mt-4">I'm a Full-Stack Developer looking for a React or JavaScript-focused Full-Time position.</p>
                    <p className="mb-0 mt-4">For over 6 years, I've crafted numerous responsive, scalable, and functional web applications for presitigous financial institutions and universities.</p>
                    <p className="mb-0 mt-4">From developing custom components, engineering Back-End architecture, or optimizing the user experience, I strive to write clean and efficient code that serves as a lasting asset to business needs.</p>
                    <p className="mb-0 mt-4">My previous projects include:</p>
                    <ul>
                        <li><a className="external" target="_blank" rel="noopener noreferrer" href="https://salve.edu/">Salve Regina University</a><ArrowOutwardIcon className="external"/></li>
                        <li><a className="external" target="_blank" rel="noopener noreferrer" href="https://y12investmentpartners.com/">Y-12 Investment Partners</a><ArrowOutwardIcon className="external"/></li>
                        <li>Yale University</li>
                        <li>Harvard University</li>
                    </ul>
                    {/* Moon Background */}
                    <div className={`moon-wrapper mt-5 ${moonClassName}`}  ref={moonRef}>
                        <div className="moon"></div>
                    </div>
                </div>
            </section>
            <section className={`technology-section ${bottomClassName}`}  ref={bottomRef}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Skills & Knowledge</h2>
                        </div>
                    </div>
                    <div className="technology-list-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className={`technology-list col-12 col-md-4 fade-in-bottom ${bottomClassName}`}  ref={bottomRef}>
                                    <h3>Tools & Frameworks</h3>
                                    <ul>
                                        {tools.map((item, index) => (
                                            <>
                                                <li
                                                    key={item}
                                                    className={`fade-in-bottom ${bottomClassName}`} 
                                                    ref={bottomRef}
                                                    style={{ animationDelay: `${index * 0.5}s` }}
                                                >
                                                    {item}
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`technology-list col-12 col-md-4 ${bottomClassName}`}  ref={bottomRef}>
                                    <h3>Deployment & Workflow</h3>
                                    <ul>
                                        {platforms.map((item, index) => (
                                            <>
                                                <li
                                                    key={item}
                                                    className={`fade-in-bottom ${bottomClassName}`} 
                                                    ref={bottomRef}
                                                    style={{ animationDelay: `${index * 0.5}s` }}
                                                >
                                                    {item}
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`technology-list col-12 col-md-4 ${bottomClassName}`}  ref={bottomRef}>
                                    <h3>CMS & Version Control</h3>
                                    <ul>
                                        {cms.map((item, index) => (
                                            <>
                                                <li
                                                    key={item}
                                                    className={`fade-in-bottom ${bottomClassName}`} 
                                                    ref={bottomRef}
                                                    style={{ animationDelay: `${index * 0.5}s` }}
                                                >
                                                    {item}
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                {/* Stars Background */}
                <div className="container">
                    <h2>Resources</h2>
                    <div className="button-wrapper mt-4">
                        <Button to="/planet-generator" className="animation-glow btn-homepage" text="Visit the Planet Generator" />
                        <Button target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/travis-purcell-97b365174/" className="animation-glow btn-homepage" text="Let's Connect" />
                        <Button target="_blank" rel="noopener noreferrer" to="https://github.com/tpurcell-frontend" className="animation-glow btn-homepage" text="See Code Repos" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;