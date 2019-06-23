function generateMenu(){
  return `<img class="close-icon" src="img/close-icon.png" alt="Green square close menu icon with x in the middle">
  <ul class="menu-list">
  <li class="contact"><a href="#contact">Contact</a></li>
  <li class="project"><a class href="#projects">Projects</a></li>
  <li class="about"><a href="#about">About</a></li>
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

function openCloseMenu() {
  openMenu();
  closeMenu();
}

$(openCloseMenu());
