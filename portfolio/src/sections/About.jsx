import { Code2, Lightbulb, Users } from "lucide-react"
const highlights = [
    {
        icon: Code2,
        title: "Programming Experience",
        description: 
            "Maintaining strong full-stack development and object-oriented programming skills as a former Computer Science major.",
    },
    {
        icon: Users,
        title: "Collaboration and Leadership",
        description:
            "Continually gaining team-based experiences through engineering clinics, clubs, and sports teams."
    },
    {
        icon: Lightbulb,
        title: "Learning",
        description:
            "Welcoming of every opportunity to learn new things, meet new people, and grow."
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am an Electrical and Computer Engineering student at Rowan University's Henry M. Rowan College of 
                                Engineering with a minor in Computer Science. During my studies, I have developed interests in robotics, 
                                embedded systems, circuit design, and programming. I am seeking positions that allow me to further develop 
                                my engineering, communication, and problem-solving skills.
                            </p>
                            <p>
                                Throughout my time at Rowan, I have gained invaluable experience in both engineering and athletics while 
                                maintaining a 4.0 GPA. My peers have continuously inspired me to keep developing my skills in both areas. 
                                Through personal projects and collaborative classwork, I have built a passion for finding solutions that 
                                bring quantifiable results.
                            </p>
                            <p>
                                As an NCAA Track and Field athlete, I have learned the value of setting goals and working toward them with 
                                consistency. Getting 1% better each day is far more valuable than trying to rush success, and my experiences 
                                have proven that.
                            </p>
                            <p>
                                I am currently seeking internships or part-time positions related to electrical and computer engineering 
                                where I can continue contributing to a team and honing my skills. 
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to build systems that solve problems. Whether it be
                                through an internship, classwork, or a personal project, I am seeking
                                to meaningfully contribute to a team of engineers to find solutions."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}