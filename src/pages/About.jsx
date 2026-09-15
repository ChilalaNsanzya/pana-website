import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="bg-pana-dark min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-pana-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-pana-gold mb-6">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-pana-gold mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Pana was created as a space where people could gather, connect and celebrate life.
            </p>

            <div className="bg-black/50 p-8 rounded-lg border border-pana-gold/30 my-12">
              <h2 className="text-3xl font-serif text-pana-gold mb-4 text-center">
                pa · na
              </h2>
              <p className="text-center text-gray-400 mb-2">
                [ pah-nuh : noun ]
              </p>
              <div className="w-32 h-px bg-pana-gold/50 mx-auto my-6"></div>
              <p className="text-lg text-gray-300 text-center">
                Latin American slang meaning: a very close friend, buddy, homie, or confidant.
              </p>
              <p className="text-sm text-gray-400 text-center mt-4 italic">
                Origin: believed to be an adaptation of the English word "partner".
              </p>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Inspired by the warmth of hospitality and the energy of modern social culture, Pana combines exceptional dining, premium drinks and a vibrant lounge experience under one roof.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Whether you're visiting for a business lunch, weekend brunch, cocktails with friends or an evening out, Pana offers an experience that feels familiar, welcoming and memorable.
            </p>

            <p className="text-2xl font-serif text-pana-gold text-center my-12">
              Pana is your home away from home.
            </p>

            <p className="text-3xl font-serif text-white text-center mb-8">
              #WhereFriendsMeet
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
