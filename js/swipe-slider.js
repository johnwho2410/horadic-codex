(() => {
  'use strict';

  // Wischgeste für die Slider/Foliant-Seiten der Unterseiten (die Startseite
  // hat ihre eigene Variante in js/app.js). Ein deutlich horizontaler Wisch
  // (> 55px, mehr als 1,5x so weit wie vertikal) löst den vorhandenen
  // Zurück-/Weiter-Button aus - die Seiten-Logik bleibt dadurch unverändert.
  const targets = [
    ['.uebel-slider', '.uebel-prev', '.uebel-next'],
    ['.council-slider', '.council-prev', '.council-next'],
    ['#uebel-study .codex-folio__book', '#uebel-previous', '#uebel-next'],
    ['#creature-study .codex-folio__book', '#monster-previous', '#monster-next'],
    ['#archive-study .codex-folio__book', '#archive-previous', '#archive-next']
  ];

  targets.forEach(([rootSelector, prevSelector, nextSelector]) => {
    const root = document.querySelector(rootSelector);
    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);
    if (!root || !prev || !next) return;

    let startX = 0;
    let startY = 0;
    root.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    }, { passive: true });
    root.addEventListener('touchend', (event) => {
      const touch = event.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev).click();
    }, { passive: true });
  });
})();
