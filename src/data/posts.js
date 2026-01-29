export const posts = [
  {
    slug: 'react-einfuehrung',
    title: 'Einführung in React',
    date: '2024-01-15',
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
    date: '2024-01-20',
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
    date: '2024-01-25',
    excerpt: 'useState, useEffect und mehr – alles über Hooks...',
    content: `
      Hooks wurden in React 16.8 eingeführt und erlauben es,
      State und andere React-Features in Funktionskomponenten zu nutzen.

      Die wichtigsten Hooks sind useState für lokalen State,
      useEffect für Seiteneffekte und useRef für DOM-Zugriff.
    `
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}