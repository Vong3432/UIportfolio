
const posts = 
[
    { title:'Post one',body:'This is post one'},
    { title:'Post two',body:'This is post two'}
];

function createPost(post,callback){
    return new Promise((resolve,reject) => {
        setTimeout( () => {        
            posts.push(post);        
            const error = false;

            if(!error)
            {
                resolve();
            }
            else
                reject('Error:Something went wrong');

        },1000);   
    });    
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

// promise each time
createPost({title:'Post three',body:'This is post three'})
    .then(getPost)
    .catch(err => console.log(err));
;

// promise.all
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
    setTimeout(resolve,2000,'Goodbye'));

    Promise.all([promise1,promise2,promise3]).then( (values) =>{
        console.log(values)
    });

