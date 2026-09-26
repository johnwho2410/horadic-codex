(() => {
  'use strict';

  // Struktur analog zu js/monster-index.js: flache Liste aller Einträge,
  // zwei Obergruppen (Fraktionen / Persönlichkeiten). facts ist je Eintrag
  // unterschiedlich lang (Persönlichkeiten haben aktuell keine Fakten) -
  // im Gegensatz zum Bestiarium also keine feste Feldanzahl.
  const entries = [
    {
      name: 'Horadrim', group: 'factions', subtitle: 'Gelehrtenorden · Schutz',
      description: [
        'Die Horadrim entstanden nach dem Dunklen Exil, als die vier Niederen Übel ihre mächtigeren Geschwister – die Prim-Übel Diablo, Mephisto und Baal – nach Sanktuario verbannten, um selbst die Kontrolle über die Brennenden Höllen zu übernehmen. Um die drei Tyrannen endgültig zu bannen, wählte der Erzengel Tyrael sieben Magier aus den Überresten der einstigen Magierklans und schmiedete aus einem Fragment des Weltensteins die ersten Seelensteine – Gefäße, die einen Dämonenlord für alle Zeit einschließen sollten.',
        'Der Orden bezahlte seinen Erfolg teuer: Bei der Gefangennahme Mephistos in einer bewohnten Stadt Kehjistans starben zahllose Unschuldige, eine Lehre, die spätere Horadrim wie Tal Rasha strikter vorgehen ließ. Jered Cain gelang es schließlich, auch Diablo zu binden und seinen Seelenstein unter der Kathedrale von Tristram zu verbergen. Bis heute tragen Nachfahren wie Deckard Cain, Lorath Nahr oder der Gelehrte Donan das schwindende Wissen des Ordens weiter – meist im Verborgenen, denn die einst mächtige Bruderschaft ist auf wenige Gelehrte geschrumpft.'
      ],
      facts: [['Bekannte Mitglieder', 'Tal Rasha, Jered Cain, Deckard Cain, Lorath, Donan'], ['Ziel', 'Dämonische Bedrohungen verstehen und eindämmen']]
    },
    {
      name: 'Kathedrale des Lichts', group: 'factions', subtitle: 'Religion · Ordnung',
      description: [
        'Die Kathedrale des Lichts wurde vom gefallenen Engel Inarius gegründet – nicht aus Glauben, sondern als Werkzeug der Herrschaft. Als selbsternannter Prophet nutzte er engelhafte Überredungskunst und seine makellose, nie alternde Gestalt, um sich in Kyovashad und weiten Teilen der Zersplitterten Gipfel als nahezu göttliche Autorität zu etablieren.',
        'Im Innern der Kathedrale zeugen Statuen aus Edelmetall und Stein von Inarius’ einstiger Gestalt als Erzengel, vor denen die Gläubigen niederknien. Wer Zweifel äußert oder gar mit Liliths Rückkehr sympathisiert, gilt rasch als Ketzer – die Kirche verteidigt ihre Deutungshoheit über Sanktuario notfalls mit Gewalt, gerade weil ihr Gründer selbst einst vor jener himmlischen Ordnung floh, der er nun in neuer Form dient.'
      ],
      facts: [['Zentrum', 'Kyovashad und die Zersplitterten Gipfel'], ['Konflikt', 'Liliths Kult und jede Form vermeintlicher Ketzerei']]
    },
    {
      name: 'Triune', group: 'factions', subtitle: 'Dämonenkult · Täuschung',
      description: [
        'Der Kult der Drei entstand bereits zur Zeit des Sünden-Kriegs als vermeintlich wohltätige Glaubensgemeinschaft – tatsächlich aber als Werkzeug der Prim-Übel, um Sanktuarios Bewohner unbemerkt zu korrumpieren. Nach Jahrhunderten der Bedeutungslosigkeit belebte der verstoßene Horadrim Elias die Triune neu, indem er die Rückkehr einer „Mutter Sanktuarios“ verkündete, die Menschen über Engel und Dämonen erheben werde.',
        'Elias war einst Schüler Lorath Nahrs, der ihn aus dem Orden verbannte, statt ihn zu richten. Aus Groll und Überzeugung zugleich baute er die Triune zu einer schnell wachsenden Bewegung aus – ohne zu ahnen, dass Mephisto, in Gestalt eines Wolfes noch immer in Sanktuario gegenwärtig, den Kult längst im Verborgenen auf seine eigenen Ziele hin lenkte.'
      ],
      facts: [['Wurzeln', 'Sin-Krieg'], ['Methode', 'Verführung, geheimes Wissen und Opfer']]
    },
    {
      name: 'Zakarum', group: 'factions', subtitle: 'Glauben · Imperium',
      description: [
        'Die Zakarum-Lehre geht auf den Propheten Akarat zurück, dessen Name für „inneres Licht“ steht. Aus einem kleinen Orden in Kurast wuchs im Laufe der Jahrhunderte die vorherrschende Religion Kehjistans, getragen weniger vom Glauben an eine einzelne Gottheit als von einem Kanon gemeinsamer Tugenden.',
        'Aus ihr gingen mehrere militante Zweige hervor: Die Paladine der Kirche verteidigten den Glauben mit dem Schwert, während Akkhan die strenger asketischen Kreuzritter gründete. Ausgerechnet der Tempel von Kurast, in dem die Horadrim einst Mephistos Seelenstein verbargen, wurde zum Einfallstor – der Lord des Hasses zersetzte die Führung der Kirche über Jahre hinweg von innen, lange bevor sein Wirken publik wurde.'
      ],
      facts: [['Ursprung', 'Kehjistan'], ['Vermächtnis', 'Paladine, Kreuzritter und politische Macht']]
    },
    {
      name: 'Eisenwölfe', group: 'factions', subtitle: 'Söldnerbund · Schutz',
      description: [
        'Die Eisenwölfe wurden von der Kämpferin Asheara gegründet und vereinen Kriegsveteranen unterschiedlichster Herkunft – vom Magier bis zum Fährtenleser. Anders als die meisten Söldnertruppen Sanktuarios gilt ihre Treue nicht dem höchsten Gebot, sondern dem eigenen Ehrenkodex: Schutz der Schwachen, Vergeltung an den Schuldigen.',
        'Zu ihren Traditionen gehört es, die Ausrüstung gefallener Wölfe zu bergen, damit sie weiterhin einem guten Zweck dient. Ihre Geschichte reicht bis in die Dschungel von Kurast zurück, wo sie einst monatelang gegen vordringende Dämonenbrut kämpften; heute sichern sie von einem Oasenlager im Südwesten Kehjistans die Handelswege und stellen sich den Höllenfluten entgegen, die das Land regelmäßig heimsuchen.'
      ],
      facts: [['Prinzip', 'Bezahlung ohne Aufgabe der eigenen Ehre'], ['Wirkungsgebiet', 'Kehjistan und Handelswege']]
    },
    {
      name: 'Angiris-Rat', group: 'factions', subtitle: 'Himmel · Führung',
      description: [
        'Der Angiris-Rat bildete einst die Führung der Hohen Himmel: fünf Erzengel, jeder Verkörperung eines Aspekts Anus. Imperius steht für Tapferkeit und unbeugsamen Kampfeswillen, Auriel für Hoffnung und ausgleichenden Beistand, Itherael für das Schicksal und die vielen Pfade, die sich vor Sanktuario auftun. Tyrael, der Älteste unter den Engeln, verkörperte Gerechtigkeit, bevor er dem Rat den Rücken kehrte; Malthael wandelte sich vom Erzengel der Weisheit zum Engel des Todes.',
        'Über Sanktuarios Schicksal war der Rat nie einig. Wo Imperius offen für die Auslöschung der Menschheit eintrat, sah Auriel gerade in ihrer Unberechenbarkeit ein Potenzial, das weder Himmel noch Hölle vorweisen können – ein Streit, der den Ewigen Konflikt bis in die eigenen Reihen der Himmlischen trägt.'
      ],
      facts: [['Bekannte Stimmen', 'Imperius, Tyrael, Auriel, Itherael, Malthael'], ['Konflikt', 'Bewahren, kontrollieren oder vernichten?']]
    },
    {
      name: 'Lilith', group: 'figures', subtitle: 'Mutter Sanktuarios',
      description: [
        'Lilith, Tochter Mephistos, floh einst aus den Brennenden Höllen und schuf gemeinsam mit dem abtrünnigen Engel Inarius das verborgene Sanktuario – einen Ort jenseits des Ewigen Konflikts. Mit ihm zeugte sie die ersten Nephalem, deren vermischtes Blut Kräfte in sich trug, die weder Himmel noch Hölle recht einzuordnen wussten.',
        'Als Himmel und Hölle Jahrtausende später drohten, Sanktuario endgültig zu entdecken, kehrte Lilith zurück – nicht als Retterin im herkömmlichen Sinn, sondern mit dem Versprechen einer gnadenlosen Auslese. Nur wer stark genug sei, ihre Prüfungen zu überstehen, verdiene es, die Menschheit gegen beide Seiten des Konflikts zu verteidigen; ihre Methoden lassen jedoch offen, ob sie ihre Kinder beschützt oder für einen eigenen Krieg gegen die Brennenden Höllen formt.'
      ],
      facts: []
    },
    {
      name: 'Inarius', group: 'figures', subtitle: 'Vater Sanktuarios',
      description: [
        'Inarius war einst ein hochrangiger Engel, der die endlosen Schlachten des Ewigen Konflikts verabscheute. Gemeinsam mit Lilith erschuf er Sanktuario als Zuflucht vor Himmel und Hölle – ein Verrat an seinem eigenen Volk, den er zeitlebens zu rechtfertigen versuchte.',
        'Aus Furcht vor der Macht ihrer gemeinsamen Nephalem-Nachkommen wandte sich Inarius später gegen Lilith und die eigene Schöpfung. Um dennoch verehrt zu werden, gründete er nicht nur einmal, sondern gleich zweimal die Kathedrale des Lichts und ließ sich als gottgleicher Prophet feiern – ein Versuch, die verlorene himmlische Anerkennung durch irdische Gefolgschaft zu ersetzen.'
      ],
      facts: []
    },
    {
      name: 'Tyrael', group: 'figures', subtitle: 'Erzengel · Menschlicher Verbündeter',
      description: [
        'Als Erzengel der Gerechtigkeit und ältestes Mitglied des Angiris-Rats war Tyrael über Äonen die Stimme des Ausgleichs im Himmel. Als der Rat drohte, Sanktuario und seine Bewohner aus reiner Vorsicht auszulöschen, stellte er sich offen gegen die eigenen Reihen – ein Bruch, der ihn zum Verbündeten der Menschheit machte.',
        'Aus den Überresten der einstigen Magierklans gründete er die Horadrim und rüstete sie mit den Seelensteinen aus, um die Prim-Übel zu bannen. Später gab Tyrael freiwillig seine Unsterblichkeit auf, um als Sterblicher unter jenen Menschen zu leben und zu kämpfen, denen er sein himmlisches Erbe geopfert hatte.'
      ],
      facts: []
    },
    {
      name: 'Deckard Cain', group: 'figures', subtitle: 'Letzter der alten Horadrim',
      description: [
        'Deckard Cain war der letzte bekannte Gelehrte der alten Horadrim und über Generationen hinweg Begleiter zahlloser Helden Sanktuarios. Sein Wissen um Dämonologie, Artefakte und die verborgene Geschichte der Prim-Übel machte ihn zur wichtigsten lebenden Quelle horadrischen Wissens, lange nachdem der Orden selbst zerfallen war.',
        'Cain starb, gequält von der Hexe Maghda, kurz nachdem er mit letzter Kraft Tyraels zerbrochenes Schwert wiederhergestellt und dessen engelhaften Ursprung bestätigt hatte. Sein Tod hinterließ eine Lücke im Archiv horadrischen Wissens, die erst Jahrzehnte später von Gelehrten wie Lorath Nahr notdürftig gefüllt wurde.'
      ],
      facts: []
    },
    {
      name: 'Lorath Nahr', group: 'figures', subtitle: 'Horadrim · Erzähler',
      description: [
        'Lorath Nahr lebte als zurückgezogener Einsiedler in den Zersplitterten Gipfeln, als ihn die Ereignisse um Liliths Rückkehr wieder in die weite Welt zwangen. Als einer der letzten bekannten Horadrim wurde er zum wichtigsten Wegweiser und Chronisten des Wanderers – eine Rolle, die einst Deckard Cain innehatte.',
        'Seine Erfahrung ist von Verlust und Enttäuschung gezeichnet: Er kämpfte gegen Widersacher, die er nicht aufhalten konnte, und verbannte seinen eigenen Schüler Elias aus dem Orden, anstatt ihn zu richten – eine Milde, die sich Jahre später als folgenschwerer Fehler erweisen sollte, als Elias die Triune neu belebte.'
      ],
      facts: []
    },
    {
      name: 'Elias', group: 'figures', subtitle: 'Gelehrter · Beschwörer',
      description: [
        'Elias war einst ein vielversprechender Schüler der Horadrim unter Lorath Nahrs Anleitung, bis dieser ihn aus dem Orden verbannte. Aus dieser Verbannung heraus wandte sich Elias von der horadrischen Lehre ab und begann, den längst erloschen geglaubten Kult der Triune neu zu errichten.',
        'Mit dem Versprechen, dass eine zurückkehrende „Mutter Sanktuarios“ die Menschheit über Engel und Dämonen erheben werde, gewann er in kurzer Zeit zahllose Anhänger. Unbemerkt blieb dabei, dass Mephisto selbst – in Wolfsgestalt noch immer in Sanktuario gegenwärtig – Elias’ Kult längst zu seinen eigenen Zwecken lenkte.'
      ],
      facts: []
    },
    {
      name: 'Neyrelle', group: 'figures', subtitle: 'Suchende · Horadrisches Erbe',
      description: [
        'Neyrelle war eine junge Gelehrte, deren Wissensdurst sie mitten in den Konflikt um Mephistos Seelenstein zog. Als am Ende eine Entscheidung fällig wurde, wen der Wanderer im Seelenstein bannen sollte, war es Neyrelle, die vorschlug, nicht Lilith, sondern den Lord des Hasses selbst einzuschließen – und die das Risiko, Mephistos Gegenwart fortan in sich zu tragen, bewusst auf sich nahm.',
        'Die Bindung an den Seelenstein zehrt seither an ihrem Körper wie an ihrem Verstand, während Mephisto ihre Ängste und Erinnerungen gegen sie zu wenden versucht. Ihre Reise in den Dschungel von Nahantu, um ihn dort endgültig zu bannen, setzt ungeahnte Verheerungen in Gang – ein Kapitel, dessen volle Tragweite für Sanktuario erst noch geschrieben wird.'
      ],
      facts: []
    },
    {
      name: 'Mephisto', group: 'figures', subtitle: 'Herr des Hasses',
      description: [
        'Mephisto, der Herr des Hasses, gilt als ältester und zugleich berechnendster der drei Prim-Übel. Wo seine Brüder Diablo und Baal auf offene Zerstörung setzen, bevorzugt Mephisto die leise Zersetzung – durch Verrat, Intrigen und die Saat des Misstrauens, gesät über Jahrhunderte hinweg.',
        'Er gilt als Meister der Totenbeschwörung und füllt Leichname mit einem Hass, der sich gegen die Lebenden richtet. Gerüchten zufolge hetzt er seine eigenen Brüder gegeneinander auf, allein zu seiner Unterhaltung – ein Charakterzug, der ihn selbst unter den Prim-Übeln zum gefährlichsten Strippenzieher macht.'
      ],
      facts: []
    },
    {
      name: 'Rathma', group: 'figures', subtitle: 'Erster Totenbeschwörer',
      description: [
        'Rathma, geboren als Linarian, war einer der ersten Nephalem Sanktuarios – Sohn der Dämonin Lilith und des Engels Inarius. Anders als seine Eltern, die jeweils die Vorherrschaft über Sanktuario für ihre eigene Seite beanspruchten, lehnte er beide Ansprüche ab.',
        'Unter der Anleitung des geheimnisvollen Wesens Trag’Oul erlernte er die Kunst, Leben und Tod im Gleichgewicht zu halten, und sabotierte während des Sünden-Kriegs im Verborgenen die Pläne beider Elternteile. Gemeinsam mit dem Nekromanten Kalan gründete er die Priester von Rathma – bis heute Hüter jenes Gleichgewichts, dem sich auch die Nekromanten Sanktuarios verpflichtet fühlen.'
      ],
      facts: []
    }
  ];

  const groups = [
    { id: 'factions', label: 'Fraktionen', category: 'Fraktion' },
    { id: 'figures', label: 'Persönlichkeiten', category: 'Persönlichkeit' }
  ];

  const index = document.querySelector('#archive-index');
  if (!index) return;

  const search = document.querySelector('#archive-search');
  const noResults = document.querySelector('#archive-no-results');
  const entryPicker = document.querySelector('#archive-entry-picker');
  const category = document.querySelector('#archive-category');
  const count = document.querySelector('#archive-count');
  const name = document.querySelector('#archive-name');
  const subtitle = document.querySelector('#archive-subtitle');
  const description = document.querySelector('#archive-description');
  const facts = document.querySelector('#archive-facts');
  const image = document.querySelector('#archive-image');
  const illustration = document.querySelector('#archive-illustration');
  const imagePlaceholder = document.querySelector('#archive-image-placeholder');
  const caption = document.querySelector('#archive-caption');
  const previous = document.querySelector('#archive-previous');
  const next = document.querySelector('#archive-next');
  let activeIndex = 0;

  const normalize = (value) => value.toLocaleLowerCase('de-DE')
    .replace(/ß/g, 'ss').normalize('NFD').replace(/[̀-ͯ]/g, '');

  const groupForEntry = (entry) => groups.find((group) => group.id === entry.group);
  const matchingEntries = (filter = '') => {
    const query = normalize(filter.trim());
    return entries.filter((entry) => !query || normalize(`${entry.name} ${entry.subtitle}`).includes(query));
  };

  function renderIndex(filter = '') {
    const visible = matchingEntries(filter);
    const activeGroup = groupForEntry(entries[activeIndex]);
    const visibleGroups = groups.filter((group) => visible.some((entry) => entry.group === group.id));

    index.replaceChildren();
    visibleGroups.forEach((group) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'archive-index-entry codex-folio__tab';
      button.dataset.archiveGroup = group.id;
      const isActive = group.id === activeGroup.id;
      button.setAttribute('aria-pressed', String(isActive));
      if (isActive) button.setAttribute('aria-current', 'true');
      button.setAttribute('aria-label', `${group.label} auswählen`);
      button.textContent = group.label;
      index.append(button);
    });
    noResults.hidden = visible.length !== 0;
  }

  function renderEntryPicker(filter = '') {
    const activeGroup = groupForEntry(entries[activeIndex]);
    const visible = matchingEntries(filter).filter((entry) => entry.group === activeGroup.id);
    entryPicker.replaceChildren();

    visible.forEach((entry) => {
      const entryIndex = entries.indexOf(entry);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'creature-family-button';
      button.dataset.entryIndex = entryIndex;
      button.textContent = entry.name;
      button.setAttribute('aria-pressed', String(entryIndex === activeIndex));
      if (entryIndex === activeIndex) button.setAttribute('aria-current', 'true');
      entryPicker.append(button);
    });
    entryPicker.hidden = visible.length === 0;
  }

  function selectEntry(entryIndex, shouldFocus = false) {
    activeIndex = (entryIndex + entries.length) % entries.length;
    const entry = entries[activeIndex];
    const group = groupForEntry(entry);
    category.textContent = group.category;
    count.textContent = `${activeIndex + 1} / ${entries.length}`;
    name.textContent = entry.name;
    subtitle.textContent = entry.subtitle;
    description.replaceChildren();
    (Array.isArray(entry.description) ? entry.description : [entry.description]).forEach((paragraph) => {
      const text = document.createElement('p');
      text.textContent = paragraph;
      description.append(text);
    });
    facts.replaceChildren();
    entry.facts.forEach(([label, value]) => {
      const wrapper = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      wrapper.className = 'codex-folio__meta-item';
      wrapper.append(term, detail);
      facts.append(wrapper);
    });
    facts.hidden = entry.facts.length === 0;
    image.removeAttribute('src');
    image.alt = '';
    image.hidden = true;
    imagePlaceholder.hidden = false;
    illustration.hidden = true;
    caption.textContent = 'Bildmaterial folgt';
    renderIndex(search.value);
    renderEntryPicker(search.value);
    if (shouldFocus) name.focus({ preventScroll: true });
  }

  index.addEventListener('click', (event) => {
    const button = event.target.closest('.archive-index-entry');
    if (!button) return;
    const group = groups.find((item) => item.id === button.dataset.archiveGroup);
    const currentGroup = groupForEntry(entries[activeIndex]);
    const firstEntry = entries.findIndex((entry) => entry.group === group.id);
    selectEntry(group.id === currentGroup.id ? activeIndex : firstEntry, true);
  });
  entryPicker.addEventListener('click', (event) => {
    const button = event.target.closest('.creature-family-button');
    if (button) selectEntry(Number(button.dataset.entryIndex), true);
  });
  search.addEventListener('input', () => {
    renderIndex(search.value);
    renderEntryPicker(search.value);
  });
  [previous, next].forEach((button, direction) => button.addEventListener('click', () => {
    search.value = '';
    selectEntry(activeIndex + (direction ? 1 : -1), true);
  }));

  selectEntry(0);
})();
