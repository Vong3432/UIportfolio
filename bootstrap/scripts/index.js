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
        top:element.offsetTop
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