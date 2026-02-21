// Styles
import '../assets/styles/components/SkillsSection.scss';

export default function SkillsSection() {

    function SkillsList({title, items}: {title: string, items: string[]}) {

        return(
            <div className="skills-section__list">
                <h3>{title}</h3>
                <ul>
                    {items.map((item: string, index: number) => (
                        <li
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <section className="skills-section">
            <div className="container">
                <h2>Skills & Knowledge</h2>
                <div className="skills-section__wrapper">
                    <SkillsList title="Programming" items={['JavaScript', 'TypeScript', 'PHP', 'React 18', 'Next.js', 'Redux', 'Node.js', 'jQuery']}/>
                    <SkillsList title="Styling" items={['CSS', 'SASS', 'CSS Modules', 'Styled-Components', 'Bootstrap', 'Material UI', 'Tailwind', 'Foundation']}/>
                    <SkillsList title="Standards, Build Tools & AI" items={['Webpack', 'Vite', 'npm', 'Yarn', 'WCAG 2.2', 'Claude', 'CoPilot']}/>
                    <SkillsList title="Collaboration Tools" items={['Jira', 'Confluence', 'GitHub', 'Git', 'Figma']}/>
                    <SkillsList title="Testing" items={['Chrome Developer Tools', 'Jest', 'Cypress', 'BrowserStack']}/>
                    <SkillsList title="CMS" items={['WordPress', 'Drupal 11']}/>
                </div>
            </div>
        </section>
    )
}
