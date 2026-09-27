// Rendert die Hauptnavigation (Topbar + Mega-Menüs + Suchbutton + mobiles
// Burger/Accordion-Menü) aus window.SITE_NAV in jeden #site-header-Platzhalter.
// Liest data-base (Pfad-Präfix, z.B. "../" auf Unterseiten) und data-active
// (welcher Hauptpunkt aktuell aktiv ist) vom Platzhalter-Element.
(() => {
  'use strict';

  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const resolveHref = (href, base) => {
    if (!href) return '';
    if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith('#')) return href;
    return base + href;
  };

  const searchIconSvg = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.6" cy="8.6" r="6.1" stroke="currentColor" stroke-width="1.6"/><line x1="13.2" y1="13.2" x2="18" y2="18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const chevronSvg = '<svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function renderPanelEntry(entry, base) {
    if (!entry.href) {
      return `<span class="nav-panel-entry is-disabled">
        <span class="nav-panel-entry-title">${escapeHtml(entry.label)}${entry.badge ? `<em class="nav-panel-badge">${escapeHtml(entry.badge)}</em>` : ''}</span>
        <span class="nav-panel-entry-desc">${escapeHtml(entry.desc)}</span>
      </span>`;
    }
    return `<a class="nav-panel-entry" href="${resolveHref(entry.href, base)}" role="menuitem">
      <span class="nav-panel-entry-title">${escapeHtml(entry.label)}</span>
      <span class="nav-panel-entry-desc">${escapeHtml(entry.desc)}</span>
    </a>`;
  }

  function renderItem(item, base, active) {
    const isActive = item.id === active;
    const hasPanel = !!item.panel;
    const panelId = `nav-panel-${item.id}`;
    return `<div class="nav-item${hasPanel ? ' has-panel' : ''}${isActive ? ' is-active' : ''}">
      <a href="${resolveHref(item.href, base)}"${isActive ? ' aria-current="page"' : ''}>${escapeHtml(item.label)}</a>
      ${hasPanel ? `<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="${panelId}" aria-label="${escapeHtml(item.label)} Untermenü öffnen">${chevronSvg}</button>` : ''}
      ${hasPanel ? `<div class="nav-panel" id="${panelId}" role="menu" aria-label="${escapeHtml(item.panel.title)}">
        <span class="nav-panel-title">${escapeHtml(item.panel.title)}</span>
        <div class="nav-panel-grid">${item.panel.entries.map((e) => renderPanelEntry(e, base)).join('')}</div>
      </div>` : ''}
    </div>`;
  }

  function render(root) {
    const data = window.SITE_NAV;
    if (!data) return;
    const base = root.dataset.base || '';
    const active = root.dataset.active || '';

    root.outerHTML = `<header class="topbar">
      <nav class="nav" aria-label="Hauptnavigation">
        <a class="brand" href="${resolveHref(data.brand.href, base)}"><img src="${resolveHref(data.brand.logo, base)}" alt="The Horadric Codex" class="brand-logo"></a>
        <div class="nav-links" id="nav-links">
          ${data.items.map((item) => renderItem(item, base, active)).join('')}
          <button type="button" class="nav-search-btn" id="site-search-btn" data-base="${base}" aria-haspopup="dialog">${searchIconSvg}<span>Codex durchsuchen</span></button>
        </div>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav-links">Menü</button>
      </nav>
    </header>`;
  }

  function closeAllPanels(scope) {
    scope.querySelectorAll('.nav-item.is-open').forEach((item) => {
      item.classList.remove('is-open');
      const toggle = item.querySelector('.nav-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function wireInteractions(header) {
    const menuBtn = header.querySelector('.menu-btn');
    const navLinks = header.querySelector('.nav-links');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
        if (!open) closeAllPanels(header);
      });
    }

    header.querySelectorAll('.nav-toggle').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const item = toggle.closest('.nav-item');
        const willOpen = !item.classList.contains('is-open');
        closeAllPanels(header);
        if (willOpen) {
          item.classList.add('is-open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Klick auf einen echten Link (Haupt-Link oder Panel-Eintrag) schließt
    // das mobile Menü/offene Panels wieder, statt sie stehen zu lassen.
    header.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        closeAllPanels(header);
        if (navLinks) navLinks.classList.remove('open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) closeAllPanels(header);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      const openItem = header.querySelector('.nav-item.is-open');
      if (openItem) {
        closeAllPanels(header);
        openItem.querySelector('.nav-toggle')?.focus();
      }
    });

    // Beim Wechsel über den Breakpoint (z.B. Fenster verbreitern) hängen
    // gebliebene offene Zustände zurücksetzen, damit nichts "klemmt".
    const mq = window.matchMedia('(max-width:860px)');
    const reset = () => {
      closeAllPanels(header);
      if (navLinks) navLinks.classList.remove('open');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    };
    if (mq.addEventListener) mq.addEventListener('change', reset);
    else if (mq.addListener) mq.addListener(reset);
  }

  document.querySelectorAll('#site-header').forEach((placeholder) => {
    render(placeholder);
  });
  // outerHTML-Ersatz oben verändert das ursprüngliche Element - daher die
  // Interaktions-Verdrahtung über die frisch eingefügte .topbar erledigen.
  document.querySelectorAll('.topbar').forEach((header) => wireInteractions(header));
})();
