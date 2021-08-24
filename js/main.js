// sticky nav
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbars').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

// sidebar handler
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', ()=>{
    let width = document.getElementById('sidebarArea').style.width;
    document.getElementById('sidebarArea').style.width = "230px";
});
document.getElementById('cross').addEventListener('click', ()=>{
    document.getElementById('sidebarArea').style.width = "0";
});