// Components
import Button from '../components/Button'

// Styles
import '../assets/styles/components/ContactSection.scss';

export default function ContactSection() {

    return (
      <section className="contact-section">
            <div className="container">
                <h2>Resources</h2>
                <div className="button-wrapper mt-4">
                    <Button to="/planet-generator" className="animation-glow btn-homepage" text="Visit the Planet Generator" />
                    <Button target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/travis-purcell-97b365174/" className="animation-glow btn-homepage" text="Let's Connect" />
                    <Button target="_blank" rel="noopener noreferrer" to="https://github.com/tpurcell-frontend" className="animation-glow btn-homepage" text="See Code Repos" />
                </div>
            </div>
        </section>
    )
}
