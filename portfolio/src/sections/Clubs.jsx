const clubs = [
    {
        period: "Sep. 2026 - Present",
        role: "Learning Assistant",
        company: "Rowan University College of Science & Mathematics",
        description:
            "Supporting 40+ students in understanding mechanics via weekly office hours and one-on-one sessions.",
        technologies: ["Teaching", "Communication"],
        logo: "/rowancsm.jpeg",
        current: true,
    },
    {
        period: "Sep. 2026 - Present",
        role: "Club Member",
        company: "Robotics and Automation Society, Rowan University",
        description:
            "Attended weekly meetings and workshops to develop robotics skills and contribute to club projects.",
        technologies: ["Robotics", "Collaboration"],
        logo: "/rowanras.jpg",
        current: true,
    },
    {
        period: "Sep. 2025 - Present",
        role: "Club Member",
        company: "Institute of Electrical and Electronic Engineers, Rowan University",
        description:
            "Attended biweekly meetings, workshops, and info sessions for hands-on skills, networking, and career growth.",
        technologies: ["Soldering", "Programming", "Networking"],
        logo: "/rowanieee.jpeg",
        current: true,
    },
    {
        period: "Sep. 2024 - Present",
        role: "Track and Field Team Representative",
        company: "Student Athlete Advisory Committee, Rowan University Athletics",
        description:
            "Relay announcements from the athletic department to teammates. Volunteer for events hosted by the athletic department.",
        technologies: ["Leadership", "Community Service"],
        logo: "/rowan.svg",
        current: true,
    },
]

export const Clubs = () => {
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
                        Campus<span className="font-serif italic font-normal text-white"> Involvement</span>
                    </span>
                    <p className="mt-4 text-muted-foreground animate-fade-in animation-delay-100">
                        A timeline of my on-campus involvement, including 
                        clubs and other extracurricular activities.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/50 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                    {/* Experiences */}
                    <div className="space-y-12">
                        {clubs.map((exp, idx) => (
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
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 relative pr-16 ${
                                        idx % 2 === 0 ? "md:pl-16 md:pr-6" : "md:pr-16"
                                    }`}>
                                        {exp.logo && (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className={`absolute top-4 right-4 w-10 h-10 rounded-lg object-cover border border-primary/30 bg-background/50 p-1 ${
                                                    idx % 2 === 0 ? "md:left-4 md:right-auto" : "md:right-4"
                                                }`}
                                            />
                                        )}
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