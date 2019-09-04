// header fill when scroll
const header = document.querySelector('.header');
const indexHeaderTitle = document.querySelector('.header-nav-title-index');

// listen for window scroll
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 60) {
    // apply visibility if header is filled
    header.classList.add('fill');

    // make header title visible on index page
    indexHeaderTitle
      ? (document.querySelector('.header-nav-title-index').style.visibility = 'visible')
      : null;
  } else if (window.pageYOffset < 60) {
    // remove visibility if header if filled
    header.classList.remove('fill');

    // remove header title visiblity on index page
    indexHeaderTitle
      ? (document.querySelector('.header-nav-title-index').style.visibility = 'hidden')
      : null;
  }
});

// hamburger menu for mobile
const hamburgerButton = document.querySelector('.header-nav-hamburger');
const navigation = document.querySelector('.header-nav-list');
let isMobileMenuOpen = false;

hamburgerButton.addEventListener('click', () => {
  // open mobile menu or close it based on menu state
  if (!isMobileMenuOpen) {
    document.querySelectorAll('.header-nav-hamburger-line').forEach(line => {
      line.classList.add('open');
    });

    navigation.classList.add('open');

    isMobileMenuOpen = true;
  } else if (isMobileMenuOpen) {
    document.querySelectorAll('.header-nav-hamburger-line').forEach(line => {
      line.classList.remove('open');
    });

    navigation.classList.remove('open');

    isMobileMenuOpen = false;
  }
});

// services page for opening and closing service items
const moreInfoButton = document.querySelectorAll('.services-item-button');
const closeMoreInfoButton = document.querySelectorAll('.services-item-button-close');
let isMoreInfoOpen = false;

// add event listener to each more info buttno
moreInfoButton.forEach(button => {
  button.addEventListener('click', openMoreInfo);
});

// add event listener to each close more info button
closeMoreInfoButton.forEach(button => {
  button.addEventListener('click', closeMoreInfo);
});

// opening more info
function openMoreInfo() {
  // close previouly opened service item
  if (isMoreInfoOpen) {
    document.querySelectorAll('.services-item').forEach(div => {
      if (div.classList.contains('open')) {
        div.classList.remove('open');
      }
    });

    closeMoreInfoButton.forEach(button => {
      if (button.classList.contains('open')) {
        button.classList.remove('open');
      }
    });

    document.querySelectorAll('.services-item-more-info').forEach(div => {
      if (div.classList.contains('open')) {
        div.classList.remove('open');
      }
    });

    moreInfoButton.forEach(button => {
      if (button.classList.contains('open')) {
        button.classList.remove('open');
      }
    });

    isMoreInfoOpen = false;
  }

  // open seleced service item
  this.classList.add('open');
  this.nextElementSibling.classList.add('open');
  this.parentNode.classList.add('open');
  this.parentNode.lastElementChild.classList.add('open');

  isMoreInfoOpen = true;

  // scroll service item into view
  this.parentNode.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// close specific service item
function closeMoreInfo() {
  this.classList.remove('open');
  this.previousElementSibling.classList.remove('open');
  this.parentNode.classList.remove('open');
  this.parentNode.lastElementChild.classList.remove('open');

  isMoreInfoOpen = false;

  // scroll to top
  document.querySelector('.services-flex-container').scrollIntoView({
    behavior: 'smooth'
  });
}
