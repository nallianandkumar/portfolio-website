const bar = document.getElementById('bars');
const cls = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
bar.addEventListener('click', ()=> {
    nav.classList.add('active');
})

}
if (cls){
    cls.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
    }


   