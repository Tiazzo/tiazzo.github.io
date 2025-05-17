import {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import {FiSun, FiMoon} from 'react-icons/fi'

const links = [{href: '#about', label: 'About'}, {href: '#experience', label: 'Experience'}, {
    href: '#projects', label: 'Projects'
}, {href: '#education', label: 'Education'},]


export default function Navigation({activeSection}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light'
        setTheme(storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (<>
        {/* Navbar mobile */}
        <nav
            className="lg:hidden fixed top-0 left-0 w-full bg-base-100 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <span className="font-extrabold text-2xl text-base-content">Mattia Carlino</span>
                <button onClick={toggleTheme}
                        className="text-xl text-base-content/60 hover:text-primary transition"
                        aria-label="Toggle Theme">
                    {theme === 'coffee' ? <FiSun/> : <FiMoon/>}
                </button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-base-content">
                {menuOpen ? <FaTimes/> : <FaBars/>}
            </button>
        </nav>


        {/* Contacts*/}
        <div
            className="lg:hidden mt-20 px-6 pb-6 pt-4 flex flex-col gap-4 text-[1.05rem] border-t border-base-content/20">
            <div className="flex gap-4 text-base-content/60 text-xl">
                <a href="mailto:..." className="hover:text-primary" aria-label="Email"><FaEnvelope/></a>
                <a href="https://github.com/username" target="_blank" className="hover:text-primary"
                   aria-label="GitHub"><FaGithub/></a>
                <a href="https://linkedin.com/in/username" target="_blank" className="hover:text-primary"
                   aria-label="LinkedIn"><FaLinkedin/></a>
            </div>
        </div>


        {/* Dropdown menu mobile */}
        {menuOpen && (<div
            className="lg:hidden fixed top-16 left-0 w-full bg-base-100 backdrop-blur z-50 px-6 py-4 space-y-4 text-center">
            {links.map((link) => (<a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base-content hover:text-primary"
            >
                {link.label}
            </a>))}
        </div>)}


        {/* Sidebar desktop */}
        <aside
            className="hidden lg:flex fixed top-0 left-0 h-screen w-1/2 flex-col items-center justify-start p-8 bg-base-100 backdrop-blur z-50">


            <div className="w-full max-w-xs flex flex-col items-start pt-32">
                <h1 className="text-5xl font-bold mb-4 text-base-content">Mattia Carlino</h1>
                <p className="text-2xl font-semibold mb-5 text-base-content/70">Computer Engineer Student</p>
                {/* Contacts*/}
                <div className="w-full max-w-xs px-1 mb-20">
                    <div className="flex justify-between items-center text-xl text-base-content/60">
                        <div className="flex gap-4">
                            <a href="mailto:mattia.carlino22@gmail.com" className="hover:text-primary"
                               aria-label="Email"><FaEnvelope/></a>
                            <a href="https://github.com/Tiazzo" target="_blank" className="hover:text-primary"
                               aria-label="GitHub"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/mattia-carlino-8b6071228/" target="_blank"
                               className="hover:text-primary" aria-label="LinkedIn"><FaLinkedin/></a>
                        </div>
                        <button onClick={toggleTheme} className="hover:text-primary transition text-2xl"
                                aria-label="Toggle Theme">
                            {theme === 'dark' ? <FiSun/> : <FiMoon/>}
                        </button>
                    </div>
                </div>

                <nav className="flex flex-col space-y-4 text-2xl">
                    {links.map((link) => {
                        const isActive = activeSection === link.href.slice(1)
                        return (<a
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-2 transition font-medium ${isActive ? 'text-primary' : 'text-base-content/60'}`}
                            >
                                      <span
                                          className={`h-2 w-2 rounded-full bg-primary transition-transform duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></span>
                                {link.label}
                            </a>

                        )
                    })}


                </nav>
            </div>


        </aside>
    </>)
}