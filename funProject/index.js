let heartBeat = document.querySelector(".heartBeat");
let stop = document.querySelector('button')

let intervaId = null;

heartBeat.addEventListener('click', ()=>{
   if(!intervaId){
        intervaId = setInterval(() => {
        heartBeat.classList.toggle('animation')
    }, 500);
   }

   stop.addEventListener('click', ()=>{
    if(intervaId){
        clearInterval(intervaId)
        intervaId = null
    }
   })
})

// heartBeat.addEventListener('click', ()=>{
//     heartBeat.classList.toggle('animation')
// })



