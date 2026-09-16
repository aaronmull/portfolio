import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  </svg>
);

const skills = [
    "SPICE",
    "MATLAB",
    "AutoCAD",
    "Java",
    "Verilog",
    "Arduino",
    "Raspberry Pi",
    "C++",
    "Python",
    "C",
    "JavaScript",
    "HTML",
    "TailwindCSS",
    "CSS",
    "Assembly",
    "Excel",
    "Word",
    "Windows",
    "MacOS",
    "Linux",
    "Unix",
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img 
                    src="/hero-bg.jpg" 
                    alt="Hero Image" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15+ Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Electrical and Computer Engineering Student
                            </span>
                        </div>

                        {/* Headline (CHANGE) */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="font-serif italic font-normal text-white">
                                    Aaron Mull
                                </span>
                                <span className="text-primary glow-text"> Portfolio</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hello, I'm Aaron Mull. I'm an ECE student at Rowan University, 
                                interested in robotics and embedded systems. I look forward to
                                connecting with you!
                            </p>
                        </div>
                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg">
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/Aaron_Mull_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <AnimatedBorderButton>
                                    <ArrowUpRight className="w-5 h-5"/>
                                    View Resume
                                </AnimatedBorderButton>
                            </a>
                        </div>
                        
                        {/* Social Links */}
                        
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span>Follow: </span>
                            {[
                                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/aaron-mull-91369b334/" },
                                { icon: GithubIcon, href: "https://github.com/aaronmull" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/aaronmull.jpg" alt="Aaron Mull" className="w-full aspect-[4/5] object-cover rounded-2xl"/>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                {/* Stats badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">4.0</div>
                                    <div className="text-xs text-muted-foreground">GPA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute left-0 top-0 bottom-0 w-32
                            bg-gradient-to-r from-background to-transparent z-10"
                        />
                        <div
                            className="absolute right-0 top-0 bottom-0 w-32
                            bg-gradient-to-l from-background to-transparent z-10"
                        />
                        <div className="flex w-max animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>

    );
}