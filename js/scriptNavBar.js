

const overlay = document.querySelector('.overlay');
document.querySelector(".btnNav").addEventListener("click", function() {
    document.querySelector(".navBarVertical").classList.toggle("active");
    overlay.style.opacity = "0.5";
    overlay.style.top = "0";
  });
  

  
  document.querySelector('.navBarVertical').addEventListener('click', function(e) {
    if (e.target.classList.contains('button')) {
      console.log('Clic en opción:', e.target.textContent);
      document.querySelector('.navBarVertical').style.top = '-100%';
    }
  });


  document.addEventListener('click', function(e) {
    const navBar = document.querySelector('.navBarVertical');
    const btnNav = document.querySelector('.btnNav');
    if (e.target === btnNav) {
      navBar.style.top = "0";
      overlay.style.opacity = "0.5";
      overlay.style.top = "0";
    } else if (!navBar.contains(e.target)) {
      navBar.style.top = '-100%';
      overlay.style.opacity = "0";
      overlay.style.top = "-100%";
    }
  });