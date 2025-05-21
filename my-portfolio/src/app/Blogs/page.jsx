import Navbar from "@/app/components/layout/Navbar";

const Blogs = () => {
    return (
        <div className="min-h-screen bg-[#0D1117]">
            <Navbar />
            <main className="container mx-auto px-4 pt-20">
                <section className="py-16">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        My Blogs
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Here are some of the blogs I've written.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Blogs;