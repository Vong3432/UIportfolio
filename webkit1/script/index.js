var heroImage = new Image();
var hero = document.getElementById('HeroSection');
var images = "images/hero-image.jpg";

heroImage.onload = () =>{
    hero.src = this.src;
};

heroImage.src = images;