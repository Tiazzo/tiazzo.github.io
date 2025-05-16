const education = [
    {
        institution: "Politecnico di Torino",
        degree: "Laurea Magistrale in Ingegneria dell'Informazione",
        date: "2022 – Presente",
        description: "...",
        courses: ["AI", "Machine Learning", "Computer Vision"],
        logo: "/images/logo_politecnico-cropped.svg",
        type: "magistrale",
    },
    {
        institution: "Università di XYZ",
        degree: "Laurea Triennale in Ingegneria Informatica",
        date: "2018 – 2021",
        description: "...",
        courses: ["Java", "Web Dev", "Sistemi Operativi"],
        logo: "images/logo_unito_verticale-cropped.svg",
        type: "triennale",
    },
]


export default function Education() {
    return (
        <section id="education" className="pt-24 pb-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-10">Education</h2>
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 items-start"
                        >
                            {/* Colonna sinistra */}
                            <div className="flex flex-col items-center gap-2 text-sm text-neutral-500">
                                <img
                                    src={edu.logo}
                                    alt={edu.institution}
                                    className="w-26 h-26 rounded-full object-cover border border-base-300 bg-white p-0.5"
                                />
                                <span>{edu.date}</span>
                            </div>

                            {/* Colonna destra */}
                            <div>
                                <h3 className="text-lg font-bold flex items-center gap-2 flex-wrap">
                                    {edu.degree} ·{" "}
                                    <span className="text-primary">{edu.institution}</span>

                                    {edu.type === 'magistrale' && (
                                        <span className="badge badge-neutral text-xs">🎓 Magistrale</span>
                                    )}
                                    {edu.type === 'triennale' && (
                                        <span className="badge badge-outline text-xs">📘 Triennale</span>
                                    )}
                                </h3>

                                <p className="mt-2 text-neutral-400">{edu.description}</p>
                                <ul className="flex flex-wrap gap-2 mt-4 text-sm text-neutral-500">
                                    {edu.courses.map((course, i) => (
                                        <li key={i} className="badge badge-outline">
                                            {course}
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
