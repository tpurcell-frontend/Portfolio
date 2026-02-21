// Components
import ChatIcon from '../components/ChatIcon'
import ContactSection from '../components/ContactSection'
import IntroSection from '../components/IntroSection'
import SkillsSection from '../components/SkillsSection'

function Home() {

    return (
        <>
            {/* Intro Section */}
            <IntroSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Chatbot */}
            <ChatIcon />
        </>
    )
}

export default Home;