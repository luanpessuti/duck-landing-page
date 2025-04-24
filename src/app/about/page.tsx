'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Sah Pata',
    role: 'Diretora Criativa',
    img: '/team/sah.jpeg',
  },
  {
    name: 'Duck de Caxias',
    role: 'Desenvolvedor Front-end',
    img: '/team/duck.jpeg',
  },
  {
    name: 'Bra Gança',
    role: 'Designer Visual',
    img: '/team/bra.jpeg',
  },
  {
    name: ' Ma Recco',
    role: 'Estrategista Digital',
    img: '/team/ma.jpeg',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-black font-outfit flex flex-col justify-between">
      {/* Main content */}
      <section className="px-6 md:px-12 xl:px-24 py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[12vw] leading-none">
          ABOUT US
        </motion.h1>

        {/* Description + services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Description */}
          <p className="text-lg leading-relaxed max-w-prose">
            We are a creative studio that blends art, design and technology to craft experiences that connect people and brands. Our mission is to transform ideas into impactful visual realities through authentic and bold digital solutions.
          </p>

          {/* Services list */}
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
            <li>▸ Branding</li>
            <li>▸ Integrated campaigns</li>
            <li>▸ Visual identity</li>
            <li>▸ Social media</li>
            <li>▸ Content creation</li>
            <li>▸ Video production</li>
            <li>▸ Communication strategy</li>
            <li>▸ Interface design</li>
            <li>▸ Web development</li>
            <li>▸ Art direction</li>
          </ul>
        </div>

        {/* Equipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden relative border border-black">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2">
                <p className="font-bold">{member.name}</p>
                <p className="text-sm text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
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
      className="py-4 bg-gray/10 transition-all duration-300 border-r border-gray-200 flex items-center justify-center group hover:text-orange"
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
  )
}
