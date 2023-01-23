console.log('person1:Shows Ticket');
console.log('person2:Shows Ticket');
const getTickets=
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
       
    })

const getPopcorn=getTickets.then((t)=>{
    console.log('Wife: I got Tickets');
    console.log('Husband: Lets get in');
    console.log('Wife: No i am hungry ');
    return new Promise((resolve,reject)=>resolve(`${t} Popcorn`));
})
const getButter=getPopcorn.then((t)=>{
    console.log('Husband:Lets go');
    console.log('Wife: I need Butter on my popcorn');
    return new Promise((resolve,reject)=> resolve(`${t} Butter`));
})
const getcolddrink=getButter.then((t)=>{
    console.log('Husband:Anything Else');
    console.log('Wife:I need cold drinks');
    return new Promise((resolve,reject)=>resolve(`${t}cold drink`))
})
getcolddrink.then((t)=> console.log(`${t}`))
console.log('person4:Shows Ticket');
console.log('person5:Shows Ticket');