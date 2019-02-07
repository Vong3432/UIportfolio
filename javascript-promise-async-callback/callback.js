
const posts = 
[
    { title:'Post one',body:'This is post one'},
    { title:'Post two',body:'This is post two'}
];

function createPost(post,callback){
    setTimeout(()=>{        
        posts.push(post);        
        callback();
    },1000);
}

function getPost(){
    setTimeout(()=>{
        let output = '';        
        posts.forEach((i) => {
            output += `<li>${ i.title }</li>`
        })
        document.write(output);
    },1000);
}

createPost({title:'Post three',body:'This is post three'},getPost);
