const education = [{
    institution: "Politecnico di Torino",
    degree: "Master Degree in Computer Engineering \n(AI & Data Analytics)",
    date: "2023 – Presente",
    description: "...",
    courses: ["AI", "Machine Learning", "Computer Vision"],
    universityUrl: "https://www.polito.it/en",
    logo: "/images/logo_politecnico-cropped.svg",
    type: "masters",
}, {
    institution: "University of Turin",
    degree: "Bachelor Degree in Computer Science",
    date: "Sep 2019 - Nov 2022",
    description: "...",
    courses: ["Java", "Web Dev", "Sistemi Operativi"],
    universityUrl: "https://en.unito.it/",
    logo: "images/logo_unito_verticale-cropped.svg",
    type: "bachelor",
},]


export default function Education() {
    return (<section id="education" className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10">Education</h2>
            <div className="space-y-12">
                {education.map((edu, index) => (<div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 items-start"
                >
                    <div className="flex flex-col items-center gap-2 text-sm text-neutral-500">
                        <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-26 h-26 rounded-full object-cover border border-base-300 bg-white p-0.5"
                        />
                        <span>{edu.date}</span>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold flex items-center gap-2 flex-wrap">
                         <span className="whitespace-pre-line">
                            {edu.degree}
                          </span>{" "}
                            · <a
                            href={edu.universityUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary-focus"
                        >
                            {edu.institution}
                        </a>

                            {edu.type === 'masters' && (
                                <span className="badge badge-outline text-xs">🎓 Master's Degree</span>)}
                            {edu.type === 'bachelor' && (
                                <span className="badge badge-outline text-xs">📘 Bachelor</span>)}
                        </h3>


                        <p className="mt-2 text-neutral-400">{edu.description}</p>
                        <ul className="flex flex-wrap gap-2 mt-4 text-sm text-neutral-500">
                            {edu.courses.map((course, i) => (<li key={i} className="badge badge-outline">
                                {course}
                            </li>))}
                        </ul>
                    </div>
                </div>))}
            </div>
        </div>
    </section>);
}
