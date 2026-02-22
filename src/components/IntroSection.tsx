// Animations
import { useFadeInBottom } from '../assets/animations/useScrollFadeIn';
import { useFadeInMoon } from '../assets/animations/useFadeInMoon';

// Components
import MoonBackground from '../subcomponents//MoonBackground';

// Material UI
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Styles
import '../assets/styles/components/IntroSection.scss'
import '../assets/styles/components/MoonSunWrapper.scss'

export default function IntroSection() {

    return(
        <section className="intro-section">
            <div className="container">
                {/* Heading */}
                <h1 className="intro-section__heading">Frontend Developer</h1>
                {/* Subheading */}
                <p className="intro-section__subheading h2 mt-2">Always learning. Always growing.</p>
                {/* Description */}
                <div className="intro-section__description mt-8">
                    <p>6+ years building responsive React and WordPress applications with a focus on performance, accessibility, and clean code. From modernizing legacy codebases with TypeScript and Tailwind to implementing CI/CD pipelines and automated testing with Cypress, I write scalable and maintainable code that minimizes tech debt to keep your codebase evolving.</p>
                </div>
                {/* Callout */}
                <p className="intro-section__callout mt-8 lg:mt-12">Component-driven architecture · BEM methodology · AI Integration · Code reviews · CI/CD</p>
                {/* Group - Turn this into a component */}
                <div className="intro-section__group mt-12 md:mt-16 lg:mt-20">
                    <h2>Projects</h2>
                    <p className="mt-4 lg:mt-8">I have built or heavily contributed to the following enterprise-level projects:</p> 
                    <div className="intro-section__projects__wrapper mt-2 lg:mt-4">
                        <div className="intro-section__projects__item">
                            <a className="external" target="_blank" rel="noopener noreferrer" href="https://salve.edu/">Salve Regina University
                                <RocketLaunchIcon className="rocketLaunchIcon" />
                            </a>
                        </div>
                        <div className="intro-section__projects__item">
                            <a className="external" target="_blank" rel="noopener noreferrer" href="https://learn.hms.harvard.edu/">Harvard University
                                <RocketLaunchIcon className="rocketLaunchIcon" />
                            </a>
                        </div>
                        <div className="intro-section__projects__item">
                            <a className="external" target="_blank" rel="noopener noreferrer" href="https://y12investmentpartners.com/">Y12 Investment Partners
                                <RocketLaunchIcon className="rocketLaunchIcon" />
                            </a>
                        </div>
                    </div>
                    <p className="mt-8 lg:mt-12">Additionally, here are projects built on this site:</p> 
                    <div className="intro-section__projects__wrapper mt-2 lg:mt-4">
                        <div className="intro-section__projects__item">
                            <a className="external" rel="noopener noreferrer" href="/projects/planet-generator">Planet Generator
                                <RocketLaunchIcon className="rocketLaunchIcon" />
                            </a>
                        </div>
                        <div className="intro-section__projects__item">
                            <a className="external" rel="noopener noreferrer" href="/projects/dashboard">Dashboard
                                <RocketLaunchIcon className="rocketLaunchIcon" />
                            </a>
                        </div>
                        <div className="intro-section__projects__item">
                            <a className="external" rel="noopener noreferrer" href="/projects/todo-list">ToDo List
                                <RocketLaunchIcon className="rocketLaunchIcon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Group */}
                <div className="intro-section__group mt-12 md:mt-16 lg:mt-20">
                    <h2>Skills</h2>
                    <p className="mt-4 lg:mt-8">The skills used in those projects include 
                        <span className="intro-section__skill"> Drupal 11</span>,
                        <span className="intro-section__skill"> WordPresss</span>,
                        <span className="intro-section__skill"> Twig </span>,
                        <span className="intro-section__skill"> JavaScript </span>,
                        <span className="intro-section__skill"> PHP</span>,
                        <span className="intro-section__skill"> Node.js</span>,
                        <span className="intro-section__skill"> CSS</span>,
                        <span className="intro-section__skill"> SASS</span>,
                        <span className="intro-section__skill"> Foundation</span>,
                        <span className="intro-section__skill"> Pantheon</span>,
                        <span className="intro-section__skill"> Docker</span>,
                        <span className="intro-section__skill"> Drush</span>,
                        <span className="intro-section__skill"> REST APIs</span>,
                        <span className="intro-section__skill"> Webpack</span>,
                        <span className="intro-section__skill"> Yarn</span>,
                        <span className="intro-section__skill"> Npm</span>,
                        <span className="intro-section__skill"> WCAG 2.2</span>.
                    </p>
                    <p className="mt-2 lg:mt-4">Additional skills will be displayed on projects contained in this portfolio.</p>
                </div>
                {/* Moon Background */}
                <MoonBackground />
            </div>
        </section>
    )
}