document.querySelectorAll('[data-codex-register]').forEach((register) => {
  const entries = [...register.querySelectorAll('[data-codex-target]')];
  if (!entries.length) return;

  entries.forEach((entry) => entry.addEventListener('click', () => {
    entries.forEach((item) => {
      const selected = item === entry;
      item.setAttribute('aria-selected', String(selected));
      const panel = document.querySelector(item.dataset.codexTarget);
      if (panel) panel.hidden = !selected;
    });
  }));
});
