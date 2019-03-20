const galleryTab = document.getElementById('gallery');
const addFriendBtn = document.getElementById('addButton');
let galleryPosition = document.getElementById('galleryPos');
let status = false;

galleryTab.addEventListener('click',()=>{
    scrollTo(galleryPosition)
});

function scrollTo(element){
    window.scroll({
        behavior:'smooth',
        left:0,
        top:element.offsetTop - 100
    });
}


addFriendBtn.addEventListener('click',()=>{
    if(status === false )
    {
        addFriendBtn.innerText = "Sent";
        addFriendBtn.style.opacity = 0.8;
        status = true;
    }

    else
    {
        addFriendBtn.innerText = "Add friend";
        addFriendBtn.style.opacity = 1;
        status = false;
    }
});

$(window).scroll(function(){
    let windowPosition = $(window).scrollTop();
    let hitpoint = windowPosition;
    // let functionTabsBar = document.getElementById('functionTabs').offsetTop;    
    // let profile = document.createElement('img');
    // profile.id = 'profileIMG'
    // profile.src = '../images/profile.jpg';
    // profile.className = 'profile__img';
    let profile = createSmallProfile('profileIMG','../images/profile.jpg','profile__img');

    if( hitpoint > document.getElementById('functionTabs').offsetTop + 150)
    {
        // $('#functionTabs').addClass('sticky-top');
        $('.navbar').addClass('sticky-top');
        // $('#functionTabs .container').removeClass('py-sm-4');
        // $('#functionTabs .container').addClass('py-sm-2');        
    }

    else
    {
        // $('#functionTabs .container').removeClass('py-sm-2');
        // $('#functionTabs .container').addClass('py-sm-4');
        $('.navbar').removeClass('sticky-top');
    }

    hitpoint = $('#functionTabs').scrollTop;

});

function createSmallProfile(id, src, className){
    let smallProfile = document.createElement('img'); 
    smallProfile.id = id;
    smallProfile.src = src;
    smallProfile.className = className;
    return smallProfile;
}