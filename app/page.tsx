'use client'

import { useState, useEffect } from 'react'
import { 
  Github, 
  Linkedin,
  Instagram,
  Facebook,
  Mail, 
  Phone, 
  MapPin,
  Star,
  Sparkles
} from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  color: string
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([])

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${4 + Math.random() * 4}s`
    }))
    setParticles(generatedParticles)
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Update these with your actual social media links
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Osama-Nimer',
      icon: <Github size={24} />,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/osama-nimer/',
      icon: <Linkedin size={24} />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/osama.nimer.581/',
      icon: <Facebook size={24} />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/osama_niimer/',
      icon: <Instagram size={24} />,
      color: 'hover:text-pink-400'
    }
  ]

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'osamanimer@ieee.org',
      link: 'mailto:osamanimer@ieee.org'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+962 (79) 698-3276',
      link: 'tel:+962796983276'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Amman, Jordan',
      link: '#'
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #10B981 0%, transparent 50%)`
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary-green opacity-20 animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Profile Image - Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] opacity-40">
          <img 
            src="/Osama 2025.JPG" 
            alt="Osama Nimer" 
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-6 md:p-8">
          <nav className="flex items-center justify-between mx-auto max-w-7xl">
            <div className={`text-2xl font-bold text-primary-green transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Osama Nimer
            </div>
            {/* <div className={`flex gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <button className="px-4 py-2 transition-all duration-300 rounded-full glass-effect hover:bg-primary-green/20">
                Portfolio
              </button>
              <button className="btn-primary">
                <Download size={18} className="mr-2" />
                Resume
              </button>
            </div> */}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex items-center justify-center flex-1 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="mr-2 text-primary-green animate-pulse" size={24} />
                <span className="font-semibold text-primary-green">Welcome to my digital space</span>
                <Sparkles className="ml-2 text-primary-green animate-pulse" size={24} />
              </div>
              
              <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-white via-primary-green to-white bg-clip-text animate-fade-in">
                Hello, Im <span className="text-primary-green">Osama Nimer</span>
              </h1>
              <h2 className="mb-8 text-2xl font-medium text-gray-300 md:text-3xl">
                Software Engineer & Full Stack Developer
              </h2>
              
              <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
                Creative professional passionate about innovation and digital excellence. 
                Lets connect and create something amazing together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {/* <button className="btn-primary group">
                  Get In Touch
                  <ExternalLink size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button> */}
                <button className="px-6 py-3 transition-all duration-300 rounded-full glass-effect hover:bg-white/20">
                  <a target="_blank" href="https://github.com/Osama-Nimer?tab=repositories">
                  View My Work
                  </a>
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={`transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="mb-6 text-lg font-semibold text-gray-300">Connect With Me</h3>
              <div className="flex justify-center gap-6 mb-12">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-btn group ${social.color}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="transition-transform duration-300 transform group-hover:rotate-12">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-2xl p-6 mx-auto glass-effect rounded-2xl">
                <h3 className="mb-4 text-lg font-semibold text-center">Quick Contact</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.link}
                      className="flex items-center gap-3 p-3 transition-all duration-300 rounded-lg hover:bg-primary-green/20 group"
                    >
                      <div className="transition-transform text-primary-green group-hover:scale-110">
                        {contact.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">{contact.label}</div>
                        <div className="text-sm font-medium">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-6 text-center">
          <div className={`transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Star size={16} className="text-primary-green" />
              <span>Made with passion and modern web technologies</span>
              <Star size={16} className="text-primary-green" />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              © 2025 Osama Nimer. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
