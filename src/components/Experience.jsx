const experiences = [
    {
        role: "Frontend Developer",
        company: "Azienda XYZ",
        companyUrl: "https://azienda.xyz",
        date: "Gen 2022 – Presente",
        description:
            "Ho lavorato allo sviluppo e alla manutenzione di interfacce utente responsive usando React e Tailwind CSS. Collaborato con il team di backend per integrare API REST e ottimizzare le performance dell'applicazione.",
        tech: ["React", "Tailwind", "TypeScript"],
    },
    {
        role: "Junior Developer",
        company: "Dev Company",
        companyUrl: "https://devcompany.com",
        date: "Set 2020 – Dic 2021",
        description:
            "Ho supportato lo sviluppo di dashboard interne e strumenti per il team marketing. Creato componenti riutilizzabili in Vue e migliorato l'accessibilità.",
        tech: ["Vue", "Sass", "Git"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="pt-24 pb-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-10">Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                            <div className="text-sm text-neutral-500">{exp.date}</div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    {exp.role} ·{" "}
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary underline hover:text-primary-focus"
                                    >
                                        {exp.company}
                                    </a>
                                </h3>
                                <p className="mt-2 text-neutral-400">{exp.description}</p>
                                <ul className="flex flex-wrap gap-2 mt-4 text-sm text-neutral-500">
                                    {exp.tech.map((tech, i) => (
                                        <li key={i} className="badge badge-outline">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
