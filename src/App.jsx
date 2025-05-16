import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Education from './components/Education'
import Contacts from './components/Contacts'
import {
    ProgressBar,
        FadeInSection,
        SmoothProgressBar,
        ColorChangeOnScroll
} from './components/animations/index.jsx'
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";


function App() {
    return (
        <>
            <SmoothProgressBar />
            <ColorChangeOnScroll />
        <div className="bg-neutral-900 text-neutral-100 min-h-screen font-sans">

            {/* Mobile Navbar */}
            <nav className="lg:hidden fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur z-50">
                <Navbar />
            </nav>

            {/* Desktop Layout */}
            <div className="lg:flex items-start pt-24">
                {/* Sidebar */}
                <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-neutral-900/80 backdrop-blur z-50 p-6">                    <div className="flex flex-col space-y-6 pt-24">
                        <span className="font-bold text-lg" >Il Tuo Nome</span>
                        <nav className="flex flex-col space-y-4">
                            <a href="#about" className="hover:text-teal-400">About</a>
                            <a href="#experience" className="hover:text-teal-400">Experience</a>
                            <a href="#projects" className="hover:text-teal-400">Projects</a>
                            <a href="#education" className="hover:text-teal-400">Education</a>

                        </nav>
                    </div>
                    {/* Contatti fissi in basso */}
                    <div className="mt-auto flex flex-col gap-4 text-sm pt-10">
                        <a
                            href="mailto:tuo@email.com"
                            className="flex items-center gap-2 text-neutral-500 hover:text-primary"
                        >
                            <FaEnvelope /> tuo@email.com
                        </a>
                        <div className="flex gap-4 text-neutral-500 text-lg">
                            <a href="https://github.com/tuo-username" target="_blank" className="hover:text-primary">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/tuo-username" target="_blank" className="hover:text-primary">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Content right column */}
                <main className="lg:ml-64 flex-1">
                <div className="max-w-3xl mx-auto px-6">
                    <FadeInSection>
                        <About />
                    </FadeInSection>

                    <FadeInSection>
                        <Experience />
                    </FadeInSection>

                    <FadeInSection>
                        <Projects />
                    </FadeInSection>

                    <FadeInSection>
                        <Education />
                    </FadeInSection>

                    <FadeInSection>
                        <Contacts />
                    </FadeInSection>

                    <FadeInSection>
                        <Footer />
                    </FadeInSection>
                    </div>
                </main>
            </div>
        </div>
        </>
    )
}
export default App
