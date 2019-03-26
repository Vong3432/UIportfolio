const nextBtn = document.getElementById('next-btn');
const signupButton = document.getElementById('signup-btn');


signupButton.addEventListener('click',()=>{
    window.location.assign('signup.html');
})

$('.main-section,.describe-section .container').css('opacity',0);

nextBtn.addEventListener('click',e=>{
    if( e.target.closest('.main-section') )
        scrollTo(describeSection);
    
});

$( document ).ready(function() {
    $('.main-section').animate({
        "opacity":"1"
    },3000)  
});


$(window).scroll(function(){
    let windowPosition = $(window).scrollTop();
    let hitpoint = windowPosition;
    // let functionTabsBar = document.getElementById('functionTabs').offsetTop;    
    // let profile = document.createElement('img');
    // profile.id = 'profileIMG'
    // profile.src = '../images/profile.jpg';
    // profile.className = 'profile__img';
    // let profile = createSmallProfile('profileIMG','../images/profile.jpg','profile__img');

    if( hitpoint > document.getElementById('describeSection').offsetTop )
    {
        // $('#functionTabs').addClass('sticky-top');  
        $('.navbar').addClass('sticky-top');                   
        $('.describe-section .container').animate({
            "opacity":"1"
        },3000)
        // $('#functionTabs .container').removeClass('py-sm-4');
        // $('#functionTabs .container').addClass('py-sm-2');        
    }


    else
    {
        // $('#functionTabs .container').removeClass('py-sm-2');
        // $('#functionTabs .container').addClass('py-sm-4');
        $('.navbar').removeClass('sticky-top');        
    }

    hitpoint = $('#describeSection').scrollTop;

});

function scrollTo(element)
{
    window.scroll({
        behavior:'smooth',
        left:0,
        top:element.offsetTop + 50
    });
    
}