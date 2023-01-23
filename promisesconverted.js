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
async function create(post){

const createPost=
    await new Promise((resolve,reject)=>{

        setTimeout(() =>{

            posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
            if(!error)
                resolve();
            else{
                reject('something went wrong');
            }
            
        },1000)
    })
   return createPost;
}


const user={
    name:'sumanth',
    lastActivity:new Date().getTime()
}
console.log('before adding');

function updatelastUserActivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            user.lastActivity=new Date().getTime();
            resolve(user.lastActivity);
        },1000)
    })
}








// Promise.all([create(),updatelastUserActivitytime(),dele()]).then(([createPostresolves,updatelastUserActivitytimeresolves,deleted])=>{
//     console.log(updatelastUserActivitytimeresolves)
        
// }).catch(err=>console.log(err))
// console.log(posts);

async function dele(){
 const deletePost=
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(posts.length>0)
            resolve(posts.pop());
           else{
            reject('Array is empty');
           }
        },1000);
    })
  return deletePost;
}

create({title:'post three',body:'this is post three'}).then(()=>{
    getPosts();
    dele().then(()=>{
        getPosts();
    })
})

// createPost({title:'post three',body:'this is post three'}).then(()=>{
//     getPosts();
//     deletePost().then((deletedelement)=>{
//           console.log(deletedelement);
//           getPosts();
//         deletePost().then((deletedelement)=>{
//             console.log(deletedelement);
//             getPosts();
//            deletePost().then((deletedelement)=>{
//                console.log(deletedelement);
//                getPosts();
//               deletePost().then(()=>{}).catch(err=>{console.log('array is empty')})
//         })
//         })
//     })
// }).catch(err=>{console.log('array is empty')});

