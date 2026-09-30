(() => {
  'use strict';

  // Dieselbe codex-folio-Mechanik wie das Bestiarium (js/monster-index.js),
  // hier auf nur eine, flache Registerebene reduziert: vier Fähnchen, ein
  // Eintrag pro Fähnchen, kein Such-/Familien-Unterbau nötig.
  const uebel = [
    {
      id: 'andariel',
      name: 'Andariel',
      subtitle: 'Zwillingsschwester Duriels',
      region: 'Aus einem Kopf Tathamets',
      domains: 'Seelische Pein, Verzweiflung, Qual, Verderb',
      status: 'Besiegt in Diablo II — wiedergeboren als Endgame-Boss',
      description: [
        'Andariel herrscht über seelische Pein, Verzweiflung und die Erwartung kommenden Leidens. Sie beteiligte sich am Aufstand, der die drei Brüder aus der Hölle verbannte, diente Diablo später jedoch erneut. In Diablo IV taucht sie als beschwörbarer Endgame-Boss auf.',
        'Ihr seelisches Gift ist subtiler als das körperliche ihres Bruders Duriel. Sie erschafft keine Wunden — sie erschafft Erwartung. Das Wissen, dass Schlimmeres kommt, bricht Geist und Willen, bevor die erste Klinge fällt.'
      ],
      sketch: 'img/evil/andariel-sketch.webp',
      color: 'img/evil/andariel.webp',
      anim: 'img/evil/andarial-animation.mp4'
    },
    {
      id: 'duriel',
      name: 'Duriel',
      subtitle: 'Zwillingsbruder Andariels',
      region: 'Aus einem Kopf Tathamets',
      domains: 'Körperlicher Schmerz, Qual, Direktgewalt',
      status: 'Besiegt in Diablo II — wiedergeboren als Endgame-Boss',
      description: [
        'Andariels Zwillingsbruder steht für körperlichen Schmerz. Während andere Übel planen und verführen, wirkt Duriel fast erschreckend direkt: Er will Fleisch brechen und Hoffnung durch körperliche Qual auslöschen. Sein Käfig aus Gedärm unter dem Grab des Horadrim Tal Rasha machte ihn zum brutalsten Hüter.',
        'In Diablo IV erscheint er als beschwörbarer Endgame-Boss. Als Zwilling Andariels bilden beide eine Einheit aus körperlichem und seelischem Leiden — Qual von innen und außen, untrennbar verbunden.'
      ],
      sketch: 'img/evil/duriel-sketch.webp',
      color: 'img/evil/duriel2.webp',
      anim: 'img/evil/duriel-animation.mp4'
    },
    {
      id: 'belial',
      name: 'Belial',
      subtitle: 'Meister der Täuschung',
      region: 'Aus einem Kopf Tathamets',
      domains: 'Täuschung, Manipulation, Intrige, Falsche Gewissheit',
      status: 'Besiegt in Diablo III — Status unbekannt',
      description: [
        'Belial macht Wahrheit unbrauchbar. Er erschafft falsche Gewissheiten, Masken und politische Intrigen, bis niemand mehr erkennt, wem zu trauen ist. Nach der Verbannung der drei Brüder gewann er im Höllenbürgerkrieg zunächst die Oberhand — bis Azmodan ihn überlistete.',
        'In Diablo III verbarg er sich als Kaiser Hakan II. und herrschte über Caldeum. Seine Fähigkeit, Identitäten zu übernehmen und ganze Reiche von innen zu lenken, macht ihn zu einem Feind, den man nie dort vermutet, wo er tatsächlich wirkt.'
      ],
      note: { label: 'Notiz von Archivar Valen · Status unklar', text: 'Kein bestätigter Bericht nennt Belials Rückkehr. Bei einem Meister der Täuschung ist auch Schweigen kein Beweis.' },
      sketch: 'img/evil/belial-sketch.webp',
      color: 'img/evil/belial.webp',
      anim: 'img/evil/belial-animation.mp4'
    },
    {
      id: 'azmodan',
      name: 'Azmodan',
      subtitle: 'Oberster Feldherr der Hölle',
      region: 'Aus einem Kopf Tathamets',
      domains: 'Sünde, Hochmut, Heerführung, Verführung',
      status: 'Besiegt in Diablo III — mehrfach gebunden',
      description: [
        'Azmodan ist Feldherr, Verführer und Personifikation zügelloser Begierde. Nach dem Machtkampf mit Belial führte er die Heere der Hölle an. Sein Hochmut ist zugleich seine Stärke und seine größte Schwäche.',
        'In Diablo III öffnete er im Krater des zerstörten Berges Arreat ein Portal und ließ seine Heere nach Sanktuario vordringen. Seine Stärke liegt in der Kriegsführung und der schieren Macht seiner Armeen.'
      ],
      sketch: 'img/evil/azmodan-sketch.webp',
      color: 'img/evil/azmodan.webp',
      anim: 'img/evil/azmodan-animation.mp4'
    }
  ];

  const index = document.querySelector('#uebel-index');
  if (!index) return;

  const category = document.querySelector('#uebel-category');
  const count = document.querySelector('#uebel-count');
  const name = document.querySelector('#uebel-name');
  const subtitle = document.querySelector('#uebel-subtitle');
  const description = document.querySelector('#uebel-description');
  const facts = document.querySelector('#uebel-facts');
  const sketch = document.querySelector('#uebel-image-sketch');
  const color = document.querySelector('#uebel-image-color');
  const anim = document.querySelector('#uebel-image-anim');
  const animSource = document.querySelector('#uebel-image-anim-src');
  const previous = document.querySelector('#uebel-previous');
  const next = document.querySelector('#uebel-next');
  let activeIndex = 0;

  function renderIndex() {
    index.replaceChildren();
    uebel.forEach((entry, entryIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'codex-folio__tab';
      button.dataset.uebelIndex = entryIndex;
      const isActive = entryIndex === activeIndex;
      button.setAttribute('aria-pressed', String(isActive));
      if (isActive) button.setAttribute('aria-current', 'true');
      button.setAttribute('aria-label', `${entry.name} auswählen`);
      button.textContent = entry.name;
      index.append(button);
    });
  }

  function selectUebel(uebelIndex, shouldFocus = false) {
    activeIndex = (uebelIndex + uebel.length) % uebel.length;
    const entry = uebel[activeIndex];

    category.textContent = 'Geringes Übel';
    count.textContent = `${activeIndex + 1} / ${uebel.length}`;
    name.textContent = entry.name;
    subtitle.textContent = entry.subtitle;

    description.replaceChildren();
    entry.description.forEach((paragraph) => {
      const text = document.createElement('p');
      text.textContent = paragraph;
      description.append(text);
    });
    if (entry.note) {
      const note = document.createElement('p');
      note.className = 'lore-note lore-note--uncertain';
      const label = document.createElement('span');
      label.textContent = entry.note.label;
      note.append(label, entry.note.text);
      description.append(note);
    }

    facts.replaceChildren();
    [
      ['Ursprung', entry.region], ['Domänen', entry.domains], ['Status', entry.status]
    ].forEach(([label, value]) => {
      const wrapper = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      wrapper.className = 'codex-folio__meta-item';
      wrapper.append(term, detail);
      facts.append(wrapper);
    });

    anim.pause();
    anim.classList.remove('playing');
    sketch.src = entry.sketch;
    sketch.alt = `${entry.name}, Zeichnung`;
    color.src = entry.color;
    color.alt = '';
    animSource.src = entry.anim;
    anim.load();

    renderIndex();
    if (shouldFocus) name.focus({ preventScroll: true });
  }

  index.addEventListener('click', (event) => {
    const button = event.target.closest('.codex-folio__tab');
    if (button) selectUebel(Number(button.dataset.uebelIndex), true);
  });
  [previous, next].forEach((button, direction) => button.addEventListener('click', () => {
    selectUebel(activeIndex + (direction ? 1 : -1), true);
  }));

  // Video spielt einmal beim Hover/Fokus des Bildausschnitts ab und blendet
  // sich danach wieder aus — das bereits sichtbare Farbbild bleibt stehen,
  // statt dass das Video loopt oder ein zweites Mal von selbst startet.
  const figure = document.querySelector('#uebel-illustration');
  const play = () => { anim.currentTime = 0; anim.classList.add('playing'); anim.play().catch(() => {}); };
  const stop = () => { anim.pause(); anim.classList.remove('playing'); };
  figure.addEventListener('mouseenter', play);
  figure.addEventListener('focusin', play);
  figure.addEventListener('mouseleave', stop);
  figure.addEventListener('focusout', stop);
  anim.addEventListener('ended', () => anim.classList.remove('playing'));

  selectUebel(0);
})();
