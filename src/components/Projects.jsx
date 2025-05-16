const projects = [
    {
        title: "AI Captioning",
        description:
            "Sistema per generare descrizioni automatiche di immagini con deep learning (CNN + RNN).",
        tech: ["PyTorch", "CNN", "LSTM"],
        link: "https://github.com/tuo-utente/ai-captioning",
        image: "images/gas_station.png", // metti il file in /public/images/
    },
    {
        title: "Backup Voice App",
        description:
            "App desktop che esegue backup tramite comandi vocali. Sviluppata in Python con riconoscimento vocale.",
        tech: ["Python", "SpeechRecognition", "Tkinter"],
        link: "https://github.com/tuo-utente/backup-voice-app",
        image: "images/garden.jpg",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="pt-24 pb-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-10">Projects</h2>
                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card lg:card-side bg-base-100 shadow-md"
                        >
                            {/* Immagine */}
                            <figure className="w-full lg:w-48">
                                <img src={project.image} alt={project.title} className="object-cover w-full h-full"/>
                            </figure>

                            {/* Contenuto */}
                            <div className="card-body">
                                <h3 className="card-title">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>
                                <p className="text-neutral-400">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="badge badge-outline text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
