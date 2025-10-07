import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'
import Button from '../components/Button.jsx'

import { useFadeInBottom } from '../assets/animations/useScrollFadeIn';
import { useFadeInMoon } from '../assets/animations/useFadeInMoon';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
                    <p className="mb-0 mt-4">I'm a Front-End Developer with over 6 years of experience crafting responsive, scalable, and functional web applications. I specialize in React.js, modern JavaScript, and CMS platforms like Drupal and WordPress.</p>
                    <p className="mb-0 mt-4">At my core, I’m a problem-solver and lifelong learner. Whether it’s building custom components, integrating RESTful APIs, or optimizing page performance, I take pride in writing clean, maintainable code that meets both user and business needs.</p>
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
                                <div className={`technology-list mt-5 col-12 col-md-4 fade-in-bottom ${bottomClassName}`}  ref={bottomRef}>
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
                                                <ArrowDownwardIcon />
                                            </>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`technology-list mt-5 col-12 col-md-4 ${bottomClassName}`}  ref={bottomRef}>
                                    <h3>Deployment & Workflow</h3>
                                    <ul>
                                        {platforms.map((item, index) => (
                                            <>
                                                <li
                                                    key={item}
                                                    className={`fade-in-bottom ${bottomClassName}`} 
                                                    ref={bottomRef}
                                                    style={{ animationDelay: `${index * 0.6}s` }}
                                                >
                                                    {item}
                                                </li>
                                                <ArrowDownwardIcon />
                                            </>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`technology-list mt-5 col-12 col-md-4 ${bottomClassName}`}  ref={bottomRef}>
                                    <h3>CMS & Version Control</h3>
                                    <ul>
                                        {cms.map((item, index) => (
                                            <>
                                                <li
                                                    key={item}
                                                    className={`fade-in-bottom ${bottomClassName}`} 
                                                    ref={bottomRef}
                                                    style={{ animationDelay: `${index * 0.7}s` }}
                                                >
                                                    {item}
                                                </li>
                                                <ArrowDownwardIcon />
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
                        <Button to="/planet-generator" buttonclassName="animation-glow btn-homepage" text="Get Started" />
                        <Button target="_blank" to="https://www.linkedin.com/in/travis-purcell-97b365174/" buttonclassName="animation-glow btn-homepage" text="Let's Connect" />
                        <Button target="_blank" to="https://github.com/tpurcell-frontend" buttonclassName="animation-glow btn-homepage" text="Code Repos" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;