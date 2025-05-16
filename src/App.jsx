import './App.css'
import {useEffect, useState} from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Education from './components/Education'
import Navigation from './components/Navigation'

const sections = ['about', 'experience', 'projects', 'education']

function App() {
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting)
                        setActiveSection(entry.target.id);

                });
            },
            {
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0.1,
            }
        );

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <>
            <div className="bg-neutral-900 text-neutral-100 min-h-screen overflow-x-hidden font-sans">
                <Navigation activeSection={activeSection}/>
                <div className="lg:flex items-start pt-22">
                    <main className="lg:ml-[50%] pt-24 px-6 w-full">
                        <div className="max-w-3xl mx-auto px-6">
                            <About/>
                            <Experience/>
                            <Projects/>
                            <Education/>
                            <Footer/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default App
