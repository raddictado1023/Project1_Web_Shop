// <!-- Initialize Swiper -->
 
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// to make menu icon resposive and active
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
  