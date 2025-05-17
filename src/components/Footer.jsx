export default function Footer() {
    return (
        <footer className="py-8 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Designed by Mattia Carlino in Visual Studio Code. Built with React, Tailwind CSS, Vite, and styled using daisyUI. Deployed with care. Typeset in Inter.
        </footer>
    );
}
