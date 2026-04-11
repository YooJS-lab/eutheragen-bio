const buttons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

function applyLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach((el) => {
    const text = el.dataset[lang];
    if (text) el.textContent = text;
  });

  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage('en');
