import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menus', path: '/menus' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-pana-dark border-b border-pana-gold/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Pana" className="h-12 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-pana-gold'
                      : 'text-white hover:text-pana-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/27768711227"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                WhatsApp Us
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-pana-dark border-t border-pana-gold/20">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  className={`block py-2 text-sm font-medium ${
                    isActive(item.path) ? 'text-pana-gold' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/27768711227"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-primary text-sm text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black border-t border-pana-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.svg" alt="Pana" className="h-10 w-auto mb-4" />
              <p className="text-gray-400 text-sm">
                Where Friends Meet
              </p>
              <p className="text-gray-400 text-sm mt-2">
                #WhereFriendsMeet
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+27114650101" className="hover:text-pana-gold">
                    +27 (0) 11 465 0101
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <a href="https://wa.me/27768711227" className="hover:text-pana-gold">
                    +27 (0) 76 871 1227
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@panafourways.co.za" className="hover:text-pana-gold">
                    info@panafourways.co.za
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/pana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pana-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/pana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pana-gold transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://tiktok.com/@pana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pana-gold transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-pana-gold/20 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
