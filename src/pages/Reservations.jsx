import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Calendar } from 'lucide-react'

const ReservationSection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-black/30 rounded-lg border border-pana-gold/20 p-8 mb-8"
  >
    <h3 className="text-2xl font-serif font-semibold text-pana-gold mb-4">
      {title}
    </h3>
    <div className="text-gray-300 space-y-3">
      {children}
    </div>
  </motion.div>
)

const Reservations = () => {
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
            Book Your Experience
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            We encourage reservations to ensure the best possible experience.
          </p>
          <p className="text-white max-w-3xl mx-auto">
            Pana offers different experiences throughout the day, from relaxed lunches to elegant dinners and a lively late-night lounge atmosphere. As the venue transitions, certain seating areas and booking requirements change to suit the experience. By making a reservation, guests acknowledge the booking policies outlined below.
          </p>
        </motion.div>

        {/* Booking Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-black/50 rounded-lg border border-pana-gold/30 p-8 md:p-12 mb-12"
        >
          <h2 className="text-2xl font-serif font-semibold text-pana-gold mb-6 text-center">
            Bookings can be made through:
          </h2>

          <div className="space-y-4">
            <a
              href="https://wa.me/27768711227"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-pana-dark rounded-lg border border-pana-gold/20 hover:border-pana-gold transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-pana-gold flex-shrink-0" />
              <span className="text-white font-semibold">WhatsApp Business</span>
            </a>
            <a
              href="https://www.dineplan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-pana-dark rounded-lg border border-pana-gold/20 hover:border-pana-gold transition-colors"
            >
              <Calendar className="w-6 h-6 text-pana-gold flex-shrink-0" />
              <span className="text-white font-semibold">Dineplan</span>
            </a>
            <a
              href="tel:+27114650101"
              className="flex items-center gap-4 p-4 bg-pana-dark rounded-lg border border-pana-gold/20 hover:border-pana-gold transition-colors"
            >
              <Phone className="w-6 h-6 text-pana-gold flex-shrink-0" />
              <span className="text-white font-semibold">Telephone</span>
            </a>
            <a
              href="mailto:info@panafourways.co.za"
              className="flex items-center gap-4 p-4 bg-pana-dark rounded-lg border border-pana-gold/20 hover:border-pana-gold transition-colors"
            >
              <Mail className="w-6 h-6 text-pana-gold flex-shrink-0" />
              <span className="text-white font-semibold">E-mail</span>
            </a>
          </div>
        </motion.div>

        {/* Service Times */}
        <ReservationSection title="Lunch Service 12:00 - 18:00">
          <p>Lunch at Pana offers a relaxed dining environment where guests can enjoy our food, drinks and hospitality at their own pace.</p>
          <p>Reservations during lunch service, specially on weekends, are advised but walk-ins are also welcome.</p>
          <p>Larger groups may be allocated seating best suited to their party size.</p>
        </ReservationSection>

        <ReservationSection title="Evening Service 18:00 - 21:00">
          <p>As the day transitions into the evening, Pana becomes a more refined dining destination.</p>
          <p>During dinner service, selected seating areas may require booking well in advance due to high demand depending on the day, table location & group size.</p>
          <p>Our reservations team will always gladly assist before your booking is confirmed.</p>
        </ReservationSection>

        <ReservationSection title="Late-Night Lounge Experience">
          <p>From 21:00 til late, Pana transitions into a signature lounge experience.</p>
          <p>Certain seating areas may have bottle service requirements with applicable minimum spend.</p>
          <p>This allows us to maintain the atmosphere and level of service expected during our evening experience.</p>
          <p>Our reservations team will always communicate our T&apos;s &amp; C&apos;s before your booking is confirmed.</p>
        </ReservationSection>

        <ReservationSection title="Large Group Bookings">
          <p>For larger celebrations, birthdays, corporate functions and private gatherings, additional booking requirements may apply.</p>
          <p className="font-semibold">Depending on your group size, we may require:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>A minimum spend</li>
            <li>A booking deposit</li>
            <li>Pre-selected seating</li>
            <li>Menu or beverage pre-orders where appropriate</li>
          </ul>
          <p>Our reservations team will guide you through the most suitable option for your gathering.</p>
        </ReservationSection>

        <ReservationSection title="Birthday & Celebrations">
          <p>We love celebrating special occasions.</p>
          <p>Whether you&apos;re planning an intimate dinner or a larger celebration, our team will recommend the most appropriate seating option to ensure your guests enjoy the best possible experience.</p>
          <p>Please let us know in advance if you&apos;re celebrating so we can assist wherever possible.</p>
        </ReservationSection>
      </div>
    </div>
  )
}

export default Reservations
