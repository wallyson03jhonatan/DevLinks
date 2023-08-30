function setData(link = '#', title = '', icon = '') {
  return {
    link,
    title,
    icon,
  }
}

// Hardcoded data to simulate project
const content = [
  setData(undefined, 'Inscrever-se no NLW'),
  setData(undefined, 'Baixar meu e-book'),
  setData('https://github.com/maykbrito', 'Ver meu portfólio'),
  setData('https://rocketseat.com.br', 'Conheça a rocketseat'),
];

const socialLinks = [
  setData('https://github.com/maykbrito', undefined, 'fa-github'),
  setData('https://instagram.com/maykbrito', undefined, 'fa-instagram'),
  setData('https://youtube.com/maykbrito', undefined, 'fa-youtube'),
  setData('https://linkedin.com/in/maykbrito', undefined, 'fa-linkedin'),
];

function createCards() {
  const cardList = document.getElementById('cards-list');

  content.forEach( card => {
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');

    linkItem.href = card.link;
    linkItem.textContent = card.title;

    cardList.appendChild(listItem);
    listItem.appendChild(linkItem);
  });

  return;
};

function createSocialMedias() {
  const mediasList = document.getElementById('social-links');

  socialLinks.forEach( item => {
    const linkTag = document.createElement('a');
    const iconTag = document.createElement('i');

    linkTag.href = item.link;
    linkTag.target = "_blank";

    iconTag.classList.add(item.icon);
    iconTag.classList.add('fa-brands');
    
    mediasList.appendChild(linkTag);
    linkTag.appendChild(iconTag);
  });

  return;
};

function toggleMode() {
  const html = document.documentElement;
  const image = document.querySelector('#profile img');

  html.classList.toggle('light');
  const lightMode = html.classList.contains('light');

  if (lightMode) return image.setAttribute('src', '/assets/avatar-light.png');

  return image.setAttribute('src', '/assets/avatar.png');
};

toggleMode();
createCards();
createSocialMedias();