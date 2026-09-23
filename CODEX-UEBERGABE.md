# Übergabe an ChatGPT Codex

Stand: 23. September 2026 — geschrieben von Claude, weil das Wochen-Limit bald erreicht ist. Codex soll ab hier kleinere Aufgaben übernehmen können.

## Projekt

Deutschsprachiges Diablo-IV-Fansite/Kompendium ("The Horadric Codex"), statisches HTML/CSS/JS, kein Build-Tool, kein Framework. Diablo-/Horror-/Art-déco-Look. Arbeitsverzeichnis:

`C:\Users\lowkey-music\Desktop\diablo 4 webapp\diablo-iv-kompendium-webprojekt`

Git-Repo, GitHub-Remote unter `johnwho2410/...`. Branch `master` ist der Hauptbranch.

Die ältere Datei `PROJEKT-UEBERGABE.md` im selben Ordner ist **veraltet** (Stand vor Sanctuary-Ausbau, Chronik, Sub-Navigation, Hölle-Video-Hover). Nicht mehr als aktuelle Quelle behandeln, nur noch für die generellen Design-Leitplanken (Abschnitt "Unveränderliche Designvorgaben") relevant — die gelten weiterhin.

## Genereller Stil / feste Regeln

- Bestehende Optik (Texturen, Typografie, Ornamente, Buch-/Pergament-Look bei den Übeln, Klassenkarten-Rahmen) **nicht neu erfinden**, nur sauber einordnen oder erweitern.
- Kleine, einzelne, responsive Änderungen. Keine großflächigen Rewrites.
- Jede neue Unterseite (z. B. `sanctuary.html`, `hoelle.html`, `himmel.html`) hat eigenständiges, dupliziertes CSS mit eigenen `@font-face`/Design-Tokens — kein Import von `styles.css`. Konvention: eigene CSS-Datei pro Seite unter `css/<seitenname>.css`.
- Inline-`<script>`-Blöcke pro Seite sind hier üblich (z. B. Hover-Logik in `hoelle.html`), nicht alles muss in `js/app.js` bzw. eigene `.js`-Dateien.
- Commit-Sprache: Deutsch, kurz, beschreibend (`git log --oneline` zeigt das Muster). PRs werden über `gh pr create` erstellt und **erst nach expliziter Freigabe durch den User gemergt** — nie eigenständig mergen.
- Committen nur, wenn der User es ausdrücklich sagt.

## Aktueller Stand (uncommitted!)

Auf `master`, folgende Änderungen sind **noch nicht committed**:

- `css/hoelle.css` (modifiziert)
- `hoelle.html` (modifiziert)
- Neu, untracked: `img/evil/andarial-animation.mp4`, `img/evil/azmodan-animation.mp4`, `img/evil/belial-animation.mp4`, `img/evil/duriel-animation.mp4`, `img/evil/duriel-animation_old.mp4`

**Feature:** Bei den "Geringen Übeln" (Andariel, Duriel, Belial, Azmodan) auf `hoelle.html` spielt bei Hover/Fokus einmalig eine kurze Video-Animation über dem Farbbild ab ("Übel kommt lebendig"), danach blendet sie sich wieder aus und das normale Farbbild bleibt sichtbar (kein Loop). Implementiert über ein `<video muted playsinline preload="none">` pro Eintrag plus JS (`mouseenter`/`focusin` → `play()`, `mouseleave`/`focusout` → `pause()`+reset, `ended` → Klasse entfernen). CSS-Klasse `.uebel-entry-img.anim` / `.playing`, gleiche Masken-Form wie das existierende Farbbild.

Das wurde bereits im Browser verifiziert (Hover löst Video aus, `ended` blendet zurück zum Bild, `mouseleave` pausiert/resettet). **Noch offen:** Branch erstellen, committen, pushen, PR aufmachen — wartet auf "ok, bitte committen/PR" vom User.

Achtung: Dateiname `andarial-animation.mp4` hat absichtlich denselben Tippfehler ("andarial" statt "andariel") wie die vom User bereitgestellte Datei — nicht umbenennen, ohne die HTML-Referenz mitzuändern.

## Offener Plan: Startseite verkürzen

Es existiert ein noch nicht umgesetzter Plan (aus einer Planning-Session), grob:

- `index.html` soll von langem Onepager zu kurzem Hub werden, Zielreihenfolge: Hero → Sanctuary-Teaser (neu) → Klassen → Die Welt → Die Übel → Gameplay-Hub (neu) → Wissen → Links.
- Bosse, Lore/Chronik, Völker, Fraktionen, Beziehungskarte, Systeme, Farmen, Glossar sollen aus `index.html` raus auf neue Unterseiten (`sanctuary.html` für Lore, `gameplay.html` + `gameplay/*.html` für den Rest) — **Inhalt verschieben, nicht löschen**.
- Details (genaue Kachel-Zuordnung, Dateistruktur, Reihenfolge der Umsetzung) stehen in der Plan-Datei: `C:\Users\lowkey-music\.claude\plans\jaunty-leaping-sedgewick.md`

Wichtig: `sanctuary.html` existiert inzwischen bereits (Chronik/Lore wurde dort schon aufgebaut, siehe Commits `sanctuary-hero-header`, `chronik-timeline`, `chronik-11-kapitel`) — der Plan ist also teilweise schon umgesetzt. Vor Weiterarbeit den aktuellen Inhalt von `sanctuary.html` und `index.html` gegen den Plan gegenlesen, nicht blind von vorne anfangen.

## Praktische Hinweise für Codex

- Kein Node-Build nötig. Lokal testen z. B. mit `npx serve .` oder `python -m http.server` im Projektordner, dann `hoelle.html` etc. im Browser öffnen.
- Bildpfade in Unterseiten-CSS sind relativ zur jeweiligen Seite (bei Unterordnern wie `klassen/` mit `../img/`).
- Vor jedem `git checkout`/`reset`/`clean` erst `git status` prüfen — es liegen aktuell uncommittete Änderungen vor (siehe oben), die nicht verloren gehen dürfen.
- Für Video-Hover-artige Features: `dispatchEvent(new MouseEvent(...))` in Tests reicht nicht, um Autoplay zu triggern (Browser-Policy) — echte Nutzerinteraktion nötig, das ist kein Bug im Code.
