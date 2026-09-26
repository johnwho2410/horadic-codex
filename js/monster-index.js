(() => {
  'use strict';

  // Neue Familien werden ausschließlich hier ergänzt. image und studies sind
  // optional; Bildpfade können später direkt auf lokale Artwork-Dateien zeigen.
  const monsters = [
    'Banditen', 'Kannibalen', 'Kultisten', 'Dämonen', 'Ertrunkene', 'Gefallene',
    'Geister', 'Ziegenmenschen', 'Skelette', 'Schlangen', 'Spinnen', 'Vampire',
    'Werwölfe', 'Zombies', 'Ritter der Buße', 'Maden & Brut', 'Fliegen & Schwärme',
    'Wildnisbestien'
  ].map((name) => ({
    id: name.toLocaleLowerCase('de-DE').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-'),
    name,
    category: 'Gegnerfamilie',
    subtitle: 'Horadrische Kreaturenstudie',
    region: 'Eintrag folgt.',
    habitat: 'Eintrag folgt.',
    behavior: 'Eintrag folgt.',
    traits: 'Eintrag folgt.',
    variants: 'Eintrag folgt.',
    description: 'Zu dieser Gegnerfamilie wird die horadrische Feldnotiz noch ergänzt.',
    image: null,
    imageAlt: '',
    studies: []
  }));

  // Erster ausgearbeiteter Archivbogen. Weitere Familien können nach demselben
  // Muster direkt im Array ergänzt oder hier gezielt mit Daten angereichert werden.
  Object.assign(monsters[0], {
    category: 'Menschliche Gegnerfamilie',
    subtitle: 'Räuber der Wege',
    region: 'Fractured Peaks, Scosglen, Trockensteppe, Kehjistan und Hawezar',
    habitat: 'Verstecke, Keller, Minen und entlegene Straßen',
    behavior: 'Nah- und Fernkämpfer setzen ihre unterschiedlichen Rollen gemeinsam ein.',
    traits: 'Armbrüste, Klingen, Keulen und zusammengetragene Schutzkleidung',
    variants: 'Marodeur, Blighthand, Clifflurker, Slinger und Venomblade',
    description: [
      'Nicht jede Gefahr Sanktuarios trägt Hörner oder Krallen. Banditen leben von den Lücken zwischen den Siedlungen: von Wegen, die zu weit sind für Schutz, von Reisenden, die allein unterwegs sind, und von Orten, an denen ein Hinterhalt mehr wert ist als ein offener Kampf.',
      'Ihre Ausrüstung ist selten einheitlich. Was sie tragen, wurde geflickt, getauscht oder jemand anderem abgenommen – ein Umstand, der sie eher zu einer losen Familie als zu einer Armee macht. Gerade diese Uneinheitlichkeit verrät ihre Rolle: Einige suchen den Nahkampf, andere bleiben mit Armbrust oder Schleuder im Hintergrund.',
      'Feldnotiz: Die Gefahr liegt nicht in einer einzelnen Waffe, sondern im Zusammenspiel der Gruppe. Wer den vorderen Kämpfer bindet, übersieht leicht den Schützen oder den Weg, über den weitere Räuber nachrücken.'
    ],
    image: 'img/bestiarium/banditen/banditen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie von drei Banditen an einer verwitterten Straße',
    studies: [
      {
        image: 'img/bestiarium/banditen/banditen-ausruestungsstudie.png',
        alt: 'Studie aus Armbrust, Kurzschwert, Seil, Kapuze und Beutel eines Banditen',
        caption: 'Geborgene Ausrüstung',
        description: 'Armbrust, Dolch, Kapuze, Seil und ein kleiner Münzbeutel — typische Fundstücke, nachdem sich eine Bandenauseinandersetzung dem Ende zuneigte. Die Uneinheitlichkeit der Ausrüstung bestätigt, was Feldnotizen längst vermuten: zusammengetragen statt einheitlich ausgestattet.'
      }
    ]
  });

  Object.assign(monsters[1], {
    category: 'Menschliche Gegnerfamilie',
    subtitle: 'Der endlose Hunger',
    region: 'Trockensteppe',
    habitat: 'Schluchten, verlassene Wege und abgelegene Lager',
    behavior: 'Reine Nahkampffamilie: Sie schließen Distanzen schnell und greifen in abgestimmten Rollen an.',
    traits: 'Zweihand-Spalter, leichte Hellebarden, Stachelkeulen und Beilpaare',
    variants: 'Spalter, Hellebardier, Prügler und Axtschwärmer',
    description: [
      'Die Spuren dieser Räuber sind selten misszuverstehen: geplünderte Wege, verlassene Lager und eine Unruhe, die selbst in der trockenen Weite der Trockensteppe nicht verweht. Überlieferungen verbinden sie mit einem einst verbannten Barbarenstamm aus Arreat; ob der Hunger zur Verbannung führte oder erst danach zur Gewohnheit wurde, bleibt ungeklärt.',
      'Kanibalen sind keine verstreute Bande einzelner Plünderer. Ihre Familie drängt geschlossen nach vorn und verzichtet vollständig auf Fernkampf. Während schwere Kämpfer den Weg versperren, springen andere über Hindernisse oder drängen durch die eigene Reihe, um ihre Beute schneller zu erreichen.',
      'Feldnotiz: Abstand ist bei dieser Familie keine Sicherheit. Ihr Angriff lebt von Tempo und Überzahl – wer einen der kleineren Angreifer unterschätzt, schafft dem schweren Prügler den Raum für seinen Schlag.'
    ],
    image: 'img/bestiarium/kanibalen/kanibalen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie von drei Kanibalen in der Trockensteppe',
    studies: [
      {
        image: 'img/bestiarium/kanibalen/kanibalen-waffenstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Spalter, Hellebarde, Stachelkeulen und Beilen der Kanibalen',
        caption: 'Waffen der Jagdgruppe'
      }
    ]
  });

  Object.assign(monsters[2], {
    category: 'Menschliche Gegnerfamilie',
    subtitle: 'Diener verborgener Mächte',
    region: 'Verstreute Zellen in allen Regionen Sanktuarios',
    habitat: 'Verlassene Schreine, Keller, Ruinen und unterirdische Heiligtümer',
    behavior: 'Kämpfer decken die Ritualisten, während Beschwörer und Schlangenkultisten aus der zweiten Reihe wirken.',
    traits: 'Kapuzen, Ritualdolche, Weihrauchgefäße, Stäbe und Schlangensymbole',
    variants: 'Kultist, Beschwörer, Schlangenpriester und Lilith-Anhänger',
    description: [
      'Kultisten bilden keine einheitliche Bruderschaft, sondern ein Netz aus Zellen, deren Glauben und Rituale sich je nach Zuflucht unterscheiden. Was sie verbindet, ist die Suche nach Macht außerhalb der bekannten Ordnung – in verlassenen Heiligtümern, unter alten Ruinen und hinter den Türen gewöhnlicher Keller.',
      'Im Kampf verrät sich ihre Hierarchie schnell. Bewaffnete Wächter halten Eindringlinge auf Abstand, damit Beschwörer ihre Riten beenden können. Andere tragen Schlangensymbole und setzen Gift, Dienerkreaturen oder verwirrende Anrufungen ein; ihre Gefahr entsteht vor allem dann, wenn man ihnen Zeit und Raum überlässt.',
      'Feldnotiz: Zuerst die Stimmen im Hintergrund beachten. Ein Ritualist ohne Deckung ist verwundbar, doch ein ungestörter Beschwörer kann einen scheinbar kleinen Trupp in eine langwierige Auseinandersetzung verwandeln.'
    ],
    image: 'img/bestiarium/kultisten/kultisten-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie dreier Kultisten an einem verfallenen Schrein',
    studies: [
      {
        image: 'img/bestiarium/kultisten/kultisten-ritualstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Schlangenstab, Weihrauchgefäß, Ritualdolch und Kultzeichen',
        caption: 'Ritualgerät und Zeichen'
      }
    ]
  });

  Object.assign(monsters[3], {
    category: 'Dämonische Gegnerfamilie',
    subtitle: 'Brut der Brennenden Höllen',
    region: 'Höllenspuren, verfluchte Dungeons und von Ritualen geöffnete Zufluchten',
    habitat: 'Risse, Ruinen, Katakomben und vom Feuer gezeichnete Orte',
    behavior: 'Die Familie vereint flinke Störer, schwere Nahkämpfer und übernatürliche Fernkämpfer.',
    traits: 'Hörner, Klauen, Flügelhäute, Ketten und glühende, vom Höllenfeuer gezeichnete Waffen',
    variants: 'Ghul, Höllenbrut, Balrog und geflügelter Verderber',
    description: [
      'Unter dem schlichten Namen Dämonen fasst das Archiv Geschöpfe zusammen, deren Gestalt ebenso wechselhaft ist wie ihre Herkunft. Manche wirken wie eine Jagdmeute aus Klauen und Zähnen, andere tragen Rüstung, Waffen oder die Überreste einer fremden Hierarchie. Gemein ist ihnen die Spur der Brennenden Höllen: Asche, Hitze und ein Wille zur Zerstörung, der keinen Handel kennt.',
      'Ihre Gefährlichkeit liegt in der Spannweite der Rollen. Kleine, schnelle Dämonen zwingen zu Bewegung, während größere Krieger den Raum mit breiten Hieben kontrollieren. Dahinter können geflügelte oder magiebegabte Wesen einen Kampf mit Geschossen, Feuer und Anrufungen verlängern. Eine einzelne Sichtung verrät daher selten, welche Bedrohung noch im Schatten wartet.',
      'Feldnotiz: Nicht von der größten Gestalt binden lassen. Wenn die schnelle Brut frei um den Kampf herumläuft, bereitet sie den Boden für den Schlag des schweren Dämonen – oder für das Feuer, das aus der zweiten Reihe kommt.'
    ],
    image: 'img/bestiarium/daemonen/daemonen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie einer dämonischen Jagdgruppe aus den Brennenden Höllen',
    studies: [
      {
        image: 'img/bestiarium/daemonen/daemonen-anatomiestudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Horn, Klauenpanzer, Flügelknochen, Kette und glühender Klingenprobe',
        caption: 'Anatomie und Kriegsgerät'
      }
    ]
  });

  Object.assign(monsters[4], {
    category: 'Untote Gegnerfamilie',
    subtitle: 'Tote der geisterhaften Küsten',
    region: 'Küsten von Scosglen, Hawezar und überflutete Ruinen',
    habitat: 'Strände, Schiffswracks, Anlegestellen und versunkene Hallen',
    behavior: 'Sie drängen in gemischten Rollen vor: Schwärmer, schwere Kämpfer, Hakenwerfer und Wasserwirker ergänzen einander.',
    traits: 'Durchweichte Kleidung, Schiffstau, Anker, Haken, Lampen und von Salz verkrustete Waffen',
    variants: 'Ertrunkener, Matrose, Hakenwerfer, Ankerträger und Meereshexe',
    description: [
      'Die Ertrunkenen steigen dort auf, wo das Meer seine Toten nicht behalten hat. Ihre Gewänder hängen schwer von Brackwasser und Tang, an ihren Gliedern klirren Ketten, Haken und Werkzeuge vergangener Überfahrten. Doch sie wirken nicht wie zufällige Leichen: Auf den heimgesuchten Küsten Sanktuarios bewegen sie sich wie eine Mannschaft, die noch immer einem letzten, stummen Befehl folgt.',
      'Eine Begegnung beginnt oft harmlos – mit einer Gestalt am Ufer oder dem Geräusch von Metall im Schaum. Dann schließt sich die Gruppe. Gedrungene Träger versperren den Weg, Haken reißen aus der Distanz nach ihrer Beute, und die Wasserwirker machen aus offenem Gelände ein Hindernis. Ihre einzelnen Rollen greifen ineinander wie die Teile eines alten Schiffs.',
      'Feldnotiz: An der Küste nie nur auf die Vorderen achten. Wer dem Haken ausweicht, kann in die Reichweite des Ankerträgers geraten; wer sich zurückzieht, gibt dem Wasserwirker den Raum, den er sucht.'
    ],
    image: 'img/bestiarium/ertrunkene/ertrunkene-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie dreier Ertrunkener an einer sturmgepeitschten Küste',
    studies: [
      {
        image: 'img/bestiarium/ertrunkene/ertrunkene-fundstueckstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Anker, Haken, Salzlaterne, Tauwerk und geborgenem Kompass',
        caption: 'Bergung vom Geisterufer'
      }
    ]
  });

  Object.assign(monsters[5], {
    category: 'Dämonische Gegnerfamilie',
    subtitle: 'Kleine Brut großer Panik',
    region: 'Verlassene Lager, Höhlen, Ruinen und Höllenspuren in ganz Sanktuario',
    habitat: 'Beuteplätze, improvisierte Nester und verbrannte Ansiedlungen',
    behavior: 'Sie fallen in Rudeln ein: Kämpfer binden ihr Ziel, Schleuderer stören aus der Distanz und Schamanen stützen die Gruppe.',
    traits: 'Rote Haut, zerfetzte Felle, primitive Klingen, Schleudern, Knochenstäbe und Lärmzeichen',
    variants: 'Gefallener, Schamane, Schleuderer, Lunatiker und Plünderer',
    description: [
      'Gefallene wirken auf den ersten Blick wie eine geringe Gefahr: klein, schlecht ausgerüstet und stets in hastiger Bewegung. Gerade darin liegt ihre Stärke. Sie besetzen das Gelände mit Geschrei, Steinen und schnellen Angriffen, während sie jede unbeobachtete Öffnung nutzen, um sich auf ihr Opfer zu werfen.',
      'Ihre Lager bestehen aus Resten anderer Leben – gebrochenem Holz, gestohlener Ausrüstung und groben Trophäen. Innerhalb des Rudels übernehmen die Schamanen eine besondere Rolle: Sie halten die Gruppe zusammen, stärken sie und können den Verlauf eines bereits entschiedenen Gefechts wieder kippen.',
      'Feldnotiz: Nicht den Lärm mit der Gefahr verwechseln. Die kleinen Kämpfer lenken ab; wer den Schamanen gewähren lässt, bekommt es bald wieder mit derselben Rotte zu tun.'
    ],
    image: 'img/bestiarium/gefallene/gefallene-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie einer Gruppe Gefallener in einem ausgebrannten Lager',
    studies: [
      {
        image: 'img/bestiarium/gefallene/gefallene-ausruestungsstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Schleuder, Knochenstab, Klinge, Kapuze und Trophäen der Gefallenen',
        caption: 'Beute und Lärmzeichen'
      }
    ]
  });

  Object.assign(monsters[6], {
    category: 'Untote Gegnerfamilie',
    subtitle: 'Echos der Verstorbenen',
    region: 'Alte Ruinen, Gräber, Keller und vergessene Schlachtfelder',
    habitat: 'Mausoleen, Krypten, verlassene Anwesen und Orte ungelöster Bindung',
    behavior: 'Sie umgehen Hindernisse, greifen aus dem Hinterhalt an und verbinden Nahdruck mit geisterhaften Fernangriffen.',
    traits: 'Durchscheinende Gestalten, kalter Dunst, verblichene Waffen und an Orte oder Erinnerungen gebundene Gegenstände',
    variants: 'Geist, Wraith, Schattenbogenschütze, Banshee und Ruinenwächter',
    description: [
      'Geister sind keine Körper, die man aus dem Weg drängen kann. Sie sind ein Nachhall: eine Wache, die ihren Posten nicht verlassen hat, ein Pfeil, der immer noch sein Ziel sucht, oder eine Stimme, die in den Mauern einer Ruine hängen blieb. Erst wenn sie sich zeigen, merkt man, wie voll ein scheinbar leerer Ort sein kann.',
      'Im Kampf machen sie sich ihre Unwirklichkeit zunutze. Manche gleiten durch enge Durchgänge oder tauchen dort auf, wo Deckung erwartet wurde. Andere halten Abstand und arbeiten mit geisterhaften Geschossen. Ihre Wirkung ist weniger brachial als die eines schweren Untoten, aber gerade deshalb schwer vorherzusagen.',
      'Feldnotiz: Den Raum lesen, nicht nur den Gegner. Alte Waffen, zerbrochene Siegel und verlassene Gräber verraten oft, an welcher Erinnerung ein Geist hängt – und aus welcher Richtung er zurückkehrt.'
    ],
    image: 'img/bestiarium/geister/geister-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie dreier Geister in einer mondbeschienenen Ruine',
    studies: [
      {
        image: 'img/bestiarium/geister/geister-echo-studie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit zerbrochenem Schwert, Pfeilspitze, Ring, Medaillon und geisterhafter Flamme',
        caption: 'Gebundene Echos'
      }
    ]
  });

  Object.assign(monsters[7], {
    category: 'Bestialische Gegnerfamilie',
    subtitle: 'Hörner der Wildnis',
    region: 'Gebirge, Schluchten, Höhlen und raue Grenzlande',
    habitat: 'Felsenlager, Kultstätten, Pässe und verborgene Grotten',
    behavior: 'Schwere Brecher, Speerträger und Totemwirker besetzen gemeinsam Raum und Zugänge.',
    traits: 'Hörner, dichtes Fell, Äxte, Speere, Knochenamulette, Fellrüstungen und grobe Totems',
    variants: 'Marodeur, Mauler, Spießer, Totemwirker und Mondklan-Krieger',
    description: [
      'Ziegenmenschen – in alten Aufzeichnungen oft Khazra genannt – gehören zu den Gegnern, die eine Schlucht sofort in ein Bollwerk verwandeln. Ihre Lager sind mit Pfählen, Schädeln und Warnzeichen markiert; zwischen Fels und Höhleneingang lassen sie kaum Raum für einen unbedachten Vorstoß.',
      'Ihre Kraft liegt nicht allein im schweren Körperbau. Mauler brechen eine Linie mit ihren Äxten, Speerträger halten den Abstand unangenehm eng, und Totemwirker geben der Gruppe einen Mittelpunkt, an dem sie sich sammelt. Wer sich nur auf den größten Krieger konzentriert, wird oft von der Seite überrannt.',
      'Feldnotiz: Der Pass ist ihre Waffe. Nicht dort kämpfen, wo die Hörner die Front bilden können; ein Umweg über offenen Grund ist meist sicherer als ein direkter Weg in ihr Felsenlager.'
    ],
    image: 'img/bestiarium/ziegenmenschen/ziegenmenschen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie dreier Ziegenmenschen an einem felsigen Höhlenlager',
    studies: [
      {
        image: 'img/bestiarium/ziegenmenschen/ziegenmenschen-kriegsgeraet-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Axt, Speer, Hornschädel-Totem, Stab und Knochenamuletten',
        caption: 'Kriegsgerät und Totems'
      }
    ]
  });

  Object.assign(monsters[8], {
    category: 'Untote Gegnerfamilie',
    subtitle: 'Knochen im alten Dienst',
    region: 'Krypten, Begräbnisstätten, Ruinen und verlassene Festungen',
    habitat: 'Grabkammern, Katakomben, Ossuarien und ehemalige Schlachtfelder',
    behavior: 'Schildträger, Nahkämpfer und Fernschützen bilden aus alten Waffen eine erstaunlich geordnete Linie.',
    traits: 'Blanker Knochen, verrostete Rüstung, Schilde, Klingen, Armbrüste und die Reste militärischer Rangzeichen',
    variants: 'Skelettkrieger, Knochenschütze, Schildträger, Hauptmann und Knochenmagier',
    description: [
      'Skelette sind der sichtbarste Beweis dafür, dass Tod und Ruhe in Sanktuario nicht dasselbe bedeuten. Was von einer alten Wache, einem Heer oder einer Grabbeigabe übrig blieb, kann sich wieder erheben – nicht als Mensch, sondern als ein Gerüst aus Knochen, Gewohnheit und fremdem Willen.',
      'Ihre Bewaffnung folgt oft einer alten Ordnung. Schildträger stehen vorne, Schützen suchen erhöhte oder geschützte Positionen und schwere Gestalten halten den Mittelpunkt. Die Körper sind fragil, doch ihre Formation ist es nicht; wer sie ungeordnet angreift, gibt ihren Fernkämpfern den Vorteil.',
      'Feldnotiz: Die Waffe verrät die Rolle. Einen einzelnen Krieger zu brechen ist einfach; eine Linie aus Schild, Klinge und Armbrust fordert zuerst eine Lücke – nicht nur einen kräftigen Schlag.'
    ],
    image: 'img/bestiarium/skelette/skelette-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie einer Skelettformation in einer zerfallenen Krypta',
    studies: [
      {
        image: 'img/bestiarium/skelette/skelette-kriegsgeraet-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Armbrust, Schwert, Schild, Kettenhandschuh und Knochenamulett',
        caption: 'Kriegsgerät der Gruft'
      }
    ]
  });

  Object.assign(monsters[9], {
    category: 'Bestialische Gegnerfamilie',
    subtitle: 'Gift in den Sümpfen',
    region: 'Hawezar, sumpfige Ruinen und überwucherte Tempel',
    habitat: 'Schilf, flaches Wasser, Wurzelhöhlen und moosbewachsene Steinbauten',
    behavior: 'Sie lauern, vergiften und greifen aus dem Schutz von Wasser, Gras oder Ruinen an; größere Naga-artige Gestalten halten den Raum.',
    traits: 'Schuppen, gebogene Fänge, Gift, Häutungsreste, Schlangenspeere und Sumpfamulette',
    variants: 'Viper, Würgeschlange, Naga, Giftzahn und Schlangenwächter',
    description: [
      'Schlangen sind in den Sümpfen nicht bloß ein Teil der Landschaft. Zwischen Wurzeln, brackigem Wasser und umgestürzten Mauern verschwimmt ihre Gestalt mit dem Ort, bis der erste Zischlaut oder die Bewegung im Gras zu spät kommt. Manche jagen als Tiere, andere tragen Waffen und bewachen überwucherte Heiligtümer.',
      'Ihre Angriffe zielen auf Geduld und Stellung. Gift zwingt zur Bewegung, ein Biss bestraft zu große Nähe, und die größeren Schlangenwesen nutzen Speere oder Reichweite, um sichere Wege in tödliche Zonen zu verwandeln. Besonders gefährlich sind sie dort, wo das Gelände keine klare Sicht erlaubt.',
      'Feldnotiz: Nicht den Boden aus den Augen lassen. Häutungsreste, flache Schleifspuren und ein zu stiller Schilfgürtel sind Warnzeichen – der erste Angriff kommt selten aus der Richtung, in die man schaut.'
    ],
    image: 'img/bestiarium/schlangen/schlangen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie von Schlangenwesen in einem überwucherten Sumpftempel',
    studies: [
      {
        image: 'img/bestiarium/schlangen/schlangen-anatomiestudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Häutungsrest, Fangzahn, Giftprobe, Schlangenspeer und Sumpfamulet',
        caption: 'Gift und Häutungszeichen'
      }
    ]
  });

  Object.assign(monsters[10], {
    category: 'Bestialische Gegnerfamilie',
    subtitle: 'Netze der Tiefe',
    region: 'Höhlen, Keller, vergessene Schächte und tiefe Ruinen',
    habitat: 'Spinnennester, Felsspalten, Wurzelhöhlen und feuchte Kammern',
    behavior: 'Jäger, Brutmütter und Parasiten verbinden Bewegungshemmung durch Netze mit schnell nachrückenden Angriffen.',
    traits: 'Chitin, Fänge, klebrige Netze, Eiersäcke, Kokons und gelbliches Gift',
    variants: 'Netzspinne, Brutmutter, Parasitenbrut, Höhlenspinne und Giftspinne',
    description: [
      'Spinnen verwandeln einen Raum in eine Falle, lange bevor sie sich zeigen. Fäden über dem Durchgang, Kokons in den Ecken und ein unnatürlich stiller Boden verraten, dass die Höhle nicht leer ist. Die Tiere selbst sind schnell, doch ihr eigentliches Revier ist das Netz, das Wege verengt und Flucht verzögert.',
      'Innerhalb eines Nestes erfüllen die verschiedenen Formen eigene Aufgaben. Kleine Parasiten nutzen die Ablenkung der größeren Jäger, während Brutmütter einen Bereich mit Eiern und dichten Fäden abschirmen. Wer mitten im Netz stehen bleibt, kämpft bald gegen mehrere Bedrohungen zugleich.',
      'Feldnotiz: Erst das Netz, dann die Spinne. Freie Wege sind wertvoller als ein schneller Schlag auf die erste Gestalt, die aus der Dunkelheit fällt.'
    ],
    image: 'img/bestiarium/spinnen/spinnen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie eines Spinnennests mit Brutmutter und Jägern',
    studies: [
      {
        image: 'img/bestiarium/spinnen/spinnen-anatomiestudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Chitinbein, Fängen, Netz, Eiersack, Giftprobe und Kokon',
        caption: 'Spuren des Nests'
      }
    ]
  });

  Object.assign(monsters[11], {
    category: 'Untote Gegnerfamilie',
    subtitle: 'Höfe der Nacht',
    region: 'Verlassene Anwesen, alte Burgen, Keller und mondbeschienene Ruinen',
    habitat: 'Nobelsitze, Jagdgründe, Katakomben und verborgene Zufluchten',
    behavior: 'Schnelle Jäger, Duellanten und Blutwirker wechseln zwischen Distanzdruck, Nahkampf und nächtlichen Überfällen.',
    traits: 'Blasse Haut, elegante verfallene Kleidung, Rapierklingen, Kelche, Fledermauszeichen und Blutmagie',
    variants: 'Nachtjäger, Blutmagier, Duellant, Fledermausbrut und Vampirfürst',
    description: [
      'Vampire unterscheiden sich von anderen Untoten durch etwas Unruhiges in ihrer Eleganz. Ihre Höfe verstecken sich hinter zerfallenen Fassaden, unter alten Häusern oder in Anwesen, deren Fenster seit Jahren kein Licht mehr zeigen. Wo sie auftreten, wirkt selbst die Stille geplant: eine Einladung, näher zu kommen.',
      'Im Kampf vereinen sie Tempo mit Kontrolle. Duellanten suchen den einzelnen, unachtsamen Gegner, während Blutwirker aus der zweiten Reihe Druck aufbauen. Andere wechseln zwischen menschlicher und bestialischer Gestalt, um über Hindernisse oder an einer Front vorbei zu gelangen. Ihre Gruppe jagt nicht laut, sondern zielgerichtet.',
      'Feldnotiz: Den Blick nie nur auf den Gegner vor dir richten. Ein Vampir, der sich zurückzieht, muss nicht fliehen – er kann den Weg für den Angriff aus der Dunkelheit öffnen.'
    ],
    image: 'img/bestiarium/vampire/vampire-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie einer vampirischen Jagdgruppe vor einem verfallenen Anwesen',
    studies: [
      {
        image: 'img/bestiarium/vampire/vampire-regalia-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Rapier, Kelch, Siegelring, Mantelschließe, Fledermausflügel und Glasfläschchen',
        caption: 'Regalia der Nacht'
      }
    ]
  });

  Object.assign(monsters[12], {
    category: 'Bestialische Gegnerfamilie',
    subtitle: 'Jäger unter alten Bäumen',
    region: 'Scosglen, dichte Wälder, moosige Täler und steinige Wildnis',
    habitat: 'Wurzelhöhlen, Waldpfade, verlassene Steinkreise und tiefer Forst',
    behavior: 'Sie jagen im Rudel, umkreisen ihre Beute und setzen auf Geschwindigkeit, Sprünge und unmittelbaren Nahkampf.',
    traits: 'Dichtes Fell, lange Klauen, Wolfsspuren, gelbe Augen und anhaltende Rudelkommunikation',
    variants: 'Werwolf, Rudeljäger, Alphawolf, Klauenläufer und Mondheuler',
    description: [
      'Werwölfe sind keine zufälligen Tiere des Waldes. In den dichten Forsten wirken sie wie ein Teil der Dunkelheit zwischen den Stämmen: erst ein Geruch, dann ein Abdruck im Schlamm, schließlich das Geräusch von Krallen auf nassem Stein. Wenn sie sichtbar werden, haben sie ihre Jagd meist längst begonnen.',
      'Ihre Stärke ist Bewegung. Ein großer Alpha bindet die Aufmerksamkeit, während schlankere Jäger seitlich ansetzen oder aus erhöhter Position springen. Das Gelände ist ihr Verbündeter: Wurzeln, Felsen und enge Pfade machen aus jedem Ausweichmanöver eine neue Gelegenheit für das Rudel.',
      'Feldnotiz: Nicht in die Mitte des Rudels geraten. Eine offene Flanke und ein freier Rückzugsweg sind wichtiger als der erste Treffer – wer stehen bleibt, gibt dem nächsten Sprung die Distanz, die er braucht.'
    ],
    image: 'img/bestiarium/werwoelfe/werwoelfe-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie eines Werwolfrudels in einem düsteren Wald',
    studies: [
      {
        image: 'img/bestiarium/werwoelfe/werwoelfe-spurenstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit großer Pfote, Fell, Kralle, Jagdpfeil und mondförmigem Talisman',
        caption: 'Spuren der Jagd'
      }
    ]
  });

  Object.assign(monsters[13], {
    category: 'Untote Gegnerfamilie',
    subtitle: 'Die Ruhelosen der Erde',
    region: 'Friedhöfe, überflutete Wege, verlassene Dörfer und feuchte Keller',
    habitat: 'Flache Gräber, Sümpfe, Ruinen und von Krankheit gezeichnete Orte',
    behavior: 'Langsame Körper bilden eine zähe Front; schwere Kadaver nehmen Treffer auf, während andere aus der Menge greifen.',
    traits: 'Lehm, Moorwasser, verweste Tücher, Grabwerkzeug, rostige Schlüssel, Ketten und alte Lampen',
    variants: 'Schlurfer, Grabwächter, Seuchenleiche, Sumpfleiche und schwerer Kadaver',
    description: [
      'Zombies sind die beharrlichste Form der Untoten. Sie sprinten nicht, planen nicht und tragen selten mehr bei sich als Schlamm, Grabtuch und die Werkzeuge ihres früheren Ortes. Doch wo ein Friedhof, ein Dorf oder ein Sumpf viele Tote bewahrt, wird aus ihrer Langsamkeit eine Welle.',
      'Ihre Gefahr entsteht durch Masse und Widerstand. Leichte Schlurfer greifen nach jedem freien Arm, während größere Körper den Weg versperren und Treffer einstecken, die andere Gegner längst gefällt hätten. In engen Räumen können selbst wenige Zombies eine Flucht in ein Gedränge verwandeln.',
      'Feldnotiz: Abstand allein genügt nicht. Den Rückweg freihalten und schwere Körper früh erkennen – sonst wird aus einer langsamen Gruppe eine Wand, die sich nicht mehr umgehen lässt.'
    ],
    image: 'img/bestiarium/zombies/zombies-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie dreier Zombies auf einem überfluteten Friedhofsweg',
    studies: [
      {
        image: 'img/bestiarium/zombies/zombies-fundstueckstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Grabschaufel, zerbrochener Laterne, Grabtuch, Schlüssel und Kette',
        caption: 'Zurückgelassene Grabbeigaben'
      }
    ]
  });

  Object.assign(monsters[14], {
    category: 'Menschliche Gegnerfamilie',
    subtitle: 'Die Buße in Eisen',
    region: 'Fractured Peaks, Kehjistan und alte Pilgerwege',
    habitat: 'Verfallene Kapellen, befestigte Übergänge, Gruften und Klosteranlagen',
    behavior: 'Schildträger binden den Kampf, während Armbrüste und Stangenwaffen aus der zweiten Reihe Druck aufbauen.',
    traits: 'Beschädigte Plattenrüstungen, Kiteschilde, Streitkolben, Hellebarden, Armbrüste und Bußketten',
    variants: 'Schildträger, Hellebardier, Armbrustschütze, Büßer und schwerer Wächter',
    description: [
      'Die Ritter der Buße tragen noch immer die Formen alter Ordnung: Wappen, Rüstungen und die Sprache des Schutzes. Doch an vielen verlassenen Wegen Sanktuarios sind diese Zeichen nur noch Hüllen. Ihre Helme sind stumpf, ihre Schilde geflickt, und die Gelübde, die sie einst banden, haben sich in eine stumme Härte verwandelt.',
      'Im Gefecht bewegen sie sich nicht wie eine zufällige Wache. Schildträger halten einen Durchgang, Hellebardiere erreichen über die erste Reihe hinweg ihr Ziel, und Armbrustschützen bestrafen jeden, der sich zu weit aus der Deckung löst. Ihre Disziplin bleibt erhalten, auch wenn ihre Sache längst verloren scheint.',
      'Feldnotiz: Nicht den Schild als einzelne Mauer behandeln. Der Ritter davor hält nur die Linie, damit die Waffe dahinter ihren Winkel findet. Seitlich ausweichen, die Formation öffnen und erst dann den schweren Träger stellen.'
    ],
    image: 'img/bestiarium/ritter/ritter-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie dreier Ritter der Buße auf einem verwitterten Pilgerweg',
    studies: [
      {
        image: 'img/bestiarium/ritter/ritter-kriegsgeraet-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Schild, Streitkolben, Hellebarde, Armbrustbolzen und Bußkette',
        caption: 'Kriegsgerät der Buße'
      }
    ]
  });

  Object.assign(monsters[15], {
    category: 'Bestialische Gegnerfamilie',
    subtitle: 'Brut unter brüchigem Stein',
    region: 'Trockensteppe, Kehjistan, Hawezar und tiefe Höhlen',
    habitat: 'Erdspalten, Brutkammern, trockene Tunnel und verlassene Minenschächte',
    behavior: 'Larven brechen aus dem Boden, während größere Brutformen Wege verengen und mit Säure oder Masse Druck erzeugen.',
    traits: 'Segmentpanzer, Schleimspuren, zangenartige Mäuler, Eigelege und ätzende Sekrete',
    variants: 'Madenlarve, Säurewurm, Grabmaggot, Brutmutter und Schlundkriecher',
    description: [
      'Maden und Würmer kündigen sich selten durch Lärm an. Eine aufgerissene Erdkruste, feuchter Schleim an trockenem Stein oder das leise Arbeiten unter den Füßen genügen. Wo ihre Gänge dicht beieinander liegen, wird selbst ein sicher wirkender Durchgang zu einem brüchigen Dach über einer lebenden Brut.',
      'Die kleineren Larven sind vor allem dort gefährlich, wo sie in Masse ausbrechen. Größere Formen öffnen dagegen Wege, versperren Fluchten oder spritzen ätzende Sekrete in enge Räume. Eine Brutmutter muss nicht schnell sein: Sie macht aus dem eigenen Nest eine Waffe und zwingt jeden Eindringling, auf unsicherem Boden zu bleiben.',
      'Feldnotiz: Nicht dem ersten Aufbrechen folgen. Der sichtbare Wurm ist oft nur der Köder für die Stelle, an der der Boden gleich nachgibt. Freien Stein suchen, Säureflächen meiden und die Brutkammer niemals ohne Rückweg betreten.'
    ],
    image: 'img/bestiarium/maden/maden-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie einer Madenbrut mit Brutmutter in einer Erdspalte',
    studies: [
      {
        image: 'img/bestiarium/maden/maden-brutstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Larvenpanzer, Zange, Eigelege, Säureprobe und Bruchstück eines Baus',
        caption: 'Zeichen der Brutkammer'
      }
    ]
  });

  Object.assign(monsters[16], {
    category: 'Dämonische Gegnerfamilie',
    subtitle: 'Schwärme des Verfalls',
    region: 'Hawezar, verfaulte Keller, Sümpfe und verseuchte Ruinen',
    habitat: 'Morast, Aasplätze, sumpfige Gewölbe und Orte stehenden Wassers',
    behavior: 'Sie überlagern Sicht und Bewegung, während größere Brutformen aus dem Schwarm heraus stechen oder Gift verspritzen.',
    traits: 'Zerfranste Flügel, schwarze Stachel, geschwollene Leiber, Eigelege und fauliger Dunst',
    variants: 'Leichenfliege, Stechfliege, Schwarmbrut, Giftfliege und geflügelte Brutmutter',
    description: [
      'Ein einzelnes Summen ist in den Sümpfen kaum bemerkenswert. Ein Schwarm, der sich gegen den Wind bewegt und in den Schatten einer Ruine sammelt, ist es. Fliegen dieser Art folgen nicht allein dem Aas: Sie umkreisen verdorbene Orte, dringen durch kleinste Öffnungen und machen aus jedem unbewegten Ziel eine leichte Beute.',
      'Ihre Stärke liegt nicht im einzelnen Stich, sondern in der Unruhe, die sie erzeugen. Kleine Körper brechen Sichtlinien auf und treiben ihre Beute aus der Deckung. Dann stoßen größere, gifttragende Formen vor oder eine Brutmutter nutzt den Schwarm als lebendigen Schleier. Wer blind schlägt, schafft dem nächsten Angriff nur mehr Raum.',
      'Feldnotiz: Gegen einen Schwarm nicht stehen bleiben und nicht in enge Ecken fliehen. Bewegung, freie Luft und ein klarer Blick auf die größere Brut sind mehr wert als jeder Treffer in das Summen.'
    ],
    image: 'img/bestiarium/fliegen/fliegen-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie eines bösartigen Fliegenschwarms über einem Sumpf',
    studies: [
      {
        image: 'img/bestiarium/fliegen/fliegen-spurenstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Flügel, Stachel, Eigelege, Saugrüssel und Giftprobe',
        caption: 'Anatomie des Schwarms'
      }
    ]
  });

  Object.assign(monsters[17], {
    category: 'Bestialische Gegnerfamilie',
    subtitle: 'Zähne der ungezähmten Wege',
    region: 'Scosglen, Fractured Peaks, Trockensteppe und bewaldete Randlande',
    habitat: 'Forste, Felsnischen, Jagdpfade, Höhlen und abgelegene Wasserstellen',
    behavior: 'Warge, Bären und Keiler nutzen ihren jeweiligen Raum: Hetze, Masse oder plötzliche Stöße zwingen die Beute aus der Stellung.',
    traits: 'Fell, Klauen, Hauer, tiefe Spuren, Reviermarkierungen und eingerissene Jagdgeschosse',
    variants: 'Warg, Alphawarg, Schwarzbär, Wildschwein, Dornbestie und Rudeljäger',
    description: [
      'Nicht jede Bestie Sanktuarios ist verdorben, doch selbst die natürlichen Tiere der Wildnis dulden selten Eindringlinge in ihrem Revier. Ein Warg folgt der Spur, bis die Flucht zur Hetze wird. Ein Bär verteidigt Raum und Nachwuchs mit schierer Masse. Keiler wiederum brauchen nur einen schmalen Pfad, um einen Wanderer aus dem Gleichgewicht zu bringen.',
      'Gefährlich werden sie, wenn das Gelände ihre Art des Angriffs begünstigt. Unter Bäumen und zwischen Felsen kann ein Rudel den Blick teilen; in engeren Passagen gibt es kaum Platz, einem Stoß auszuweichen. Die Tiere kämpfen nicht nach einer gemeinsamen Ordnung, aber jede Art macht aus ihrem Lebensraum einen Vorteil.',
      'Feldnotiz: Revierspuren ernst nehmen. Frische Krallen am Stamm, aufgewühlte Erde oder ein gebrochener Pfeil bedeuten, dass etwas Großes in der Nähe war – und vielleicht noch immer den kürzesten Weg zum Eindringling kennt.'
    ],
    image: 'img/bestiarium/wildtiere/wildtiere-hauptstudie-pergament-freigestellt.png',
    imageAlt: 'Pergamentstudie von Warg, Schwarzbär und Wildschwein in einer kalten Waldlichtung',
    studies: [
      {
        image: 'img/bestiarium/wildtiere/wildtiere-spurenstudie-pergament-freigestellt.png',
        alt: 'Pergamentstudie mit Wargspur, Bärenkralle, Hauer, Fell, Jagdpfeil und Wegstein',
        caption: 'Spuren der Wildnis'
      }
    ]
  });

  const index = document.querySelector('#monster-index');
  if (!index) return;

  const monsterGroups = [
    { id: 'humans', label: 'Menschen', category: 'Menschliche Gegnerfamilie' },
    { id: 'demons', label: 'Dämonen', category: 'Dämonische Gegnerfamilie' },
    { id: 'undead', label: 'Untote', category: 'Untote Gegnerfamilie' },
    { id: 'beasts', label: 'Bestien', category: 'Bestialische Gegnerfamilie' }
  ];

  const search = document.querySelector('#monster-search');
  const noResults = document.querySelector('#monster-no-results');
  const familyPicker = document.querySelector('#creature-family-picker');
  const category = document.querySelector('#creature-category');
  const count = document.querySelector('#creature-count');
  const name = document.querySelector('#creature-name');
  const subtitle = document.querySelector('#creature-subtitle');
  const description = document.querySelector('#creature-description');
  const facts = document.querySelector('#creature-facts');
  const image = document.querySelector('#creature-image');
  const illustration = document.querySelector('#creature-illustration');
  const imagePlaceholder = document.querySelector('#creature-image-placeholder');
  const caption = document.querySelector('#creature-caption');
  const studies = document.querySelector('#creature-studies');
  const previous = document.querySelector('#monster-previous');
  const next = document.querySelector('#monster-next');
  let activeIndex = 0;

  const normalize = (value) => value.toLocaleLowerCase('de-DE')
    .replace(/ß/g, 'ss').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const groupForMonster = (monster) => monsterGroups.find((group) => group.category === monster.category);
  const matchingMonsters = (filter = '') => {
    const query = normalize(filter.trim());
    return monsters.filter((monster) => !query || normalize(`${monster.name} ${monster.category}`).includes(query));
  };

  function renderIndex(filter = '') {
    const visible = matchingMonsters(filter);
    const activeGroup = groupForMonster(monsters[activeIndex]);
    const visibleGroups = monsterGroups.filter((group) => visible.some((monster) => monster.category === group.category));
    const wantedGroups = visibleGroups.map((group) => group.id).join('|');
    const renderedGroups = [...index.querySelectorAll('.monster-index-entry')].map((button) => button.dataset.monsterGroup).join('|');

    // Solange die gleichen Obergruppen sichtbar sind, bleiben die Elemente im
    // DOM. Dadurch kann der zuvor aktive Stoffreiter zurück in den Schlitz
    // animieren, statt beim Neurendern abrupt zu verschwinden.
    if (renderedGroups === wantedGroups) {
      index.querySelectorAll('.monster-index-entry').forEach((button) => {
        const isActive = button.dataset.monsterGroup === activeGroup.id;
        button.setAttribute('aria-pressed', String(isActive));
        button.toggleAttribute('aria-current', isActive);
      });
      noResults.hidden = visible.length !== 0;
      return;
    }

    index.replaceChildren();

    visibleGroups.forEach((group) => {
      const groupIndex = monsterGroups.indexOf(group);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'monster-index-entry codex-folio__tab';
      button.dataset.monsterGroup = group.id;
      button.setAttribute('aria-pressed', String(group.id === activeGroup.id));
      if (group.id === activeGroup.id) button.setAttribute('aria-current', 'true');
      button.setAttribute('aria-label', `${group.label} auswählen`);
      button.textContent = group.label;
      index.append(button);
    });
    noResults.hidden = visible.length !== 0;
  }

  function renderFamilyPicker(filter = '') {
    const activeGroup = groupForMonster(monsters[activeIndex]);
    const visible = matchingMonsters(filter).filter((monster) => monster.category === activeGroup.category);
    familyPicker.replaceChildren();

    visible.forEach((monster) => {
      const monsterIndex = monsters.indexOf(monster);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'creature-family-button';
      button.dataset.monsterIndex = monsterIndex;
      button.textContent = monster.name;
      button.setAttribute('aria-pressed', String(monsterIndex === activeIndex));
      if (monsterIndex === activeIndex) button.setAttribute('aria-current', 'true');
      familyPicker.append(button);
    });
    familyPicker.hidden = visible.length === 0;
  }

  function renderStudies(monster) {
    studies.replaceChildren();
    const study = monster.studies?.[0];
    studies.hidden = !study;
    if (!study) return;

    const heading = document.createElement('h4');
    heading.textContent = study.caption || 'Geborgene Ausrüstung';
    studies.append(heading);

    // Bild + allgemeine Beschreibung. Frühere Variante mit nummerierten
    // Pins direkt auf dem Bild + Legende wurde verworfen: die Positionen
    // ließen sich nicht auflösungsunabhängig auf das Bild abstimmen.
    const figure = document.createElement('figure');
    const studyImage = document.createElement('img');
    studyImage.src = study.image;
    studyImage.alt = study.alt || '';
    studyImage.loading = 'lazy';
    studyImage.className = 'codex-folio__wide-image';
    const studyCaption = document.createElement('figcaption');
    studyCaption.textContent = study.description || study.caption || 'Zusätzliche Studie';
    figure.append(studyImage, studyCaption);
    studies.append(figure);
  }

  function selectMonster(monsterIndex, shouldFocus = false) {
    activeIndex = (monsterIndex + monsters.length) % monsters.length;
    const monster = monsters[activeIndex];
    category.textContent = monster.category;
    count.textContent = `${activeIndex + 1} / ${monsters.length}`;
    name.textContent = monster.name;
    subtitle.textContent = monster.subtitle;
    description.replaceChildren();
    (Array.isArray(monster.description) ? monster.description : [monster.description]).forEach((paragraph) => {
      const text = document.createElement('p');
      text.textContent = paragraph;
      if (paragraph.startsWith('Feldnotiz:')) text.classList.add('field-note');
      description.append(text);
    });
    facts.replaceChildren();
    [
      ['Herkunft / Region', monster.region], ['Lebensraum', monster.habitat],
      ['Verhalten', monster.behavior], ['Merkmale', monster.traits], ['Typische Varianten', monster.variants]
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
    if (monster.image) {
      image.src = monster.image;
      image.alt = monster.imageAlt || `${monster.name} – Kreaturenstudie`;
      image.hidden = false;
      imagePlaceholder.hidden = true;
      illustration.hidden = false;
    } else {
      image.removeAttribute('src');
      image.alt = '';
      image.hidden = true;
      imagePlaceholder.hidden = false;
      illustration.hidden = true;
    }
    caption.textContent = monster.image ? 'Archivierte Hauptstudie' : 'Bildmaterial folgt';
    renderStudies(monster);
    renderIndex(search.value);
    renderFamilyPicker(search.value);
    if (shouldFocus) name.focus({ preventScroll: true });
  }

  index.addEventListener('click', (event) => {
    const button = event.target.closest('.monster-index-entry');
    if (!button) return;
    const group = monsterGroups.find((item) => item.id === button.dataset.monsterGroup);
    const currentGroup = groupForMonster(monsters[activeIndex]);
    const firstMonster = monsters.findIndex((monster) => monster.category === group.category);
    selectMonster(group.id === currentGroup.id ? activeIndex : firstMonster, true);
  });
  familyPicker.addEventListener('click', (event) => {
    const button = event.target.closest('.creature-family-button');
    if (button) selectMonster(Number(button.dataset.monsterIndex), true);
  });
  search.addEventListener('input', () => {
    renderIndex(search.value);
    renderFamilyPicker(search.value);
  });
  [previous, next].forEach((button, direction) => button.addEventListener('click', () => {
    // Beim Blättern wird ein eventueller Filter gelöst, damit der neue aktive
    // Registereintrag wieder sichtbar und eindeutig markiert ist.
    search.value = '';
    selectMonster(activeIndex + (direction ? 1 : -1), true);
  }));

  selectMonster(0);
})();
