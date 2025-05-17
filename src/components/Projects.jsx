const projects = [{
    title: "Image Captioning",
    description:
        "Explored and compared multiple neural network architectures for image captioning using the Flickr30k dataset. Implemented models include ResNet50 with LSTM, LSTM with attention mechanism, Vision Transformer with LSTM, and fine-tuned Microsoft's GIT. Evaluated each model's performance in generating accurate and descriptive captions for images.",
    tech: ["PyTorch", "CNN", "LSTM", "Attention Mechanism", "Vision Transformer"],
    link: "https://github.com/Tiazzo/image-captioning",
    image: "images/gas_station.png"
} ,{
    title: "Vehicle Window Detection for Airbag Optimization",
    description: "Developed a CNN-based image segmentation pipeline using ResNet to detect vehicle windows from side-view images for data-driven airbag design. Implemented in PyTorch with OpenCV for image preprocessing and contour extraction, the system supports safety optimization by modeling real-world window geometries.",
    tech: ["CNN", "U-Net", "YOLOv11", "PyTorch", "OpenCV", "Image Segmentation"],
    link: "https://github.com/Tiazzo/Safety-System-Design",
    image: "images/garden.jpg",
}, {
    title: "Autonomous Vehicle",
    description: "Designed and evaluated rule-based and ML for autonomous lane-change decisions using SUMO simulations. Compared models on safety, efficiency, and comfort in dynamic traffic scenarios as part of a project at Chalmers.",
    tech: ["Python", "SUMO", "TraCI", "Machine Learning", "SVM", "Rule-Based Models"],
    link: "https://github.com/Tiazzo/autonomous-vehicles",
    image: "images/garden.jpg",
},
    {
        title: "Emergency Backup Application",
        description: "Developed a cross-platform emergency backup tool in Rust that enables file backup without a functional monitor. The application detects mouse-drawn gestures and provides audio guidance to confirm and execute the backup. Designed for reliability in critical scenarios using voice feedback, USB detection, and configurable file filters.",
        tech: ["Rust", "Multithreading", "Concurrency", "Operating System"],
        link: "https://github.com/Tiazzo/emergency-backup",
        image: "images/garden.jpg",
    },
];

export default function Projects() {
    return (<section id="projects" className="pt-24 pb-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-10">Projects</h2>
                <div className="space-y-10">
                    {projects.map((project, index) => (<div
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
                                    {project.link ? (<a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            {project.title}
                                        </a>) : (project.title)}
                                </h3>
                                <p className="text-neutral-400">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="badge badge-outline text-sm">
                      {tech}
                    </span>))}
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>);
}
