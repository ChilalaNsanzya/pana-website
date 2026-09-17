import { useState } from 'react'
import { motion } from 'framer-motion'
import { UtensilsCrossed, Wine, Cigarette, ChevronDown, ChevronUp } from 'lucide-react'
import { foodMenu, drinksMenu, cigarsMenu } from '../data/menuData'

const MenuSection = ({ section, isOpen, onToggle }) => {
  return (
    <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-2xl font-serif font-semibold text-pana-gold mb-2">
            {section.title}
          </h3>
          {section.description && (
            <p className="text-sm text-gray-400 italic">{section.description}</p>
          )}
        </div>
        {isOpen ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-6 bg-black/20"
        >
          <div className="grid grid-cols-1 gap-4">
            {section.items.map((item, index) => (
              <div key={index} className="border-b border-pana-gold/10 pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                  <span className="text-white font-bold ml-4 whitespace-nowrap tabular-nums" style={{ fontFamily: "'Libre Baskerville', serif" }}>{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-400 font-sans">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

const DrinkSection = ({ title, items, hasGlassBottle = false }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-serif font-semibold text-pana-gold mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-pana-gold/10">
            <div className="flex flex-col">
              <span className="text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>{item.name}</span>
              {item.description && (
                <span className="text-sm text-gray-400 font-sans">{item.description}</span>
              )}
            </div>
            <div className="flex gap-6 min-w-[200px]">
              {/* Glass column */}
              <span className="text-white font-bold tabular-nums w-20 text-left" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {item.glass || item.single || ''}
              </span>
              {/* Bottle column */}
              <span className="text-white font-bold tabular-nums w-20 text-left" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {item.bottle || item.price || ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Menus = () => {
  const [activeMenu, setActiveMenu] = useState('food')
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

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
            Our Menus
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Carefully crafted dishes and premium beverages designed to delight
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveMenu('food')}
            className={`flex items-center justify-center gap-2 whitespace-nowrap px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all ${
              activeMenu === 'food'
                ? 'bg-pana-gold text-pana-dark'
                : 'bg-black text-white border-2 border-pana-gold/30 hover:border-pana-gold'
            }`}
          >
            <UtensilsCrossed size={22} className="shrink-0" />
            Food Menu
          </button>
          <button
            onClick={() => setActiveMenu('drinks')}
            className={`flex items-center justify-center gap-2 whitespace-nowrap px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all ${
              activeMenu === 'drinks'
                ? 'bg-pana-gold text-pana-dark'
                : 'bg-black text-white border-2 border-pana-gold/30 hover:border-pana-gold'
            }`}
          >
            <Wine size={22} className="shrink-0" />
            Drinks Menu
          </button>
          <button
            onClick={() => setActiveMenu('cigars')}
            className={`flex items-center justify-center gap-2 whitespace-nowrap px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all ${
              activeMenu === 'cigars'
                ? 'bg-pana-gold text-pana-dark'
                : 'bg-black text-white border-2 border-pana-gold/30 hover:border-pana-gold'
            }`}
          >
            <Cigarette size={22} className="shrink-0" />
            Cigars & Shisha
          </button>
        </div>

        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeMenu === 'food' ? (
            <div className="space-y-4">
              <MenuSection
                section={foodMenu.starters} 
                isOpen={openSections.starters}
                onToggle={() => toggleSection('starters')}
              />
              <MenuSection 
                section={foodMenu.salads} 
                isOpen={openSections.salads}
                onToggle={() => toggleSection('salads')}
              />
              <MenuSection 
                section={foodMenu.tacos} 
                isOpen={openSections.tacos}
                onToggle={() => toggleSection('tacos')}
              />
              <MenuSection 
                section={foodMenu.mains} 
                isOpen={openSections.mains}
                onToggle={() => toggleSection('mains')}
              />
              <MenuSection 
                section={foodMenu.pasta} 
                isOpen={openSections.pasta}
                onToggle={() => toggleSection('pasta')}
              />
              <MenuSection 
                section={foodMenu.pizza} 
                isOpen={openSections.pizza}
                onToggle={() => toggleSection('pizza')}
              />
              <MenuSection 
                section={foodMenu.sharing} 
                isOpen={openSections.sharing}
                onToggle={() => toggleSection('sharing')}
              />
              <MenuSection 
                section={foodMenu.burgers} 
                isOpen={openSections.burgers}
                onToggle={() => toggleSection('burgers')}
              />
              <MenuSection
                section={foodMenu.sides}
                isOpen={openSections.sides}
                onToggle={() => toggleSection('sides')}
              />
              <MenuSection
                section={foodMenu.sauces}
                isOpen={openSections.sauces}
                onToggle={() => toggleSection('sauces')}
              />
              <MenuSection
                section={foodMenu.desserts}
                isOpen={openSections.desserts}
                onToggle={() => toggleSection('desserts')}
              />
            </div>
          ) : activeMenu === 'drinks' ? (
            <div className="space-y-4">
              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('classicCocktails')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Classic Cocktails</h3>
                  {openSections.classicCocktails ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.classicCocktails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.cocktails.classic.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('signatureCocktails')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Signature Cocktails</h3>
                  {openSections.signatureCocktails ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.signatureCocktails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.cocktails.signature.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('mocktails')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Mocktails</h3>
                  {openSections.mocktails ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.mocktails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.cocktails.mocktails.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('vodka')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Vodka</h3>
                  {openSections.vodka ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.vodka && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.spirits.vodka.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('gin')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Gin</h3>
                  {openSections.gin ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.gin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.spirits.gin.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('tequila')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Tequila</h3>
                  {openSections.tequila ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.tequila && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.spirits.tequila.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('whisky')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Whisky</h3>
                  {openSections.whisky ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.whisky && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20 space-y-6"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Scotch</h4>
                      <DrinkSection title="" items={drinksMenu.spirits.whisky.scotch.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Single Malt</h4>
                      <DrinkSection title="" items={drinksMenu.spirits.whisky.singleMalt.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Irish</h4>
                      <DrinkSection title="" items={drinksMenu.spirits.whisky.irish.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">American</h4>
                      <DrinkSection title="" items={drinksMenu.spirits.whisky.american.items} />
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('cognac')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Cognac</h3>
                  {openSections.cognac ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.cognac && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.spirits.cognac.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('brandyRum')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Brandy & Rum</h3>
                  {openSections.brandyRum ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.brandyRum && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.spirits.brandyRum.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('liqueurs')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Liqueurs & Aperitifs</h3>
                  {openSections.liqueurs ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.liqueurs && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.spirits.liqueurs.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('champagne')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Champagne</h3>
                  {openSections.champagne ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.champagne && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.champagne.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('mcc')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">MCC / Sparkling</h3>
                  {openSections.mcc ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.mcc && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.mcc.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('prosecco')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Prosecco</h3>
                  {openSections.prosecco ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.prosecco && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.prosecco.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('wines')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Wines</h3>
                  {openSections.wines ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.wines && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20 space-y-6"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">White Wines - Chardonnay</h4>
                      <DrinkSection title="" items={drinksMenu.wine.white.chardonnay.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">White Wines - Chenin</h4>
                      <DrinkSection title="" items={drinksMenu.wine.white.chenin.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">White Wines - Sauvignon Blanc</h4>
                      <DrinkSection title="" items={drinksMenu.wine.white.sauvignonBlanc.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">White Wines - Blends</h4>
                      <DrinkSection title="" items={drinksMenu.wine.white.blends.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">White Wines - Semi-Sweet</h4>
                      <DrinkSection title="" items={drinksMenu.wine.white.semiSweet.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Rosé</h4>
                      <DrinkSection title="" items={drinksMenu.wine.rose.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Red Wines - Pinot Noir</h4>
                      <DrinkSection title="" items={drinksMenu.wine.red.pinotNoir.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Red Wines - Cabernet Sauvignon</h4>
                      <DrinkSection title="" items={drinksMenu.wine.red.cabernetSauvignon.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Red Wines - Pinotage</h4>
                      <DrinkSection title="" items={drinksMenu.wine.red.pinotage.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Red Wines - Merlot</h4>
                      <DrinkSection title="" items={drinksMenu.wine.red.merlot.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Red Wines - Shiraz</h4>
                      <DrinkSection title="" items={drinksMenu.wine.red.shiraz.items} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pana-gold mb-3">Red Wines - Blends</h4>
                      <DrinkSection title="" items={drinksMenu.wine.red.redBlends.items} />
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('beers')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Beers</h3>
                  {openSections.beers ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.beers && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.beer.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('ciders')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Ciders & Coolers</h3>
                  {openSections.ciders ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.ciders && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.ciders.items} />
                  </motion.div>
                )}
              </div>

              <div className="mb-6 border border-pana-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('softDrinks')}
                  className="w-full flex items-center justify-between p-6 bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-semibold text-pana-gold">Soft Drinks</h3>
                  {openSections.softDrinks ? <ChevronUp className="text-pana-gold" size={24} /> : <ChevronDown className="text-pana-gold" size={24} />}
                </button>
                {openSections.softDrinks && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/20"
                  >
                    <DrinkSection title="" items={drinksMenu.softDrinks.items} />
                  </motion.div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <MenuSection
                section={cigarsMenu.cigars}
                isOpen={openSections.cigars}
                onToggle={() => toggleSection('cigars')}
              />
              <MenuSection
                section={cigarsMenu.shisha}
                isOpen={openSections.shisha}
                onToggle={() => toggleSection('shisha')}
              />
            </div>
          )}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Menu items and prices are subject to change. Please ask your server for daily specials and seasonal offerings.
          </p>
          <a
            href="https://wa.me/27768711227"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Contact Us for More Info
          </a>
        </div>
      </div>
    </div>
  )
}

export default Menus
