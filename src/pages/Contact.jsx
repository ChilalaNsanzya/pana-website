import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-pana-dark min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-pana-gold mb-6">
            Contact Us
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/50 rounded-lg border border-pana-gold/30 p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-pana-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                    <a
                      href="tel:+27114650101"
                      className="text-gray-300 hover:text-pana-gold transition-colors"
                    >
                      +27 (0) 11 465 0101
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-pana-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/27768711227"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-pana-gold transition-colors"
                    >
                      +27 (0) 76 871 1227
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-pana-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Address</h3>
                    <a
                      href="mailto:info@panafourways.co.za"
                      className="text-gray-300 hover:text-pana-gold transition-colors"
                    >
                      info@panafourways.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-pana-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Physical Address</h3>
                    <p className="text-gray-300">
                      Cedar Square Shopping Center<br />
                      Cedar Road, Fourways<br />
                      JHB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-lg border border-pana-gold/30 p-8">
              <h2 className="text-2xl font-serif font-semibold text-white mb-6">
                Social Media Links
              </h2>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/panafourways"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-pana-gold transition-colors group"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/panafourways"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-pana-gold transition-colors group"
                >
                  <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://tiktok.com/@panafourways"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-pana-gold transition-colors group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/50 rounded-lg border border-pana-gold/30 p-2 h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.0123456789!2d28.0123456!3d-26.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCedar%20Square%20Shopping%20Center!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pana Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
