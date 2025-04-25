
// Active nav highlighting
const page = document.body.dataset ? document.body.dataset.page : null;
if(page){
  document.querySelectorAll('nav a').forEach(a=>{
    if(a.dataset.page===page) a.classList.add('active');
  });
}
// Modal
const modal = document.getElementById('careersModal');
const openBtn = document.getElementById('careersBtn');
const closeBtn = document.getElementById('closeModal');
if(openBtn){
  openBtn.addEventListener('click',()=>modal.classList.add('show'));
  closeBtn.addEventListener('click',()=>modal.classList.remove('show'));
  window.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show');});
}
// Form
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you! We have received your request.');
    form.reset();
  });
}
