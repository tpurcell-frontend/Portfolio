// Animations
import { useFadeInBottom } from '../assets/animations/useScrollFadeIn';
import { useFadeInMoon } from '../assets/animations/useFadeInMoon';

// Material UI
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Styles
import '../assets/styles/components/IntroSection.scss'

export default function IntroSection() {
        const { ref: bottomRef, className: bottomClassName } = useFadeInBottom();
    const { ref: moonRef, className: moonClassName } = useFadeInMoon();

    return(
        <section className="intro-section">
            <div className="container">
                <h1 className="intro-section__heading">Frontend Developer</h1>
                <h2 className="intro-section__subheading">Always learning. Always growing.</h2>
                <div className="intro-section__description">
                    <p>6+ years building responsive React and WordPress applications with a focus on performance, accessibility, and clean code. From modernizing legacy codebases with TypeScript and Tailwind to implementing CI/CD pipelines and automated testing with Cypress, I write scalable and maintainable code that minimizes tech debt to keep your codebase evolving.</p>
                </div>
                <p className="intro-section__callout">Component-driven architecture · BEM methodology · AI Integration · Code reviews · CI/CD</p>
                <div className="intro-section__group">
                    <h2>Projects</h2>
                    <p className="text-left">I have built or heavily contributed to the following enterprise-level projects:</p> 
                    <div className="intro-section__projects__wrapper">
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
                </div>
                <div className="intro-section__group">
                    <h2>Skills</h2>
                    <p className="text-left">The skills used in those projects include 
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
                    <p>Additional skills will be displayed on projects contained in this portfolio.</p>
                </div>
                {/* Moon Background */}
                <div className={`moon-wrapper mt-5 ${moonClassName}`}  ref={moonRef}>
                    <div className="moon"></div>
                </div>
            </div>
        </section>
    )
}