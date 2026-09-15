import { motion } from 'framer-motion'
import { ShieldAlert, Camera, AlertTriangle } from 'lucide-react'

const Disclaimer = () => {
  return (
    <div className="bg-pana-dark min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-pana-gold mb-6">
            Venue Policies
          </h1>
          <p className="text-xl text-gray-300">
            Please review our venue rules and guidelines
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/50 rounded-lg border border-pana-gold/30 p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <ShieldAlert className="w-8 h-8 text-pana-gold flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-serif font-semibold text-white mb-4">
                  Dress Code
                </h2>
              </div>
            </div>
            <div className="space-y-3 text-gray-300">
              <p className="font-semibold text-pana-gold">
                Smart dress code applies during designated operating hours.
              </p>
              <p>Pana maintains a smart and stylish atmosphere.</p>
              <p>Guests are encouraged to dress fashionably and appropriately for the occasion.</p>
              <p className="font-semibold text-white mt-4">
                Management reserves the right of admission.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/50 rounded-lg border border-red-500/30 p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-serif font-semibold text-white mb-4">
                  Prohibited Items
                </h2>
              </div>
            </div>
            <div className="space-y-3 text-gray-300">
              <p className="font-semibold text-red-400">
                No firearms, weapons, illegal substances, or dangerous items are permitted on the premises.
              </p>
              <p className="text-xl font-bold text-red-500">
                This is a gun-free zone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/50 rounded-lg border border-pana-gold/30 p-8"
          >
            <h2 className="text-2xl font-serif font-semibold text-white mb-6">
              Venue Rules & Guidelines
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <span className="text-pana-gold">•</span>
                <p>All patrons may be subject to security searches upon entry.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-pana-gold">•</span>
                <p>Patrons enter and remain on the premises at their own risk.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-pana-gold">•</span>
                <p>
                  Management, its owners, employees, and contractors shall not be liable for any loss, theft, damage to personal property, injury, accident, illness, or death arising from any cause whatsoever, except where liability cannot be excluded by law.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-pana-gold">•</span>
                <p>Guests are responsible for their own personal belongings at all times.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-pana-gold">•</span>
                <p>
                  Any person displaying intoxicated, disorderly, violent, offensive, or inappropriate behaviour may be refused entry or removed from the premises without refund.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-black/50 rounded-lg border border-pana-gold/30 p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <Camera className="w-8 h-8 text-pana-gold flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-serif font-semibold text-white mb-4">
                  Surveillance
                </h2>
              </div>
            </div>
            <p className="text-gray-300">
              CCTV surveillance is in operation throughout the venue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-pana-gold/10 rounded-lg border border-pana-gold p-8 text-center"
          >
            <p className="text-white font-semibold mb-2">
              By entering the premises, all patrons acknowledge and accept these conditions of entry.
            </p>
            <p className="text-gray-300 text-sm">
              Management reserves the right to amend venue rules and conditions of entry at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
