import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { useState } from "react";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"/>
  </svg>
);

const projects = [
    {
        title: "Boba Speed Data Hub",
        description: 
            "Mobile app for athletic trainer and athletes to monitor progression and foster competition.",
        images: ["/projects/project1_1.PNG", "/projects/project1_2.PNG"],
        tags: ["React Native", "Node.js", "Redis", "Postgres", "Data Visualization"],
        link: "https://github.com/aaronmull/boba_app",
        github: "https://github.com/aaronmull/boba_app",
    },
    {
        title: "Magnetic Microbots [in progress]",
        description:
            "Developing a controls system for microscopic magnetic robots with the end goal of utilizing the robots within the human body to assist with surgeries and drug delivery.",
        images: ["/projects/project3_2.gif", "/projects/project3_1.JPG"],
        tags: ["Magnetism", "Python", "MATLAB"],
        link: "",
        github: "",
    },
    {
       title: "Raspberry Pi Pokedex",
        description: 
            "Trained and quantized a TensorFlow image recognition model detect Pokemon with 90% accuracy.",
        images: ["/projects/project2_1.JPG"],
        tags: ["Python", "TensorFlow", "Raspberry Pi"],
        link: "",
        github: "",
    }
]

const ProjectCard = ({ project, idx }) => {
    const [imgIndex, setImgIndex] = useState(0)
    const hasMultiple = project.images.length > 1

    const goPrev = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
    }

    const goNext = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-64 sm:h-72 bg-surface">
                {/* Blurred backdrop fill — keeps frame full even for portrait/irregular images */}
                <img 
                    src={project.images[imgIndex]} 
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 transition-transform duration-700"
                />

                {/* Foreground image — always fully visible, never cropped */}
                <img 
                    src={project.images[imgIndex]} 
                    alt={`${project.title} screenshot ${imgIndex + 1}`} 
                    className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />

                <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none"
                />

                {/* Cycle Arrows */}
                {hasMultiple && (
                    <>
                        <button onClick={goPrev} aria-label="Previous Image" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10">
                            <ChevronLeft className="w-4 h-4"/>
                        </button>
                        <button onClick={goNext} aria-label="Next Image" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10">
                            <ChevronRight className="w-4 h-4"/>
                        </button>
                    </>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                        <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                            <ArrowUpRight className="w-5 h-5"/>
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" >
                            <GithubIcon className="w-5 h-5"/>
                        </a>
                    )}
                </div>
            </div>
            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <ArrowUpRight 
                        className="w-5 h-5
                        text-muted-foreground group-hover:text-primary
                        group-hover:translate-x-1
                        group-hover:-translate-y-1 transition-all"
                    />
                </div>
                <p className="text-muted-foreground text-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Background Glows*/}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of some recent works, solving problems and
                        finding solutions across several sectors that are important
                        to me.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>
                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
}