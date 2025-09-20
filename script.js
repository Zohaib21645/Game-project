var timer = 60;
var score = -10;
var hitrn = 0;
function increasescore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble(){
    var clutter ="";

for( var i =1; i < 150; i++ ){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="buble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
   var timerint = setInterval(function(){
       
        if(timer>0){ 
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Dobara Khel Pyary</h1>`
        }
    }, 1000)
}
document.querySelector("#pbtm")
.addEventListener("click", function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitrn){
    increasescore();
    makeBubble();
    gethit();
   }
})
runTimer();
makeBubble();
gethit();
increasescore();
