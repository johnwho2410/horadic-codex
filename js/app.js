document.querySelectorAll('.pips').forEach(el => {
      const value = Number(el.dataset.value || 0);
      el.innerHTML = Array.from({length:5}, (_,i) => `<i class="pip ${i < value ? 'on' : ''}"></i>`).join('');
    });
    const filters = document.querySelectorAll('.filter');
    const cards = document.querySelectorAll('.class-card');
    const classDetails = {
      barbarian: {name:'Barbar', glyph:'B', kicker:'Grundspiel · Nahkampf', image:'img/class-barbarian.webp', attribute:'Stärke', resource:'Wut', mechanic:'Arsenal-System', range:'Nahkampf', lead:'Ein kompromissloser Waffenmeister, der sich mitten in Gegnergruppen am wohlsten fühlt und mehrere Waffengattungen gleichzeitig beherrscht.', playstyle:'Barbaren bauen Wut im Kampf auf und geben sie für mächtige Kernfertigkeiten aus. Durch das Arsenal-System können unterschiedliche Angriffe automatisch verschiedene Waffen nutzen. Dadurch entstehen Builds rund um Waffenwechsel, Blutung, Überwältigen, Wirbelwind oder Berserkermodus.', strengths:['Hohe Zähigkeit','Flächenschaden','Waffenvielfalt','Kontrollimmunität'], caveat:'Viele Builds brauchen zunächst Wut und Positionierung, bevor ihr voller Schaden entsteht. Ohne defensive Fertigkeiten können besonders hochstufige Gegner selbst den robusten Barbaren schnell bestrafen.'},
      druid: {name:'Druide', glyph:'D', kicker:'Grundspiel · Gestaltwandel', image:'img/class-druid.webp', attribute:'Willenskraft', resource:'Geisteskraft', mechanic:'Geistersegen', range:'Nah bis mittel', lead:'Ein wandelbarer Naturkämpfer, der Sturm und Erde mit Werwolf-, Werbär- und Gefährtenfertigkeiten verbindet.', playstyle:'Druiden wechseln je nach Fertigkeit unmittelbar ihre Gestalt oder kämpfen als Zauberwirker. Geisteskraft wird durch Basisangriffe und andere Effekte aufgebaut. Geistersegen ergänzen den gewählten Stil mit dauerhaften Boni und erlauben Mischformen aus Magie, Begleitern und körperlicher Gewalt.', strengths:['Sehr vielseitig','Hohe Zähigkeit','Kontrolle','Starke Synergien'], caveat:'Die Klasse wirkt zu Beginn oft langsamer als andere. Viele starke Kombinationen entstehen erst, wenn Ressourcenaufbau, Geistersegen und passende legendäre Effekte ineinandergreifen.'},
      necromancer: {name:'Totenbeschwörer', glyph:'N', kicker:'Grundspiel · Beschwörung', image:'img/class-necromancer.webp', attribute:'Intelligenz', resource:'Essenz und Leichen', mechanic:'Totenbuch', range:'Mittel bis fern', lead:'Ein Meister über Blut, Knochen und Schatten, der gefallene Gegner als Ressource oder als Teil seiner Armee nutzt.', playstyle:'Essenz speist direkte Zauber, während Leichen für Explosionen, Kontrolle und Beschwörungen eingesetzt werden. Im Totenbuch werden Skelettkrieger, Magier und Golems spezialisiert oder geopfert, um den Totenbeschwörer selbst zu stärken.', strengths:['Dienerarmee','Flächenschaden','Gute Kontrolle','Sicheres Solospiel'], caveat:'Mobilität ist traditionell eine Schwäche. Builds ohne Diener müssen ihre Leichen und defensiven Abklingzeiten besonders bewusst verwalten.'},
      rogue: {name:'Jäger', glyph:'J', kicker:'Grundspiel · Präzision', image:'img/class-rogue.webp', attribute:'Geschicklichkeit', resource:'Energie', mechanic:'Spezialisierungen', range:'Nah und fern', lead:'Eine schnelle, technische Klasse für präzise Kombos, Fallen, Imbuements und ständigen Positionswechsel.', playstyle:'Jäger verbinden schnelle Basisangriffe mit energieverbrauchenden Kernfertigkeiten. Spezialisierungen verändern den Rhythmus durch Kombopunkte, besondere Fokusfenster oder verkürzte Abklingzeiten. Gift, Schatten und Kälte verleihen Angriffen zusätzliche Funktionen.', strengths:['Extreme Mobilität','Hoher Burstschaden','Flexible Reichweite','Fallen und Kontrolle'], caveat:'Fehler werden wegen der geringeren Grundzähigkeit schnell bestraft. Die stärksten Varianten verlangen saubere Positionierung und häufige, präzise Eingaben.'},
      sorcerer: {name:'Zauberer', glyph:'Z', kicker:'Grundspiel · Elementarmagie', image:'img/class-sorcerer.webp', attribute:'Intelligenz', resource:'Mana', mechanic:'Verzauberungen', range:'Fernkampf', lead:'Ein elementarer Fernkämpfer, der Feuer, Frost und Blitz für Schaden, Kontrolle und spektakuläre Kettenreaktionen einsetzt.', playstyle:'Zauberer verbrauchen Mana für mächtige Kernzauber und schützen sich durch Barrieren, Teleportation und Kontrolle. Im Verzauberungssystem werden ausgewählte Fertigkeiten zu passiven Effekten, wodurch ein Zauber auch dann den Build prägt, wenn er nicht aktiv gewirkt wird.', strengths:['Starke Kontrolle','Flächenschaden','Hohe Mobilität','Elementare Synergien'], caveat:'Mana und defensive Abklingzeiten bestimmen den Kampfrhythmus. Wer Barrieren oder Positionierung vernachlässigt, hält im direkten Schlagabtausch wenig aus.'},
      spiritborn: {name:'Geistgeborener', glyph:'G', kicker:'Vessel of Hatred · Kampfkunst', image:'img/class-spiritborn.webp', attribute:'Geschicklichkeit', resource:'Vitalität', mechanic:'Geisterhalle', range:'Nah bis mittel', lead:'Ein akrobatischer Kämpfer aus Nahantu, der die Kräfte von Jaguar, Adler, Gorilla und Tausendfüßer kanalisiert.', playstyle:'Jeder Schutzgeist steht für einen eigenen Rhythmus: aggressives Tempo, Mobilität, Widerstandskraft oder Gift und Kontrolle. Über die Geisterhalle können Haupt- und Nebengeist kombiniert werden, sodass Fertigkeiten zusätzliche Eigenschaften erhalten und hybride Spielweisen entstehen.', strengths:['Sehr hohe Mobilität','Schnelle Kombos','Flexible Defensive','Starke Geist-Synergien'], caveat:'Die hohe Geschwindigkeit kann unübersichtlich werden. Gute Builds leben davon, Geistwahl, Ressourcenfluss und kurze Schadensfenster konsequent aufeinander abzustimmen.'},
      paladin: {name:'Paladin', glyph:'P', kicker:'Lord of Hatred · Heilig', image:'img/class-paladin.webp', attribute:'Stärke', resource:'Heilige Kraft', mechanic:'Schwüre und Auren', range:'Nah bis mittel', lead:'Ein geweihter Frontkämpfer, der Schildkampf, heilige Waffen und unterstützende Auren verbindet.', playstyle:'Paladine halten die Front, verstärken Verbündete und bestrafen Gegner in ihrer unmittelbaren Umgebung. Schwüre und Auren setzen langfristige Schwerpunkte, während Schildfertigkeiten, geweihte Zonen und heilige Angriffe zwischen Schutz und offensiver Vergeltung wechseln.', strengths:['Sehr hohe Zähigkeit','Gruppenunterstützung','Auren','Sicherer Nahkampf'], caveat:'Der Schwerpunkt auf Standfestigkeit kann sich weniger beweglich anfühlen. Maximale Wirkung entsteht erst, wenn Aura, Schwur und aktive Fertigkeiten dieselbe Aufgabe unterstützen.'},
      warlock: {name:'Hexenmeister', glyph:'W', kicker:'Lord of Hatred · Dämonologie', image:'img/class-warlock.webp', attribute:'Intelligenz', resource:'Zorn und Dominanz', mechanic:'Seelensplitter', range:'Mittel bis fern', lead:'Ein riskanter Okkultist, der chaotische Magie entfesselt, Dämonen bindet und gegnerische Seelen gegen sie verwendet.', playstyle:'Hexenmeister kombinieren Flüche, dämonische Helfer und direkte Zauber. Ihre Systeme belohnen kontrolliertes Eskalieren: Seelensplitter und gebundene Mächte erweitern den Werkzeugkasten, verlangen aber eine bewusste Reihenfolge von Aufbau, Kontrolle und Entladung.', strengths:['Starke Kontrolle','Dämonische Diener','Schaden über Zeit','Große Buildtiefe'], caveat:'Mehrere Ressourcen und vorbereitende Effekte machen die Klasse anspruchsvoller. Wer seine Beschwörungen und Entladungsfenster falsch timt, verliert spürbar an Wirkung.'}
    };
    const classDialog = document.querySelector('#class-dialog');
    const openClassDialog = card => {
      const detail = classDetails[card.dataset.class];
      if (!detail) return;
      document.querySelector('#class-dialog-image').src = detail.image;
      document.querySelector('#class-dialog-image').alt = `${detail.name} in Diablo IV`;
      document.querySelector('#class-dialog-glyph').textContent = detail.glyph;
      document.querySelector('#class-dialog-kicker').textContent = detail.kicker;
      document.querySelector('#class-dialog-title').textContent = detail.name;
      document.querySelector('#class-dialog-lead').textContent = detail.lead;
      document.querySelector('#class-dialog-attribute').textContent = detail.attribute;
      document.querySelector('#class-dialog-resource').textContent = detail.resource;
      document.querySelector('#class-dialog-mechanic').textContent = detail.mechanic;
      document.querySelector('#class-dialog-range').textContent = detail.range;
      document.querySelector('#class-dialog-playstyle').textContent = detail.playstyle;
      document.querySelector('#class-dialog-strengths').innerHTML = detail.strengths.map(item => `<span>${item}</span>`).join('');
      document.querySelector('#class-dialog-caveat').textContent = detail.caveat;
      const tierLabel = `${detail.name}-Builds in der aktuellen Tier-Liste`;
      document.querySelector('#class-dialog-tier-label').textContent = tierLabel;
      document.querySelector('#class-dialog-tier-link').setAttribute('aria-label',`${tierLabel} auf Vitablo.de öffnen`);
      classDialog.showModal();
    };
    const classAnchors = {"barbarian":"barbar","druid":"druide","necromancer":"totenbeschwoerer","rogue":"jaeger","sorcerer":"zauberer","spiritborn":"geistgeborener","paladin":"paladin","warlock":"hexenmeister"};
    cards.forEach(card => {
      card.tabIndex = 0;
      card.setAttribute('role','link');
      card.setAttribute('aria-label',`${card.querySelector('h3').textContent}: Klassenseite öffnen`);
      const more = document.createElement('span');
      more.className = 'class-more'; more.textContent = 'Klasse erkunden →';
      card.append(more);
      const openClassPage = () => { location.href = `klassen/${classAnchors[card.dataset.class]}.html`; };
      card.addEventListener('click', openClassPage);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openClassPage(); }
      });
    });
    document.querySelector('.dialog-close').addEventListener('click', () => classDialog.close());
    classDialog.addEventListener('click', event => { if (event.target === classDialog) classDialog.close(); });
    filters.forEach(button => button.addEventListener('click', () => {
      filters.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      cards.forEach(card => {
        const visible = button.dataset.filter === 'all' || card.dataset.expansion === button.dataset.filter;
        card.hidden = !visible;
      });
    }));
    const petalLayer = document.querySelector('.hero-petals');
    if (petalLayer && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const petalCount = innerWidth < 720 ? 11 : 19;
      for (let index = 0; index < petalCount; index += 1) {
        const petal = document.createElement('span');
        const x = (index * 37 + 11) % 100;
        const size = 9 + ((index * 7) % 10);
        const duration = 8 + ((index * 11) % 8);
        const delay = -((index * 13) % 15);
        const drift = -65 + ((index * 29) % 130);
        const gust = 22 + ((index * 17) % 48);
        const direction = index % 2 ? 1 : -1;
        const windA = direction * gust;
        const windB = drift * .34 - direction * gust * .72;
        const windC = drift * .7 + direction * gust * .55;
        petal.style.cssText = `--x:${x}%;--size:${size}px;--duration:${duration}s;--delay:${delay}s;--drift:${drift}px;--wind-a:${windA}px;--wind-b:${windB}px;--wind-c:${windC}px;--rotation:${index * 31}deg`;
        petal.innerHTML = '<i></i>';
        petalLayer.appendChild(petal);
      }
      new IntersectionObserver(([entry]) => petalLayer.classList.toggle('petals-paused', !entry.isIntersecting), { threshold:0 }).observe(document.querySelector('.hero'));
    }
    const world = document.querySelector('.world');
    const worldSlides = [...document.querySelectorAll('.world-slide')];
    const worldTabs = [...document.querySelectorAll('.world-tab')];
    let activeRegion = 0;
    const showRegion = index => {
      activeRegion = (index + worldSlides.length) % worldSlides.length;
      worldSlides.forEach((slide, slideIndex) => {
        const active = slideIndex === activeRegion;
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      worldTabs.forEach((tab, tabIndex) => {
        const active = tabIndex === activeRegion;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      const activeTab = worldTabs[activeRegion];
      const tabRail = activeTab.parentElement;
      const targetLeft = activeTab.offsetLeft - (tabRail.clientWidth - activeTab.offsetWidth) / 2;
      tabRail.scrollTo({ left:Math.max(0,targetLeft), behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    worldTabs.forEach(tab => tab.addEventListener('click', () => showRegion(Number(tab.dataset.regionTab))));
    document.querySelector('.world-prev').addEventListener('click', () => showRegion(activeRegion - 1));
    document.querySelector('.world-next').addEventListener('click', () => showRegion(activeRegion + 1));
    world.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') showRegion(activeRegion - 1);
      if (event.key === 'ArrowRight') showRegion(activeRegion + 1);
    });
    let worldTouchStart = 0;
    world.addEventListener('touchstart', event => { worldTouchStart = event.changedTouches[0].clientX; }, { passive:true });
    world.addEventListener('touchend', event => {
      const distance = event.changedTouches[0].clientX - worldTouchStart;
      if (Math.abs(distance) > 55) showRegion(activeRegion + (distance < 0 ? 1 : -1));
    }, { passive:true });
    const menuButton = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
