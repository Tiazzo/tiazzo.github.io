import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'

const links = [
    {href: '#about', label: 'About'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
    {href: '#education', label: 'Education'},
]


export default function Navigation({activeSection}) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* Navbar mobile */}
            <nav
                className="lg:hidden fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
                <span className="font-bold text-lg">Your Name</span>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
                    {menuOpen ? <FaTimes/> : <FaBars/>}
                </button>
            </nav>

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
                <div className="text-center pt-35">
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

                <div className="mt-auto flex flex-col gap-4 text-b ">
                    <a
                        href="mailto:you@email.com"
                        className="flex items-center gap-2 text-neutral-500 hover:text-primary"
                    >
                        <FaEnvelope/> you@email.com
                    </a>
                    <div className="flex gap-4 text-neutral-500 text-lg">
                        <a href="https://github.com/username" target="_blank" className="hover:text-primary">
                            <FaGithub/>
                        </a>
                        <a href="https://linkedin.com/in/username" target="_blank" className="hover:text-primary">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    )
}