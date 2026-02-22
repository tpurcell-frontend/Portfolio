// Components
import Button from '../components/Button'

// Styles
import '../assets/styles/components/ContactSection.scss';

export default function ContactSection() {

    return (
      <section className="contact-section">
            <div className="container">
                <h2>Resources</h2>
                <div className="button-wrapper mt-4 md:mt-8">
                    <Button target="_blank" rel="noopener noreferrer" to="mailto:travis.n.purcell@gmail.com" className="animation-glow btn-homepage" text="Email Me" />
                    <Button target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/travis-purcell-97b365174/" className="animation-glow btn-homepage" text="Connect on LinkedIn" />
                    <Button target="_blank" rel="noopener noreferrer" to="https://github.com/tpurcell-frontend" className="animation-glow btn-homepage" text="See Code Repos" />
                </div>
            </div>
        </section>
    )
}
