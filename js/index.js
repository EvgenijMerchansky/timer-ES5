// search elems
var btn = document.getElementById('btn');
var bigArrow = document.getElementById('bigArrow');
var smallArrow = document.getElementById('smallArrow');

var time = 0;
var run = 0;
var rotateBig = 0;
var rotateSmall = 0;

// start function
function start() {
  if(run == 0){
    run = 1;
    increment();
  }else{
    run = 0;
  }
}

// increment function
function increment() {
  if(run == 1){
    setTimeout(function(){
      time++;
      rotateBig += 0.6;
      rotateSmall += 0.01;
      bigArrow.style.transform = "rotate(" + rotateBig + "deg)";
      smallArrow.style.transform = "rotate(" + rotateSmall + "deg)";
      var min = Math.floor(time/10/60);
      var sec = Math.floor(time/10);
      if(min < 10){
        min = '0' + min;
      }
      if(sec < 10){
        sec = '0' + sec;
      }
      document.getElementById('counter').innerHTML = min + ":" + sec;
      increment();
    }, 100)
  }else{
    alert(Math.floor(time/10/60) + ' minutes , ' + Math.floor(time/10) + ' seconds');
  }
}

// listener
btn.addEventListener('click', function() {
  start();
})
