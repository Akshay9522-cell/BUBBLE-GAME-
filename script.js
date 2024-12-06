
let pbtmm=document.querySelector("#pbtm")
let time=document.querySelector('#timeValue')
let hit=document.querySelector('#hitval')
let scr=document.querySelector('#scoval')
let over=`<h1 id="gameover">GAME-OVER</h1>`

let timer=60
let score1=0
var y=0;

// let b=`<button id="btn">PLAY-AGAIN</button>`







function score(){
     score1 += 10
     scr.textContent=score1
}


function hitnumber(){
     
     y=Math.floor(Math.random()*50)
    hit.textContent=y
}

function makeBubble(){
let clutter=" "

for(let i=1;i<=133;i++){

    let x=Math.floor(Math.random()*50)
     clutter += `  <div class="bubble">${x}</div>`
}

pbtm.innerHTML=clutter

}


function runTimer(){
 let clrtime=   setInterval(function(){

        if(timer>0){
            timer--;
        } else{
          clearInterval(clrtime)
          pbtmm.innerHTML=over
          
        
        
            setTimeout(function(){
              history.go(0);
        },2000) 
          
        }
       
     time.textContent=timer
    },1000)
}
runTimer()
makeBubble()
hitnumber()

pbtmm.addEventListener('click',function(eve){
   var clikednum=Number(eve.target.textContent)
        if(clikednum===y){
            score()
            makeBubble()
            hitnumber()
            

        }
})

b.addEventListener('click',()=>{
    reload()
})
  