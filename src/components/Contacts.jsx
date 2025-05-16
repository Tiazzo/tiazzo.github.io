import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contacts() {
    return (
        <section id="contacts" className="pt-24 pb-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                <p className="text-neutral-400 text-lg mb-6">
                    Hai una domanda, una proposta o semplicemente vuoi salutare?
                    Scrivimi pure, sarò felice di rispondere.
                </p>

                {/* Email */}
                <a
                    href="mailto:tuo@email.com"
                    className="btn btn-outline btn-primary mb-8"
                >
                    📧 tuo@email.com
                </a>

                {/* Social links con icone */}
                <div className="flex justify-center gap-6 text-neutral-500 text-lg">
                    <a
                        href="https://github.com/tuo-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/tuo-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
