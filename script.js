const toggle = document.getElementById('langToggle');
let currentLang = 'ko';

function applyLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ko]').forEach(el => {
    const text = el.dataset[lang];
    if(text) el.textContent = text;
  });
  toggle.textContent = lang === 'ko' ? 'EN' : 'KO';
  currentLang = lang;
}

toggle?.addEventListener('click', () => {
  applyLanguage(currentLang === 'ko' ? 'en' : 'ko');
});

applyLanguage('ko');
