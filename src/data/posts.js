export const posts = [
  {
    slug: 'react-einfuehrung',
    title: 'Einführung in React',
    date: '2026-01-15',
    excerpt: 'React ist eine JavaScript-Bibliothek für User Interfaces...',
    content: `
      React wurde von Facebook entwickelt und ist heute eine der beliebtesten
      Frontend-Bibliotheken. In diesem Artikel lernst du die Grundlagen.

      React verwendet eine deklarative Syntax namens JSX, die HTML-ähnlich ist
      aber JavaScript ermöglicht. Komponenten sind wiederverwendbare UI-Bausteine.
    `
  },
  {
    slug: 'react-router-guide',
    title: 'React Router verstehen',
    date: '2026-01-18',
    excerpt: 'Navigation in Single Page Applications leicht gemacht...',
    content: `
      React Router ermöglicht clientseitige Navigation in React-Apps.
      Statt die Seite neu zu laden, werden nur Komponenten ausgetauscht.

      Die wichtigsten Konzepte sind Routes, Links und der useParams Hook.
      Mit diesen Bausteinen kannst du komplexe Navigation aufbauen.
    `
  },
  {
    slug: 'hooks-erklaert',
    title: 'React Hooks erklärt',
    date: '2026-01-20',
    excerpt: 'useState, useEffect und mehr – alles über Hooks...',
    content: `
      Hooks wurden in React 16.8 eingeführt und erlauben es,
      State und andere React-Features in Funktionskomponenten zu nutzen.

      Die wichtigsten Hooks sind useState für lokalen State,
      useEffect für Seiteneffekte und useRef für DOM-Zugriff.
    `
  },
  {
    slug: 'css-flexbox-guide',
    title: 'CSS Flexbox Erklärt',
    date: '2026-01-22',
    excerpt: 'Flexbox macht das Layout in CSS viel einfacher...',
    content: `
      Flexbox ist ein CSS-Layout-System, das es einfach macht,
      Elemente horizontal oder vertikal auszurichten.

      Mit display: flex wird ein Container zum Flex-Container.
      Die Kindelemente werden dann automatisch nebeneinander angezeigt.
      Mit justify-content und align-items kann man die Ausrichtung steuern.
    `
  },
  {
    slug: 'css-grid-tutorial',
    title: 'CSS Grid Tutorial',
    date: '2026-01-23',
    excerpt: 'Erstelle komplexe Layouts mit CSS Grid...',
    content: `
      CSS Grid ist das modernste Layout-System in CSS.
      Es erlaubt es, Inhalte in Zeilen und Spalten anzuordnen.

      Mit grid-template-columns definiert man die Spalten.
      Mit grid-template-rows definiert man die Zeilen.
      Grid eignet sich besonders für komplexe Seitenlayouts.
    `
  },
  {
    slug: 'javascript-basics',
    title: 'JavaScript Grundlagen',
    date: '2026-01-24',
    excerpt: 'Die wichtigsten JavaScript-Konzepte für Anfänger...',
    content: `
      JavaScript ist die Programmiersprache des Web.
      Sie läuft direkt im Browser und braucht keine Installation.

      Wichtige Konzepte sind Variablen mit const und let,
      Funktionen, Arrays und Objekte. Diese Grundlagen
      sind unverzichtbar für das Programmieren im Web.
    `
  },
  {
    slug: 'html-semantics',
    title: 'HTML Semantik Verstehen',
    date: '2026-01-25',
    excerpt: 'Warum semantisches HTML wichtig ist...',
    content: `
      Semantisches HTML bedeutet, dass man die richtigen
      HTML-Elemente für den richtigen Zweck verwendet.

      Statt überall div zu nutzen, gibt es spezielle Elemente
      wie header, main, article und footer. Diese helfen
      Bildschirmlesern und Suchmaschinen, die Struktur zu verstehen.
    `
  },
  {
    slug: 'useeffect-erklaert',
    title: 'useEffect Hook Erklärt',
    date: '2026-01-27',
    excerpt: 'Seiteneffekte in React mit useEffect managen...',
    content: `
      useEffect ist ein React Hook für Seiteneffekte.
      Er führt Code aus, nachdem eine Komponente gerendert wurde.

      Häufige Anwendungsfälle sind API-Aufrufe, Event-Listener
      und das Laden von Daten. Der zweite Parameter kontrolliert,
      wann der Effect erneut ausgeführt wird.
    `
  },
  {
    slug: 'responsive-design',
    title: 'Responsive Design Basics',
    date: '2026-01-28',
    excerpt: 'Websites für alle Bildschirmgrößen optimieren...',
    content: `
      Responsive Design bedeutet, dass eine Website auf
      allen Geräten gut aussieht und funktioniert.

      Die wichtigsten Werkzeuge sind Media Queries, flexible
      Layouts mit Flexbox und Grid, sowie relative Einheiten
      wie Prozent und em statt fester Pixel-Werte.
    `
  },
  {
    slug: 'typescript-einfuehrung',
    title: 'TypeScript Einführung',
    date: '2026-01-29',
    excerpt: 'JavaScript mit Typen – warum TypeScript so wichtig ist...',
    content: `
      TypeScript ist eine Erweiterung von JavaScript mit
      statischer Typisierung. Das bedeutet, dass Fehler
      bereits beim Schreiben des Codes erkannt werden.

      TypeScript wird vor der Ausführung in normales
      JavaScript umgewandelt. Es ist besonders nützlich
      bei großeren Projekten, um Fehler zu vermeiden.
    `
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}