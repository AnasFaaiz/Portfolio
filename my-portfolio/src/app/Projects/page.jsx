import Navbar from "@/app/components/Navbar";

const Projects = () => {
    return (
        <div className="min-h-screen bg-[#0D1117]">
            <Navbar />
            <main className="container mx-auto px-4 pt-20">
                <section className="py-16">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        My Projects
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Here are some of the projects I've worked on.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Projects;