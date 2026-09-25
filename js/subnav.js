const subnav = document.querySelector('.subnav');
if (subnav) {
  const links = [...subnav.querySelectorAll('a[href^="#"]')];
  if (links.length < 2) {
    subnav.remove();
  } else {
    const sections = links
      .map(link => document.getElementById(link.getAttribute('href').slice(1)))
      .filter(Boolean);

    const setActive = link => links.forEach(l => l.classList.toggle('active', l === link));

    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (!visible) return;
      const link = links.find(l => l.getAttribute('href') === `#${visible.target.id}`);
      if (link) setActive(link);
    }, { rootMargin: '-100px 0px -65% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }
}
