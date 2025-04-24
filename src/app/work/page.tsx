import Link from 'next/link';
import { motion } from 'framer-motion'

export default function WorkPage() {
    // Dados dos projetos (pode vir de uma API/banco de dados depois)
    const projects = [
        {
            id: 1,
            title: "Project DUCK",
            category: "Branding",
            imageUrl: "work/projeto1.png",
            link: "/work",
        },
        {
            id: 2,
            title: "Pixel Revolution",
            category: "Web Design",
            imageUrl: "work/pixel-project.png",
            link: "/work"
        },
        // Adicione mais projetos...
    ];

    return (
        
        <main className="min-h-screen bg-background pt-20 pb-32"> {/* Ajuste o padding para o footer fixo */}
            {/* Header da Página */}
            <section className="container mx-auto px-6 py-12">
                <h1 className="text-5xl md:text-7xl font-duck text-orange mb-6">WORK</h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                    Selected projects that showcase our creative process and innovative solutions.
                </p>
            </section>

            {/* Grid de Projetos */}
            <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={project.link}
                        className="group relative overflow-hidden border-2 border-gray-200 rounded-lg hover:border-orange transition-all"
                    >
                        {/* Imagem do Projeto */}
                        <div className="bg-gray-100 overflow-hidden">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Overlay de Texto */}
                        <div className="p-4 bg-white">
                            <h2 className="text-2xl font-title text-black group-hover:text-orange transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-gray-500">{project.category}</p>
                        </div>
                    </Link>
                ))}
            </section>
            {/* Footer/menu */}
            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-orange shadow-lg">
                <div className="grid grid-cols-5 text-lg md:text-xl font-title">
                    {/* WORK */}
                    <Link
                        href="/work"
                        className="py-4 bg-gray/10 hover:bg-gray/10 transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
                    >
                        <span className="group-hover:scale-110 transition-transform">WORK</span>
                    </Link>

                    {/* ABOUT */}
                    <Link
                        href="/about"
                        className="py-4  transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
                    >
                        <span className="group-hover:scale-110 transition-transform">ABOUT</span>
                    </Link>

                    {/* DUCK (Logo Central) */}
                    <Link
                        href="/"
                        className="py-4 font-duck bg-gray text-orange transition-all duration-300 border-r border-gray-200 flex items-center justify-center group "
                    >
                        <span className="group-hover:scale-110 transition-transform">DUCK</span>
                    </Link>

                    {/* JOURNAL */}
                    <Link
                        href="/journal"
                        className="py-4 hover:bg-gray/10  transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
                    >
                        <span className="group-hover:scale-110 transition-transform">JOURNAL</span>
                    </Link>

                    {/* CONTACT */}
                    <Link
                        href="/contact"
                        className="py-4 hover:bg-gray/10  transition-all duration-300 flex items-center justify-center group hover:text-orange"
                    >
                        <span className="group-hover:scale-110 transition-transform">CONTACT</span>
                    </Link>
                </div>
            </footer>

        </main>
    );
}