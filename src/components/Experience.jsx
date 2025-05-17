const experiences = [
    {
        role: "Master Thesis Student",
        company: "Chalmers (Vehicle Safety Department)",
        companyUrl: "https://www.chalmers.se/en/departments/m2/research/vehicle-safety/",
        date: "Jan 2025 – Present",
        description:
            "Built a pipeline using Large Language Models to extract structured data from crash summaries, integrating RAG, advanced prompting, and fine-tuned open-source models for low-supervision evaluation.",
        tech: ["Python", "Hugging Face", "LLMs", "RAG", "Prompt Engineering"]

    },
    {
        role: "Cyber Security Consultant",
        company: "Lutech Group",
        companyUrl: "https://lutech.group/en",
        date: "Nov 2022 - Oct 2023",
        description:
            "Managed IAM infrastructure for UniCredit, ensuring secure and compliant access through Azure AD, on-prem AD, and real-time monitoring with Splunk.",
        tech: ["Azure IAM", "Azure AD", "AD on-premise", "Splunk"],
    },
    {
        role: "Cloud Engineer Intern",
        company: "Lutech Group",
        companyUrl: "https://lutech.group/en",
        date: "Jun 2022 - Nov 2022",
        description:
            "Developed and managed an automated deployment system for microservices-based applications on Azure, leveraging Terraform, Jenkins, JFrog, Docker, and Kubernetes following DevOps best practices",
        tech: ["Azure Cloud", "Terraform", "Azure Kubernetes Service", "Jenkins"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="pt-24 pb-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-10">Experience</h2>
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
