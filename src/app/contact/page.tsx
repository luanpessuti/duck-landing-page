import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-32">
      {/* Seção Superior (Título + Descrição) */}
      <section className="container mx-auto px-6 py-12 border-b border-gray-200">
        <h1 className="text-5xl md:text-7xl font-duck text-orange mb-6">CONTACT</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Let&apos;s create something remarkable together. Reach out through any channel below.
        </p>
      </section>

      {/* Grid de Contato (Inspirado no milli.agency) */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna Esquerda (Formulário) */}
        <div className="space-y-8">
          <h2 className="text-3xl font-title text-black">Send a message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-orange focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-orange focus:border-transparent"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-gray-500 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-orange focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-500 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-orange focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-orange text-white rounded-full hover:bg-orange/90 transition-colors flex items-center gap-2 group"
            >
              Send Message
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </form>
        </div>

        {/* Coluna Direita (Informações) */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-title text-black mb-6">Get in touch</h2>
            <p className="text-gray-600 max-w-md">
              Whether you have a project in mind or just want to chat about design, we&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {/* Item de Contato 1 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange/10 rounded-full text-orange">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-black">Email</h3>
                <Link href="mailto:hello@duck.studio" className="text-gray-600 hover:text-orange transition-colors">
                  hello@duck.studio
                </Link>
              </div>
            </div>

            {/* Item de Contato 2 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange/10 rounded-full text-orange">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-black">Phone</h3>
                <Link href="tel:+5511999999999" className="text-gray-600 hover:text-orange transition-colors">
                  +55 11 99999-9999
                </Link>
              </div>
            </div>

            {/* Item de Contato 3 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange/10 rounded-full text-orange">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-black">Studio</h3>
                <p className="text-gray-600">
                  Rua dos Patos, 42<br/>
                  São Paulo, Brazil
                </p>
              </div>
            </div>
          </div>

          {/* Mapa (Opcional) */}
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197353585618!2d-46.65867598447593!3d-23.561349467475806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
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
                        className="py-4 hover:bg-gray/10  transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
                    >
                        <span className="group-hover:scale-110 transition-transform">JOURNAL</span>
                    </Link>

                    {/* CONTACT */}
                    <Link
                        href="/contact"
                        className="py-4 bg-gray/10 hover:bg-gray/10  transition-all duration-300 flex items-center justify-center group hover:text-orange"
                    >
                        <span className="group-hover:scale-110 transition-transform">CONTACT</span>
                    </Link>
                </div>
            </footer>
    </main>
  );
}