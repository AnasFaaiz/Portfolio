import Navbar from "@/app/components/layout/Navbar";
import Image from "next/image";
import SkillSection from "@/app/components/features/Homepage/Skill";
import ProjectSection from "../components/features/Homepage/Projects";

const Homepage = () => {
    return (
        <div className="min-h-screen bg-[#0D1117]">
            <Navbar />
            <main className="container mx-auto px-4 pt-20">
                <section className="py-16 flex flex-col md:flex-row items-center gap-8">
                    {/* Left Section */}
                    <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-500">
                        <Image
                            src="/profile.jpg"
                            alt="Anas Faaiz"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Section */}

                    <div className="flex-1 text-center md:text-left space-y-6">
                        {/* Name */}
                        <h1 className="text-4xl md:text-4xl font-bold text-white">
                            Syed Anas Faaiz
                        </h1>

                        {/* Role */}
                        <h2 className="text-1xl md:text-2xl font-semibold text-gray-300">
                            Full Stack Developer | Startup Enthusiasts
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400">
                            I am a passionate Full Stack Developer with a keen interest in building innovative solutions. I love to explore new technologies and apply them to real-world problems. </p>

                        {/* Tagling */}
                        <div className="space-y-3">
                            <hr className="border-gray-700" />
                            <p className="text-gray-400 py-3">
                                "If you don’t take risks, you can’t create a future!"
                            </p>
                            <hr className="border-gray-700"/>
                        </div>

                        {/* Call-to-Action Buttons */}
                        <div className="flex gap-4 justify-content md:jsutify-start pt-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                                Download CV
                            </button>
                            <button className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-2 rounded-md transition-colors">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </section>
                <SkillSection />
                <ProjectSection />
            </main>
        </div>
    );
};

export default Homepage;