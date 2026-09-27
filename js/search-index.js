// Statischer, clientseitiger Such-Index (v1). Hrefs sind site-root-relativ,
// js/site-search.js stellt dem passenden data-base voran.
//
// Bewusst NICHT aus js/monster-index.js / js/archive-index.js generiert -
// beide Module bleiben unangetastet. Diese Liste dupliziert daher eine
// Teilmenge ihrer Einträge von Hand; bei inhaltlichen Änderungen dort bitte
// hier kurz nachziehen. Noch nicht abgedeckt: Artefakte, Lorebegriffe/
// Glossar, Chronik-Einzelkapitel (siehe offene Punkte im Nav-Plan).
window.SITE_SEARCH_INDEX = [
  // Seiten
  { type: 'Seite', label: 'Sanktuario', href: 'sanctuary.html' },
  { type: 'Seite', label: 'Chronik', href: 'sanctuary.html#chronik' },
  { type: 'Seite', label: 'Welt & Regionen', href: 'sanctuary.html#welt' },
  { type: 'Seite', label: 'Stammbaum Sanktuarios', href: 'sanctuary.html#beziehungen' },
  { type: 'Seite', label: 'Hohe Himmel', href: 'himmel.html' },
  { type: 'Seite', label: 'Brennende Höllen', href: 'hoelle.html' },
  { type: 'Seite', label: 'Das Archiv', href: 'archiv.html' },
  { type: 'Seite', label: 'Bestiarium', href: 'voelker.html' },
  { type: 'Seite', label: 'Personen & Fraktionen', href: 'persoenlichkeiten.html' },
  { type: 'Seite', label: 'Klassenübersicht', href: 'klassen.html' },
  { type: 'Seite', label: 'Wissen', href: 'wissen.html' },
  { type: 'Seite', label: 'Kosmologie', href: 'wissen/kosmologie.html' },
  { type: 'Seite', label: 'Weltenstein', href: 'wissen/weltenstein.html' },

  // Regionen
  { type: 'Region', label: 'Zersplitterte Gipfel', href: 'welt/zersplitterte-gipfel.html' },
  { type: 'Region', label: 'Scosglen', href: 'welt/scosglen.html' },
  { type: 'Region', label: 'Trockensteppe', href: 'welt/trockensteppe.html' },
  { type: 'Region', label: 'Kehjistan', href: 'welt/kehjistan.html' },
  { type: 'Region', label: 'Hawezar', href: 'welt/hawezar.html' },
  { type: 'Region', label: 'Nahantu', href: 'welt/nahantu.html' },
  { type: 'Region', label: 'Skovos', href: 'welt/skovos.html' },

  // Klassen
  { type: 'Klasse', label: 'Barbar', href: 'klassen/barbar.html' },
  { type: 'Klasse', label: 'Druide', href: 'klassen/druide.html' },
  { type: 'Klasse', label: 'Totenbeschwörer', href: 'klassen/totenbeschwoerer.html' },
  { type: 'Klasse', label: 'Jäger', href: 'klassen/jaeger.html' },
  { type: 'Klasse', label: 'Zauberer', href: 'klassen/zauberer.html' },
  { type: 'Klasse', label: 'Geistgeborener', href: 'klassen/geistgeborener.html' },
  { type: 'Klasse', label: 'Paladin', href: 'klassen/paladin.html' },
  { type: 'Klasse', label: 'Hexenmeister', href: 'klassen/hexenmeister.html' },

  // Fraktionen (persoenlichkeiten.html, Gruppe "Fraktionen")
  { type: 'Fraktion', label: 'Horadrim', href: 'persoenlichkeiten.html#fraktionen' },
  { type: 'Fraktion', label: 'Kathedrale des Lichts', href: 'persoenlichkeiten.html#fraktionen' },
  { type: 'Fraktion', label: 'Triune', href: 'persoenlichkeiten.html#fraktionen' },
  { type: 'Fraktion', label: 'Zakarum', href: 'persoenlichkeiten.html#fraktionen' },
  { type: 'Fraktion', label: 'Eisenwölfe', href: 'persoenlichkeiten.html#fraktionen' },
  { type: 'Fraktion', label: 'Angiris-Rat', href: 'persoenlichkeiten.html#fraktionen' },

  // Personen (persoenlichkeiten.html, Gruppe "Personen")
  { type: 'Person', label: 'Lilith', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Inarius', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Tyrael', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Deckard Cain', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Lorath Nahr', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Elias', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Neyrelle', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Mephisto', href: 'persoenlichkeiten.html#personen' },
  { type: 'Person', label: 'Rathma', href: 'persoenlichkeiten.html#personen' },

  // Monster/Gegnerfamilien (voelker.html)
  { type: 'Monster', label: 'Banditen', href: 'voelker.html' },
  { type: 'Monster', label: 'Kannibalen', href: 'voelker.html' },
  { type: 'Monster', label: 'Kultisten', href: 'voelker.html' },
  { type: 'Monster', label: 'Dämonen', href: 'voelker.html' },
  { type: 'Monster', label: 'Ertrunkene', href: 'voelker.html' },
  { type: 'Monster', label: 'Gefallene', href: 'voelker.html' },
  { type: 'Monster', label: 'Geister', href: 'voelker.html' },
  { type: 'Monster', label: 'Ziegenmenschen', href: 'voelker.html' },
  { type: 'Monster', label: 'Skelette', href: 'voelker.html' },
  { type: 'Monster', label: 'Schlangen', href: 'voelker.html' },
  { type: 'Monster', label: 'Spinnen', href: 'voelker.html' },
  { type: 'Monster', label: 'Vampire', href: 'voelker.html' },
  { type: 'Monster', label: 'Werwölfe', href: 'voelker.html' },
  { type: 'Monster', label: 'Zombies', href: 'voelker.html' },
  { type: 'Monster', label: 'Ritter der Buße', href: 'voelker.html' },
  { type: 'Monster', label: 'Maden & Brut', href: 'voelker.html' },
  { type: 'Monster', label: 'Fliegen & Schwärme', href: 'voelker.html' },
  { type: 'Monster', label: 'Wildnisbestien', href: 'voelker.html' }
];
