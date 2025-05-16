import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import {FiSun, FiMoon} from 'react-icons/fi'

const links = [
    {href: '#about', label: 'About'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
    {href: '#education', label: 'Education'},
]


export default function Navigation({activeSection}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <>
            {/* Navbar mobile */}
                <nav
                    className="lg:hidden fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-lg">Your Name</span>
                        <button onClick={toggleTheme} className="text-xl text-neutral-400 hover:text-primary transition"
                                aria-label="Toggle Theme">
                            {theme === 'dark' ? <FiSun/> : <FiMoon/>}
                        </button>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
                        {menuOpen ? <FaTimes/> : <FaBars/>}
                    </button>
                </nav>

            {/* Contatti mobile visibili sempre */}
                <div
                    className="lg:hidden mt-20 px-6 pb-6 pt-4 flex flex-col gap-4 text-[1.05rem] border-t border-neutral-700">

                    <div className="flex gap-4 text-neutral-500 text-xl">
                        <a
                            href="mailto:you@email.com"
                            className="text-neutral-500 hover:text-primary "
                            aria-label="Email"
                        >
                            <FaEnvelope/>
                        </a>
                        <a href="https://github.com/username" target="_blank" className="hover:text-primary">
                            <FaGithub/>
                        </a>
                        <a href="https://linkedin.com/in/username" target="_blank" className="hover:text-primary">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>

                {/* Dropdown menu mobile */}
                {menuOpen && (
                    <div
                        className="lg:hidden fixed top-16 left-0 w-full bg-neutral-900/95 backdrop-blur z-50 px-6 py-4 space-y-4 text-center">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block text-neutral-100 hover:text-teal-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

                {/* Sidebar desktop */}
                <aside
                    className="hidden lg:flex fixed top-0 left-0 h-screen w-1/2 flex-col items-center justify-between p-8 bg-neutral-900/80 backdrop-blur z-50">

                    <div className="w-full max-w-xs flex flex-col items-start pt-32">
                        <h1 className="text-5xl font-bold mb-4">Mattia Carlino</h1>
                        <p className="text-lg mb-30">
                            Bla bla
                        </p>
                        <nav className="flex flex-col space-y-4">
                            {links.map((link) => {
                                const isActive = activeSection === link.href.slice(1)
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`group flex items-center gap-2 transition font-medium ${
                                            isActive ? 'text-teal-400' : 'text-neutral-500'
                                        }`}
                                    >
                                  <span
                                      className={`h-2 w-2 rounded-full bg-teal-400 transition-transform duration-300 ${
                                          isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                      }`}
                                  ></span>
                                        {link.label}
                                    </a>
                                )
                            })}


                        </nav>
                    </div>

                    <div className="mt-auto mb-25 w-full max-w-xs px-1">
                        <div className="flex justify-between items-center text-2xl text-neutral-500">
                            <div className="flex gap-4">
                                <a href="mailto:..." className="hover:text-primary" aria-label="Email">
                                    <FaEnvelope/>
                                </a>
                                <a href="https://github.com/username" target="_blank" className="hover:text-primary"
                                   aria-label="GitHub">
                                    <FaGithub/>
                                </a>
                                <a href="https://linkedin.com/in/username" target="_blank"
                                   className="hover:text-primary" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </a>
                            </div>

                            {/* toggle tema a destra */}
                            <button
                                onClick={toggleTheme}
                                className="hover:text-primary transition text-xl"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FiSun/> : <FiMoon/>}
                            </button>
                        </div>
                    </div>
                </aside>
        </>
    )
}