// Such-Overlay: öffnet über den Header-Button (#site-search-btn), filtert
// window.SITE_SEARCH_INDEX clientseitig, gruppiert Treffer nach Typ.
(() => {
  'use strict';

  const btn = document.getElementById('site-search-btn');
  if (!btn) return;

  const base = btn.dataset.base || '';
  const index = (window.SITE_SEARCH_INDEX || []).map((entry) => ({
    ...entry,
    href: /^([a-z]+:)?\/\//i.test(entry.href) ? entry.href : base + entry.href
  }));

  const normalize = (value) => value.toLocaleLowerCase('de-DE')
    .replace(/ß/g, 'ss').normalize('NFD').replace(/[̀-ͯ]/g, '');

  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.innerHTML = `
    <button type="button" class="search-overlay__scrim" aria-label="Suche schließen"></button>
    <div class="search-overlay__panel" role="dialog" aria-modal="true" aria-label="Codex durchsuchen">
      <div class="search-box">
        <div class="search-box__input-row">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.6" cy="8.6" r="6.1" stroke="currentColor" stroke-width="1.6"/><line x1="13.2" y1="13.2" x2="18" y2="18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          <input type="search" id="site-search-input" placeholder="Regionen, Klassen, Personen, Monster …" autocomplete="off">
          <button type="button" class="search-box__close" aria-label="Suche schließen"><svg viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4 4 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
        </div>
        <div class="search-results" id="site-search-results"></div>
      </div>
    </div>`;
  document.body.append(overlay);

  const input = overlay.querySelector('#site-search-input');
  const results = overlay.querySelector('#site-search-results');

  function renderResults(query) {
    const q = normalize(query.trim());
    if (!q) {
      results.innerHTML = '<p class="search-hint">Tippen, um Regionen, Klassen, Personen, Fraktionen und Monster im Codex zu durchsuchen.</p>';
      return;
    }
    const matches = index.filter((entry) => normalize(entry.label).includes(q));
    if (!matches.length) {
      results.innerHTML = '<p class="search-empty">Kein Eintrag gefunden.</p>';
      return;
    }
    const groups = new Map();
    matches.forEach((entry) => {
      if (!groups.has(entry.type)) groups.set(entry.type, []);
      groups.get(entry.type).push(entry);
    });
    results.innerHTML = [...groups.entries()].map(([type, entries]) => `
      <div class="search-results__group">
        <span class="search-results__group-label">${type}</span>
        ${entries.map((e) => `<a class="search-result" href="${e.href}">${e.label}</a>`).join('')}
      </div>
    `).join('');
  }

  function open() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderResults('');
    input.value = '';
    setTimeout(() => input.focus(), 10);
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', open);
  overlay.querySelector('.search-overlay__scrim').addEventListener('click', close);
  overlay.querySelector('.search-box__close').addEventListener('click', close);
  input.addEventListener('input', () => renderResults(input.value));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();
