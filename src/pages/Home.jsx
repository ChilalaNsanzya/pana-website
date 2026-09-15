import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Wine, Calendar, MessageCircle, Clock } from 'lucide-react'
import { venueInfo } from '../data/menuData'

const Home = () => {
  return (
    <div className="bg-pana-dark">
      <section className="relative h-screen flex flex-col justify-between bg-gradient-to-b from-black to-pana-dark">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center"></div>
        
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 max-w-5xl mx-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
              <img src="/logo.svg" alt="Pana" className="h-32 md:h-48 w-auto" />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-6">
              Welcome to Pana.
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              More than just a venue, Pana is a destination designed for connection. Whether you're joining us for a relaxed lunch, after-work drinks, a special celebration or a late-night experience, Pana offers the perfect blend of hospitality, atmosphere and culture.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              From carefully crafted dishes and premium cocktails to curated entertainment and exceptional service, every detail is designed to make you feel at home.
            </p>
            <p className="text-xl md:text-2xl font-serif text-pana-gold mb-6">
              Where Friends Meet
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Link to="/menus" className="btn-primary">
                View Menus
              </Link>
              <Link to="/reservations" className="btn-primary">
                Reservations
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/about" className="btn-secondary">
                About Us
              </Link>
              <a
                href="https://wa.me/27768711227"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <Link to="/disclaimer" className="btn-secondary">
                Disclaimer
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-pana-dark border-t border-pana-gold/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-300">
            <div className="bg-black/50 p-8 rounded-lg border border-pana-gold/20">
              <h3 className="text-xl font-semibold text-white mb-4">Disclaimer</h3>
              <p className="mb-2">All credit cards accepted. No persons under 18 permitted.</p>
              <p className="mb-2">Right of admission reserved. BYO corkage strictly not allowed.</p>
              <p className="mb-2">Please note: All food is prepared in a shared kitchen environment.</p>
              <p className="mb-2">While every effort is made to accommodate dietary requirements, we cannot guarantee the absence of allergens or accept no liability for allergic reactions or dietary sensitivities.</p>
            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-pana-gold/20">
              <h3 className="text-xl font-semibold text-white mb-4">Trading Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {venueInfo.tradingHours.map((day, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`font-semibold ${day.hours === 'Closed' ? 'text-gray-500' : 'text-white'}`}>
                      {day.day}
                    </span>
                    <span className={`${day.hours === 'Closed' ? 'text-gray-500' : 'text-pana-gold'}`}>
                      {day.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-pana-gold/20">
              <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
              <p className="mb-2">Address: Cedar Square Shopping Centre, Cedar Road, Fourways, Johannesburg</p>
              <p className="mb-2">Landline: 011 465 0101</p>
              <p className="mb-2">Email: info@panafourways.co.za</p>
              <p className="mb-2">WhatsApp: +27(0)76 871 1227</p>
              <p className="text-pana-gold">@panafourways</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
