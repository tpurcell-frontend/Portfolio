import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'
import Button from '../components/Button'

import { useFadeInBottom } from '../assets/animations/useScrollFadeIn';
import { useFadeInMoon } from '../assets/animations/useFadeInMoon';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
                    <h1 className="mb-0">Frontend Developer</h1>
                    <h2 className="mb-0 mt-2 intro-section__subheading">Always learning. Always growing.</h2>
                    <p className="mb-0 mt-4">6+ years building responsive React and WordPress applications with a focus on performance, accessibility, and clean code. From modernizing legacy codebases with TypeScript and Tailwind to implementing CI/CD pipelines and automated testing with Cypress, I write scalable and maintainable code that minimizes tech debt to keep your codebase evolving.</p>
                    <p className="mb-0 mt-4 intro-section__callout">Component-driven architecture · BEM methodology · JSDoc documentation · Code reviews · CI/CD</p>
                    <div className="mb-0 mt-4 intro-section__projects">
                        <h2>Projects</h2>
                        <div className="mb-0 pt-4 intro-section__projects__wrapper">
                            <div className="pt-3 intro-section__projects__item">
                                <a className="external" target="_blank" rel="noopener noreferrer" href="https://salve.edu/">Salve Regina University
                                    <RocketLaunchIcon className="rocketLaunchIcon" />
                                </a>
                            </div>
                            <div className="pt-3 intro-section__projects__item">
                                <a className="external" target="_blank" rel="noopener noreferrer" href="https://learn.hms.harvard.edu/">Harvard University
                                    <RocketLaunchIcon className="rocketLaunchIcon" />
                                </a>
                            </div>
                        </div>
                    </div>
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