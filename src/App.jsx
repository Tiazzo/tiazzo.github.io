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
                rootMargin: '-30% 0px -30% 0px',
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
            <div className="bg-base-100 text-base-content min-h-screen overflow-x-hidden font-sans">
                <Navigation activeSection={activeSection}/>
                <div className="lg:flex items-start">
                    <main className="lg:pt-41 lg:ml-[50%] px-20 w-full">
                    <div className="max-w-3xl mx-auto">
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
