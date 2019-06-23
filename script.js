function generateMenu(){
  return `<img class="close-icon" src="img/close-icon.png" alt="Green square close menu icon with x in the middle">
  <ul class="menu-list">
  <li class="contact"><a class="menu-item" href="#contact">Contact</a></li>
  <li class="project"><a class="menu-item" href="#projects">Projects</a></li>
  <li class="about"><a class="menu-item" href="#about">About</a></li>
</ul>`
}

function openMenu() {
  $('.ham-menu').on('click', '.menu-icon', function(event){
    $('.ham-menu').html(generateMenu());
  });
}

function generateMenuIcon(){
  return `<img class="menu-icon" src="img/hamburger-menu-icon.png" alt="Hamburger menu icon shaped like a cheeseburger">`
}

function closeMenu(){
  $('.ham-menu').on('click', '.close-icon', function(event){
    $('.ham-menu').html(generateMenuIcon());
  });
}

function animateScroll(){
  $('.navbar').on('click', '.ham-menu .menu-list li .menu-item', function(event){
    var jump = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(jump).offset().top }, 500);
});
}

function callListeners() {
  openMenu();
  closeMenu();
  animateScroll();
}

$(callListeners());

