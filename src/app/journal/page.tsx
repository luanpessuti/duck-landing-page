import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Ou use um ícone do seu pacote preferido

// Dados dos posts (pode ser substituído por fetch API depois)
const posts = [
    {
        id: 1,
        title: "The Art of Minimal Design",
        excerpt: "How we reduced clutter and increased user engagement by 40% in our latest project.",
        date: "May 15, 2024",
        tag: "Design",
        slug: "minimal-design"
    },
    {
        id: 2,
        title: "Why Ducks Inspire Creativity",
        excerpt: "Exploring the unexpected connection between waterfowl and innovative thinking.",
        date: "April 28, 2024",
        tag: "Inspiration",
        slug: "ducks-creativity"
    },
    // Adicione mais posts...
];

export default function JournalPage() {
    return (
        <main className="min-h-screen bg-background pt-20 pb-32">
            {/* Header */}
            <section className="container mx-auto px-6 py-12 border-b border-gray-200">
                <h1 className="text-5xl md:text-7xl font-duck text-orange mb-4">JOURNAL</h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                    Thoughts, stories and ideas from the DUCK team.
                </p>
            </section>

            {/* Lista de Posts */}
            <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="group border-2 bg-gray  dark:border-gray-700 hover:border-orange rounded-lg overflow-hidden transition-all duration-300"
                    >
                        <Link href={`/journal/${post.slug}`} className="block h-full">
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-orange/10 text-orange text-sm rounded-full mb-4">
                                    {post.tag}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-title text-black group-hover:text-orange transition-colors mb-3">
                                    {post.title}
                                </h2>
                                <p className="text-white mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-orange">{post.date}</span>
                                    <ArrowRight className="w-5 h-5 text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>

            {/* Newsletter (Opcional) */}
            <section className="container mx-auto px-6 py-12 border-t border-gray-200">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-title text-black mb-4">Stay Updated</h3>
                    <p className="text-gray-600 mb-6">Subscribe to receive new posts directly in your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-orange flex-grow max-w-md"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
            {/* Footer/menu */}
            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-orange shadow-lg">
                <div className="grid grid-cols-5 text-lg md:text-xl font-title">
                    {/* WORK */}
                    <Link
                        href="/work"
                        className="py-4 hover:bg-gray/10 transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
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
                        className="py- bg-gray/10 hover:bg-gray/10  transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
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