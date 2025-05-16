export default function Navbar() {
    return (
        <nav className="lg:hidden fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur z-50">
            <div className="max-w-3xl mx-auto flex justify-between items-center px-4 py-3">
                <span className="font-bold text-lg">Il Tuo Nome</span>
                <div className="space-x-6">
                    <a href="#about" className="hover:text-teal-400">About</a>
                    <a href="#experience" className="hover:text-teal-400">Experience</a>
                    <a href="#projects" className="hover:text-teal-400">Projects</a>
                </div>
            </div>
        </nav>
    );
}