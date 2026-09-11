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
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                </div>
            </div>
        </section>
    );
}