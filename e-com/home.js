var category = document.getElementById('categoryBar'); 
var navbar = document.getElementById('topNav');
var categoryPos = category.offsetTop;  

window.onscroll = () => {
    
    navBarState();

}

function navBarState()
{
    var currentPos = $(window).scrollTop();        
    if(currentPos >= categoryPos)
    {
        $(".top-nav").addClass('sticky');
        $(".top-nav a").css('color','grey');        
        $("#active").css('color','#019875');
         $("#logo").css('color','#019875');
         $('.top-nav a:not(:first-child)').hover(function(){
             $(this).css('color','#019875');                          
         },function(){
            $(this).css("color", "grey");
            $("#active").css('color','#019875');
         });
    }
    else
    {
         $(".top-nav").removeClass('sticky') ;    
         $(".top-nav a").css('color','rgba(255, 255, 255, 0.7)');
         $("#active").css('color','white');
         $("#logo").css('color','white');
         $('.top-nav a:not(:first-child)').hover(function(){
            $(this).css('color','white');                          
        },function(){
           $(this).css("color", "grey");
           $("#active").css('color','white');
        });
         
    }
}

var arrowButton = document.getElementById('arrow');
arrowButton.addEventListener('click',()=>{
     window.scrollTo({
            top:categoryPos,
            behavior:"smooth",
    });
})
var current = 0;
var next = document.getElementById('next');
var slides = document.getElementsByClassName('slides');

Array.from(slides).forEach( slide =>{
    (slide == slides[0])  ? slide.style.display="block" : slide.style.display = "none";    
});


next.addEventListener('click',()=>{
    changeSlide('next');
});

function changeSlide(instruction){
    
    // if( current == -1 )
    //     current = slides.length-1;
    // else if( current == slides.length )
    //     current = 0;

    
        switch(instruction){
            case 'next': 
            {
                if( current == slides.length )
                    current = 0;                                    
                slides[++current].style.display = "block";
                console.log(current +" and "+slides.length)
                break;
            }
            case 'prev': 
            {
                if( current == -1 )
                current = slides.length-1;
                break;
            }
            default:
                current.style.display = "block";
                break;
        }
    

}
