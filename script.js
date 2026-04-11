const buttons = document.querySelectorAll('.lang-btn');

function applyLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach((el) => {
    const nextText = el.getAttribute(`data-${lang}`);
    if (nextText) el.textContent = nextText;
  });
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage('en');
