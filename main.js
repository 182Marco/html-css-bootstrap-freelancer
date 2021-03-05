// variabili del menu mobile

var hanburger = document.querySelector('#hamburger');
var mobileLinkList = document.querySelector('#mobileLinkList');
var mobLink = document.querySelectorAll('.mobLink');

mobileLinkList.style.display = 'none';

// funzioni del menu mobile
hanburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (mobileLinkList.style.display == 'none') {
    mobileLinkList.style.display = 'block';
  } else {
    mobileLinkList.style.display = 'none';
  }
}

var i;

for (i = 0; i < mobLink.length; i++) {
  mobLink[i].addEventListener(
    'click',
    () => (mobileLinkList.style.display = 'none')
  );
}
