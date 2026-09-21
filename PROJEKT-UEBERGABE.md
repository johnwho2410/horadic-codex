# Projektübergabe: Diablo IV – Kompendium

Stand: 21. September 2026

## Projekt und Ziel

Das Projekt ist ein deutschsprachiges Diablo-IV-Kompendium im Diablo-/Horror-/Art-déco-Stil.

Live-Site:

<https://diablo-iv-kompendium.bjo-zimmermann.chatgpt.site/>

Die Startseite ist derzeit noch ein langer, visuell ausgearbeiteter Onepager. Langfristig soll sie zu einem deutlich kürzeren Hub werden. Ausführliche Inhalte sollen schrittweise auf Unterseiten verschoben, aber nicht gelöscht werden.

Geplante Reihenfolge der Startseite:

1. Diablo IV / Sanctuary
2. Klassen
3. Die Welt
4. Die Übel
5. Gameplay

Das Ziel ist eine bessere Hierarchie und weniger Seitenlänge. Es ist ausdrücklich kein komplettes Redesign.

## Unveränderliche Designvorgaben

- Diablo-/Horror-/Art-déco-Stil, Texturen, Typografie und grafische Ornamente erhalten.
- Bestehende starke Komponenten nicht neu erfinden, sondern sauberer einordnen.
- Bereiche sollen direkt aneinanderstoßen.
- Texturen dürfen nicht sichtbar vertikal gekachelt oder unscharf wirken.
- Lava-Textur nur für „Wissenswertes“ und „Wichtige Seiten“ verwenden.
- Änderungen klein, einzeln und responsiv umsetzen.
- Keine großflächigen Ersetzungen des bestehenden Projekts.

### Sanctuary

Kurzer atmosphärischer Lore-Teaser mit CTA zur ausführlichen Geschichte.

### Klassen

- Die vorhandenen ausführlichen Klassenkarten mit ihren Werten, Filtern und Links beibehalten.
- Inhalt, Aufbau und Look der Karten nicht neu erfinden.
- Lediglich einen dekorativen, responsiven Bildrahmen außen um jede Karte legen.
- Detailseiten je Klasse bleiben erhalten.

### Die Welt

- Kein großes Hintergrundbild für den gesamten Bereich.
- Neutraler beziehungsweise dunkler Hintergrund.
- Den vorhandenen manuellen Regions-Slider beibehalten.
- Kein Autoplay.
- Pro Region: Bild, Lore-Teaser, Zentrum/Hauptstadt, Besonderheiten und CTA.
- Der separate Überschriftenblock direkt vor dem Regions-Slider soll später entfallen.
- Sieben offizielle Regionsbilder sollen nach einem späteren Upload die aktuellen Bilder ersetzen.

### Die Übel

- Die bestehende Buch-/Pergamentdarstellung unbedingt beibehalten.
- Der Bereich darf kompakter und klarer werden, aber nicht zu normalen Cards oder einem völlig neuen Layout werden.
- Große Übel: Diablo, Mephisto und Baal.
- Geringe Übel: Andariel, Duriel, Belial und Azmodan.
- Bekannte Bosse später unter Gameplay/Bosse einordnen.

### Gameplay

Als kompakter Hub für:

- Charakterentwicklung
- Ausrüstung
- Aktivitäten
- Endgame
- Farmen
- Glossar

## Aktueller Seitenbestand

- `index.html`: vollständige Startseite/Onepager.
- `klassen.html`: separate Klassenübersicht.
- `klassen/`: acht Klassen-Detailseiten.
- Die Klassen-Detailseiten besitzen eine vollbreite Bühne. Das Klassenbild liegt links und läuft weich ins Schwarz aus; der Text beginnt ungefähr ab der Viewportmitte.
- Die Welt besitzt bereits einen großen, manuell bedienbaren Regions-Slider mit Bild und Textoverlay.
- Die Übel werden bereits in der gewünschten Buch-/Pergamentoptik dargestellt.

## Dateistruktur der exportierten Projektkopie

```text
diablo-iv-kompendium-webprojekt/
├── index.html
├── klassen.html
├── README.md
├── PROJEKT-UEBERGABE.md
├── css/
│   ├── styles.css
│   ├── klassen-uebersicht.css
│   └── klassen.css
├── js/
│   └── app.js
├── img/
│   ├── Klassenbilder und Klassen-Icons
│   ├── Regionsbilder
│   ├── Bilder der Übel
│   ├── Texturen
│   ├── Divider und Kartenrahmen
│   └── diablo-heavy.ttf
└── klassen/
    ├── barbar.html
    ├── druide.html
    ├── geistgeborener.html
    ├── hexenmeister.html
    ├── jaeger.html
    ├── paladin.html
    ├── totenbeschwoerer.html
    └── zauberer.html
```

Die exportierte Fassung enthält keine eingebetteten `<style>`- oder `<script>`-Blöcke mehr. CSS und JavaScript sind getrennt, und alle lokalen Bildpfade wurden auf `img/` umgestellt.

## Relevante Bilddateien

- `img/class-card-frame.png`: dekorativer Außenrahmen für die Klassenkarten.
- `img/section-divider-ornament.png`: neues mittleres Divider-Ornament.
- `img/section-divider-line.png`: lange, schmale Glutlinie hinter dem Ornament.
- `img/d4-original-divider.png`: alter Divider und visuelle Referenz für die gewünschte Komposition.
- `img/section-rock-seamless.webp`: dunkle Felsstruktur.
- `img/section-leather-seamless.webp`: Lederstruktur.
- `img/section-lava-seamless.webp`: Lava-Textur, nur für die dafür vorgesehenen Bereiche.

## Direkt nächste offene Korrektur

### Rahmen der Klassenkarten

Der dekorative Rahmen sitzt noch nicht exakt.

Gewünschtes Ergebnis:

- Der Rahmen muss vollständig **außen** um Bild und Karte liegen.
- Die Karte darf oben und unten nicht über den Rahmen hinausragen.
- Links und rechts darf kein sichtbar größerer Abstand als oben und unten entstehen.
- Der Rahmen soll den Karteninhalt nicht verkleinern, überdecken oder dessen vorhandenen Look verändern.
- Auf allen Breakpoints gleichmäßiger optischer Abstand zwischen Kartenkante und Ornamentrahmen.

Aktuell wird der Außenrahmen in `css/styles.css` über `.class-card::after` gesetzt. Die derzeitige Regel verwendet ungefähr `inset:-35px -12px` und `background-size:100% 100%`. Das Seitenverhältnis und die transparenten Ränder der PNG-Datei müssen bei der Korrektur berücksichtigt werden. Nicht einfach einen neuen CSS-Rahmen zeichnen; das bereitgestellte Rahmenbild soll verwendet werden.

### Divider zwischen den Modulen

Der neue Divider soll prinzipiell wie der alte Divider komponiert sein:

- Die lange, schmale Linie liegt exakt auf dem Übergang zwischen zwei Modulen.
- Sie soll wirklich wie eine dünne Linie wirken, nicht wie ein breiter Balken.
- `section-divider-line.png` liegt hinter dem Ornament.
- `section-divider-ornament.png` liegt mit höherem `z-index` darüber.
- Das Ornament sitzt optisch etwas höher als die dünne Linie.
- Die Linie läuft fast über die volle Viewportbreite, mit leichtem seitlichem Padding.
- Beide Bilder müssen transparent bleiben; kein schwarzer Bildhintergrund darf sichtbar werden.
- Responsiv darf die Linie gekürzt werden, die Hierarchie „Linie hinten, Ornament vorne und etwas höher“ muss aber erhalten bleiben.

Die aktuellen Regeln stehen in `css/styles.css` unter den Kommentaren `Section Divider`, `Feine Glutlinie` und `Die dünne Glutlinie`. Dort existieren mehrere aufeinanderfolgende Overrides für `.section-divider`, `.section-divider::before` und `.section-divider img`. Beim Nachjustieren diese Kaskade beachten oder vorsichtig zu einer eindeutigen Regel zusammenführen, ohne andere Module zu verschieben.

## Technische Hinweise

- `js/app.js` enthält die Interaktionen der Startseite, darunter Klassen-Dialoge und den manuellen Regions-Slider.
- Die Bildpfade in `js/app.js` sind dokumentrelativ und beginnen mit `img/`.
- CSS-Bildpfade beginnen wegen des Unterordners mit `../img/`.
- Die Diablo-Schrift wird aus `../img/diablo-heavy.ttf` geladen.
- Die Projektkopie kann direkt über `index.html` geöffnet werden. Zuverlässiger ist ein lokaler Server, beispielsweise `npx serve .` im Projektordner.
- Alle lokalen HTML- und CSS-Verweise wurden beim Export geprüft; `js/app.js` besteht die Syntaxprüfung mit Node.js.

## Originale Arbeitskopie und Veröffentlichung

Die unabhängige, sauber getrennte Exportkopie liegt unter:

`C:\Users\lowkey-music\Desktop\diablo 4 webapp\diablo-iv-kompendium-webprojekt`

Die bisherige Sites-Arbeitskopie liegt unter:

`C:\Users\lowkey-music\Desktop\diablo 4 webapp\site-source`

Die Live-Site wurde durch den Export nicht verändert. Der bisherige Arbeitsablauf sah vor, jede abgeschlossene Änderung auf derselben bestehenden Site zu veröffentlichen und kein neues Sites-Projekt anzulegen.

## Empfohlene Arbeitsweise für die Fortsetzung

1. Zuerst ausschließlich Kartenrahmen und Divider korrigieren.
2. Desktop und schmale mobile Ansicht visuell prüfen.
3. Erst danach mit der schrittweisen Verkürzung der Startseite beginnen.
4. Bestehende Inhalte beim Auslagern auf Unterseiten verschieben, nicht löschen.
5. Klassenkarten, Regions-Slider und Buchoptik als feste Bestandteile behandeln.

