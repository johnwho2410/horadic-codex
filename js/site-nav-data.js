// Einzige Datenquelle für Hauptnavigation, Mega-Menüs und Footer-Links.
// Künftige Änderungen an der Navigationsstruktur gehören ausschließlich hierhin -
// js/site-header.js und js/site-footer.js lesen dieses Objekt nur noch aus.
window.SITE_NAV = {
  brand: { href: 'index.html', logo: 'img/gemeinsam/logo-crop.webp' },

  items: [
    {
      id: 'sanktuario',
      label: 'Sanktuario',
      href: 'sanctuary.html',
      panel: {
        title: 'Sanktuario',
        entries: [
          { label: 'Die Welt', desc: 'Kurzer Einstieg in Sanktuario als sterbliche Welt', href: 'sanctuary.html' },
          { label: 'Chronik', desc: 'Von den Ursprüngen bis Diablo IV', href: 'sanctuary.html#chronik' },
          { label: 'Welt & Regionen', desc: 'Regionen, Orte und Landschaften Sanktuarios', href: 'sanctuary.html#welt' },
          { label: 'Völker & Kulturen', desc: 'Bewohner, Kulturen und Gefahren – mit Verweisen ins Bestiarium und Archiv', href: 'sanctuary.html#voelker' },
          { label: 'Stammbaum', desc: 'Ursprünge und Abstammung zentraler Wesen', href: 'sanctuary.html#beziehungen' }
        ]
      }
    },
    { id: 'himmel', label: 'Hohe Himmel', href: 'himmel.html' },
    { id: 'hoelle', label: 'Brennende Höllen', href: 'hoelle.html' },
    {
      id: 'archiv',
      label: 'Archiv',
      href: 'archiv.html',
      panel: {
        title: 'Das Archiv',
        entries: [
          { label: 'Personen', desc: 'Helden, Horadrim, Engel, Dämonen und weitere Schlüsselfiguren', href: 'persoenlichkeiten.html#personen' },
          { label: 'Fraktionen', desc: 'Orden, Religionen, Kulte und Organisationen', href: 'persoenlichkeiten.html#fraktionen' },
          { label: 'Bestiarium', desc: 'Monster, Gegnerfamilien und gefährliche Kreaturen', href: 'voelker.html' },
          { label: 'Artefakte', desc: 'Weltenstein, Seelensteine und bedeutende Relikte', href: null, badge: 'bald verfügbar' }
        ]
      }
    },
    {
      id: 'wissen',
      label: 'Wissen',
      href: 'index.html#wissen',
      panel: {
        title: 'Wissen',
        entries: [
          { label: 'Kosmologie', desc: 'Anu, Tathamet, Schöpfung, Ewiger Konflikt', href: 'index.html#wissen' },
          { label: 'Artefakte', desc: 'Weltenstein, Seelensteine und bedeutende Relikte', href: 'index.html#wissen' },
          { label: 'Magie & Konzepte', desc: 'Metaphysische und magische Grundlagen', href: 'index.html#wissen' },
          { label: 'Religion & Lehren', desc: 'Glaubenssysteme und Lehren Sanktuarios', href: 'index.html#wissen' },
          { label: 'Glossar', desc: 'Begriffe und kurze Erklärungen', href: 'index.html#wissen' }
        ]
      }
    }
  ],

  footerExtraLink: { label: 'Wichtige Seiten', href: 'index.html#links' }
};
