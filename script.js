const Menu = (e) => {
    const list = document.querySelector("ul")
    e.name === 'menu-outline' ? (e.name = 'close', list.classList.add('top-[80px]'), list.classList.add('opacity-100'))
  :(e.name = 'menu', list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

var loader;

function loadnow() {
  if(opacity <=0){
    displayContent();
  }
  else{
     loader.style.opacity = opacity;
     window.setTimeout (function() {
       loadnow(opacity - 0.05)
     },50);
  }
}

function displayContent(){
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function(){
  loader = document.getElementById('loader');
  loadnow(1)
})