const { useState } = React;
const { Github, Gamepad2, Mail, Linkedin, ExternalLink, Moon, Sun } = lucide;

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);

    const projects = [
        {
            title: "Noted",
            description: "A Flask-based note-taking application with features like creating, editing, deleting, and searching through notes. Includes trash bin functionality and dark mode support.",
            tech: ["Python", "Flask", "HTML", "CSS"],
            link: "https://github.com/cosmini0/Noted",
            type: "web",
            image: "images/Noted.png"
        },
        {
            title: "Adventure Time: A Messed Up Fangame",
            description: "A 2D adventure game inspired by Adventure Time, featuring exploration mechanics, interactive elements, and basic inventory management. Built with GameMaker Language.",
            tech: ["GML", "GameMaker"],
            link: "https://lemoncup.itch.io/adventure-time-a-messed-up-fangame",
            type: "game",
            image: "images/adventure-time.png"
        }
    ];

    const skills = [
        "Python", "GML", "Flask", "JavaScript", 
        "HTML", "CSS", "REST APIs", "Responsive Design",
        "Game Development", "Web Security"
    ];

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-purple-950 text-pink-100' : 'bg-pink-50 text-purple-900'} transition-all duration-500`}>
            {/* Header with gradient */}
            <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900' : 'bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300'}`}>
                <header className="container mx-auto px-4 py-12">
                    <div className="flex justify-between items-center">
                        <h1 className="text-5xl font-bold tracking-tight">Cosmin Cretu</h1>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-3 rounded-full ${darkMode ? 'bg-purple-800 text-pink-300' : 'bg-pink-200 text-purple-800'} transition-all duration-300 hover:rotate-90`}
                        >
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                    </div>
                    <div className="mt-6 flex gap-6">
                        <a href="mailto:cosmincretu0909@gmail.com" 
                           className={`flex items-center gap-2 ${darkMode ? 'text-pink-300 hover:text-pink-400' : 'text-purple-700 hover:text-purple-800'} transition-all duration-300`}>
                            <Mail size={20} />
                            <span>Email</span>
                        </a>
                        <a href="https://github.com/cosmini0" 
                           className={`flex items-center gap-2 ${darkMode ? 'text-pink-300 hover:text-pink-400' : 'text-purple-700 hover:text-purple-800'} transition-all duration-300`}>
                            <Github size={20} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </header>
            </div>

            {/* Hero Section */}
            <section className={`py-20 relative overflow-hidden ${darkMode ? 'bg-purple-900' : 'bg-pink-100'}`}>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-6 tracking-tight">Computer Science Student & Developer</h2>
                    <p className="text-xl max-w-2xl leading-relaxed">
                        Ambitious and driven Computer Science student at Northumbria University, passionate about programming,
                        problem-solving, and developing innovative solutions. Experienced in software development,
                        web applications, and game development.
                    </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent animate-pulse"></div>
            </section>

            {/* Projects Section */}
            <section className="py-20 container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 tracking-tight">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`group rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                                darkMode ? 'bg-purple-800/50 hover:bg-purple-700/50' : 'bg-white hover:bg-pink-50'
                            } shadow-xl`}
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-purple-900/90 to-transparent' : 'bg-gradient-to-t from-white/90 to-transparent'}`}></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    {project.type === 'web' ? 
                                        <Github size={24} className={darkMode ? 'text-pink-300' : 'text-purple-600'} /> : 
                                        <Gamepad2 size={24} className={darkMode ? 'text-pink-300' : 'text-purple-600'} />
                                    }
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                </div>
                                <p className="mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                darkMode ? 'bg-purple-700 text-pink-200' : 'bg-pink-200 text-purple-800'
                                            } transition-colors duration-300`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${
                                        darkMode ? 'text-pink-300 hover:text-pink-400' : 'text-purple-600 hover:text-purple-700'
                                    } transition-colors duration-300`}
                                >
                                    <ExternalLink size={20} />
                                    <span>View Project</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className={`py-20 relative overflow-hidden ${darkMode ? 'bg-purple-900/50' : 'bg-pink-100'}`}>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-12 tracking-tight">Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`px-6 py-3 rounded-lg text-lg font-medium transform transition-all duration-300 hover:scale-105 ${
                                    darkMode 
                                        ? 'bg-purple-800/50 text-pink-200 hover:bg-purple-700/50' 
                                        : 'bg-white text-purple-800 hover:bg-pink-50'
                                } shadow-lg`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent animate-pulse"></div>
            </section>

            {/* Footer */}
            <footer className={`py-8 ${darkMode ? 'bg-purple-950' : 'bg-pink-100'}`}>
                <div className="container mx-auto px-4 text-center">
                    <p className={`text-sm ${darkMode ? 'text-pink-300/60' : 'text-purple-600/60'}`}>
                        © 2024 Cosmin Cretu. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

ReactDOM.render(<Portfolio />, document.getElementById('root'));