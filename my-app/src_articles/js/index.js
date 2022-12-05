const articles = [
 {
  title: 'Title 1',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 },
 {
  title: 'Title 2',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 },
 {
  title: 'Title 3',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 },
 {
  title: 'Title 4',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 }
];

window.addEventListener('load', () => {
 // for( let i=0;i< articles.length; i+=1) { ... }
 // for (const article of articles) { ... }
 articles.forEach(article => {
  const a = document.createElement('article');

  const title = document.createElement('h5');
  title.innerText = article.title;
  a.appendChild(title);

  const description = document.createElement('span');
  description.innerText = article.description;
  a.appendChild(description);

  const content = document.createElement('span');
  content.innerText = article.content;
  a.appendChild(content);

  const container = document.getElementById('container');
  container.appendChild(a);
 });
});