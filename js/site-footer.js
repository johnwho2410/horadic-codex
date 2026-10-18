// Rendert den Footer aus window.SITE_NAV in jeden #site-footer-Platzhalter.
// Markup entspricht 1:1 dem bisherigen handkopierten Footer, ergänzt um den
// aus der Hauptnav verschobenen "Wichtige Seiten"-Link.
(() => {
  'use strict';

  const resolveHref = (href, base) => {
    if (!href) return '';
    if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith('#')) return href;
    return base + href;
  };

  function render(root) {
    const data = window.SITE_NAV;
    if (!data) return;
    const base = root.dataset.base || '';
    const extra = data.footerExtraLink;

    const rune = root.dataset.rune === 'true'
      ? `<a class="footer-rune" href="${resolveHref('kuh-level.html', base)}" aria-label="Eine kaum sichtbare Kuh am Rand der Seite"><img src="${resolveHref('img/muh/icon_footer.webp', base)}" alt="" aria-hidden="true"></a>`
      : '';

    // Die Subnavi (Sprungmarken-Leiste) stand bisher fest am Bildschirmrand
    // (position:fixed) und lag damit unabhängig vom Footer irgendwo über dem
    // Content. Sie steht jetzt lückenlos direkt über dem Footer - dafür wird
    // sie hierher verschoben (ihr eigentlicher Inhalt bleibt an ihrer
    // bisherigen Stelle im HTML unverändert, nur die Position im DOM ändert
    // sich).
    const subnav = document.querySelector('.subnav');
    if (subnav) {
      root.parentNode.insertBefore(subnav, root);
    }

    // Das Kerzen-Bild (footer-abbinder.webp) ist der Footer selbst: es liegt
    // als Hintergrund in css/site-nav.css, der Inhalt steht auf dem Holztisch
    // des Bildes.
    root.outerHTML = `<footer class="site-footer"><div class="footer-inner">
      <div class="footer-notice">
        <p>Inoffizielles Fan-Kompendium. Diablo und alle zugehörigen Namen sind Marken von Blizzard Entertainment. Spiel-Artworks, Screenshots und Icons © Blizzard Entertainment, genutzt im Rahmen der Fan Content Policy.</p>
        <p>Icons von <a href="https://www.onlinewebfonts.com/icon" target="_blank" rel="noopener">onlinewebfonts.com</a>, lizenziert unter CC BY 4.0.</p>
      </div>
      <div class="footer-meta">
        <nav class="footer-links" aria-label="Rechtliches und weiteres">
          <a href="${resolveHref(extra.href, base)}">${extra.label}</a>
          <a href="${resolveHref('impressum.html', base)}">Impressum</a>
          <a href="${resolveHref('datenschutz.html', base)}">Datenschutz</a>
          <a href="${resolveHref('quellen.html', base)}">Quellen</a>
          <a href="${resolveHref('ueber-ki.html', base)}">Über KI</a>
        </nav>
        <a class="backtop" href="#top">Nach oben ↑</a>
      </div>
    </div>${rune}</footer>`;
  }

  document.querySelectorAll('#site-footer').forEach(render);
})();
