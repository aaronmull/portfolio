const experiences = [
    {
        period: "Sep. 2026 - Present",
        role: "Student Worker",
        company: "ECE Resource Center - Rowan University",
        description:
            "Designed and maintained ECERC website, assembled and soldered PCBs, and filled component orders.",
        technologies: ["Soldering", "PCB Assembly", "Programming", "Collaboration"],
        current: true,
    },
    {
        period: "Jun. 2026 - Sep. 2026",
        role: "Assistant Project Manager",
        company: "C.J. Watson Electrical Contractor",
        description:
            "Assisted project manager in reading schematics, designing panel schedules, and obeying electrical codes. Utilized Revit to generate mock-ups involving power distribution, lighting systems, and load calculations.",
        technologies: ["Revit", "NEC Codes", "Scheduling", "Mock-Ups"],
        current: false,
    },
    {
        period: "Feb. 2023 - Present",
        role: "Quick Service Food and Beverage Worker",
        description:
            "Proactively memorized, prepared, and distributed over 50 company recipes. Fulfilled orders as shift lead with satisfactory speed while handling cash and other forms of payment.",
        technologies: ["Leadership", "Fast-Paced", "Organization", "Teamwork"],
        current: true,
    },
]

export const Experience = () => {
    return (
        <section
            id="experience"
            className="py-32 relative overflow-hidden"
        >
            <div 
                className="absolute top-1/2 left-1/4 w-96
                h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground tracking-wider uppercase animate-fade-in">
                        Career<span className="font-serif italic font-normal text-white"> Journey</span>
                    </span>
                    <p className="text-muted-foreground animate-fade-in animation-delay-100">
                        A timeline of my career experience involving both 
                        engineering work and general employment history.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                    {/* Experiences */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms`}}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${
                                    idx % 2 === 0 
                                        ? "md:pr-16 md:text-right" 
                                        : "md:col-start-2 md:pl-16"
                                    }`}
                                >
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 == 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}