(() => {
  'use strict';

  // Mobil ist die Chronik ~21.000px lang (11 Einträge à ~1.900px). Unter 760px
  // zeigt jeder Eintrag deshalb nur den ersten Absatz, der Rest klappt per
  // "Weiterlesen" auf. Auf breiten Viewports bleibt alles offen sichtbar.
  const mq = window.matchMedia('(max-width: 760px)');
  const copies = [...document.querySelectorAll('.chronicle-copy')].filter((copy) => copy.children.length > 1);
  if (!copies.length) return;

  const buttons = new Map();

  copies.forEach((copy, index) => {
    if (!copy.id) copy.id = `chronicle-copy-${index + 1}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chronicle-more';
    button.setAttribute('aria-controls', copy.id);
    button.addEventListener('click', () => {
      const collapsed = copy.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!collapsed));
      button.textContent = collapsed ? 'Weiterlesen' : 'Weniger anzeigen';
    });
    copy.after(button);
    buttons.set(copy, button);
  });

  function apply() {
    copies.forEach((copy) => {
      const button = buttons.get(copy);
      if (mq.matches) {
        copy.classList.add('is-collapsed');
        button.hidden = false;
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Weiterlesen';
      } else {
        copy.classList.remove('is-collapsed');
        button.hidden = true;
      }
    });
  }

  apply();
  mq.addEventListener('change', apply);
})();
