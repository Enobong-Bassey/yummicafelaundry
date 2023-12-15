var mobileNavigation = document.querySelector('#mobile-navigation');
var kawartha_writeup = document.getElementById('kawartha');

mobileNavigation.style.display = 'none';
var isShowMobileNav = true;

function showHideMobileNavigation() {
    if(isShowMobileNav) {
        mobileNavigation.style.display = 'block';
        kawartha_writeup.style.marginTop = '210px';
        isShowMobileNav = false;
    } else {
        mobileNavigation.style.display = 'none';
        kawartha_writeup.style.marginTop = '-15px';
        isShowMobileNav = true;
    }    
}

document.querySelector('#navLaunch').addEventListener('click', function() {
    const icon = this.querySelector('i');
    const text = this.querySelector('span');

    if(icon.classList.contains('fa-caret-down')) {
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }
});

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});