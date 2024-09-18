// components/Footer.js
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

// Objeto que contiene los iconos y URLs de redes sociales
const socialLinks = [
  {
    icon: <Facebook />,
    url: 'https://web.facebook.com/GranRah1',
  },
  {
    icon: <Instagram />,
    url: 'https://www.instagram.com/granrah',
  },
  {
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/titan-dev/',
  },
  {
    icon: <Github />,
    url: 'https://github.com/TITANRAH',
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-4 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.url} target='_blank'>
                {link.icon}
            </Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
