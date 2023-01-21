const posts=[
    {title:'one post',body:'this is post one',createdAt:new Date().getTime()},
    {title:'two post',body:'this is post two',createdAt:new Date().getTime()}   
]
let intervalId=0;
function getPosts(){
   clearInterval(intervalId)
   intervalId=setInterval(() =>{
        let output='';
      posts.forEach((post) =>{
        output+= `<li>${post.title}-last updated ${(new Date().getTime()-post.createdAt) /1000} seconds ago</li>`
      })  
      document.body.innerHTML=output; 
    },1000);
   
}
function createPost(post,callback){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000)
}
createPost({title:'post three',body:'this is post three',createdAt:'time'},getPosts);
function createAnotherPost(post,callback){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000)
}
createAnotherPost({title:'post four',body:'this is post four',createdAt:'time'},getPosts);