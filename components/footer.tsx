import { Github, Linkedin, Instagram } from "lucide-react"
import { BiLogoMedium } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Azka N. Mumtaz — Made with ❤️</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/azkanab" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/azkanab/" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://medium.com/@azkanab" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Twitter">
              <BiLogoMedium size={20} />
            </a>
            <a href="https://www.instagram.com/azkanab/" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
