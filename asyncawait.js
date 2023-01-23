console.log('person1:Shows Ticket');
console.log('person2:Shows Ticket');
const preMovie= async()=>{
    const getTickets=
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
       
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve(`Popcorn`));
    const getButter=new Promise((resolve,reject)=>resolve(`butter`));
    const getColdDrink= new Promise((resolve,reject)=>resolve(`cold drink`));
    
    
   let [popcorn,butter,coldrink]=await Promise.all([getPopcorn,getButter,getColdDrink]);
   let ticket= await getTickets;
    console.log(`${popcorn} ${butter} ${coldrink}`)
    return ticket;
   
};
preMovie().then((m)=>console.log(`person3:Shows ${m}`));
console.log('person4:Shows Ticket');
console.log('person5:Shows Ticket');