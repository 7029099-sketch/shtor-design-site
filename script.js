const b=document.querySelector('.menu'),n=document.querySelector('.nav');b?.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o))});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b?.setAttribute('aria-expanded','false')}));const f=document.querySelector('#leadForm');f?.addEventListener('submit',e=>{e.preventDefault();f.querySelector('.status').textContent='Форма готова. Следующим шагом подключим отправку заявки в Telegram/CRM.'});
const galleryButtons=[...document.querySelectorAll('.gallery-filter')];
const galleryCards=[...document.querySelectorAll('.project-card')];
galleryButtons.forEach(btn=>btn.addEventListener('click',()=>{
  galleryButtons.forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const filter=btn.dataset.filter;
  galleryCards.forEach(card=>{
    card.classList.toggle('is-hidden',filter!=='all'&&card.dataset.category!==filter);
  });
}));
