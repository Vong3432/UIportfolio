
const signupButton = document.getElementById('signup-btn');
const galleryTab = document.getElementById('gallery');
const addFriendBtn = document.getElementById('addButton');
const theUsername = "John Doe";
const userProfileImg = "images/profile.jpg";

let galleryPosition = document.getElementById('galleryRow');
let status = false;

signupButton.addEventListener('click',()=>{
    window.location.assign('signup.html');
})

galleryTab.addEventListener('click',()=>{
    scrollTo(galleryRow)
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
        addFriendBtn.innerText = "Add as friend";
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
    // let profile = createSmallProfile('profileIMG','../images/profile.jpg','profile__img');

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

function combineUserInfo(userimage,name)
{
    let userInfo = document.createElement('div');
    userInfo.className = "d-flex align-content-center";

    let userImg = document.createElement('img');
    userImg.src = userimage;
    userImg.className ='mr-3 small-profileImage';

    let userName = document.createElement('h4');
    userName.innerText = name;
    userName.className = "text-primary";

    userInfo.appendChild(userImg);
    userInfo.appendChild(userName);

    return userInfo;
}

function createNewPost(text, image)
{
    let newPost = document.createElement('div');
    newPost.className = "card mb-2";

    let postBody = document.createElement('div');
    postBody.className = "card-body";    

    let postBodyParagraph = document.createElement('p');
    postBodyParagraph.className = "my-3";
    postBodyParagraph.innerText = text;

    let postBodyImage = document.createElement('img');
    postBodyImage.src = image;
    postBodyImage.className = "thread-image";

    
    postBody.appendChild(combineUserInfo(userProfileImg,theUsername));
    postBody.appendChild(postBodyParagraph);
    postBody.appendChild(postBodyImage);    

    newPost.appendChild(postBody);
    newPost.appendChild(actionTabsOfPost());
    document.getElementById('threads').appendChild(newPost);

}

function actionTabsOfPost()
{
    let container = document.createElement('div');
    container.className = "container mx-auto my-3";

    let row = document.createElement('div');
    row.className = "row action-tabs";

    let likeTab = document.createElement('div');
    likeTab.className = "col-10 col-md-3 mx-auto bg-light text-center py-2 my-2";
    likeTab.innerText = "Like";

    let commentTab = document.createElement('div');
    commentTab.className = "col-10 col-md-3 mx-auto bg-light text-center py-2 my-2";
    commentTab.innerText = "Comment";

    let donateTab = document.createElement('div');
    donateTab.className = "col-10 col-md-3 mx-auto bg-self-secondary text-center text-white py-2 my-2";
    donateTab.innerText = "Donate";
    
    row.appendChild(likeTab);
    row.appendChild(commentTab);
    row.appendChild(donateTab);

    container.appendChild(row);

    return container;
}


document.getElementById('galleryRow').onclick = e =>
{        
    let target = e.target;   
    let galleryCard,paragraph,imageSrc = "";

    galleryCard = target.closest('div');

    if( galleryCard )
    {
        paragraph = galleryCard.querySelector("p").textContent;        
        
        if( imageSrc = galleryCard.querySelector("img") )
            imageSrc = galleryCard.querySelector("img").src;

        else
            imageSrc = galleryCard.parentNode.querySelector("img").src;
        
    }        
    
    console.log(galleryCard)
    console.log(paragraph)
    console.log(imageSrc);
};

