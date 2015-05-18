var createdTime; var clickTime; var reactionTime; var time;

var boxElement = document.getElementById("box");

var timerElement = document.getElementById("Timer");

function getRandColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';

  for(var i = 0; i < 6; i++){
    color+=letters[Math.round(Math.random()*15)];
  }

  return color;

}

  function makeBox(){

    createdTime = Date.now();

    time=Math.random();

    time*=5000;

    boxElement.style.backgroundColor = getRandColor();

    boxElement.style.left= (Math.random()*1200) + "px";

    boxElement.style.top = (Math.random()*600) + "px";

    boxElement.style.borderRadius

    setTimeout(function() { boxElement.style.display = "block"}, time);

  }

  document.getElementById("box").onclick=function(){

    this.style.display = "none";

    clickedTime = Date.now();

    reactionTime = (clickedTime - createdTime) / 1000;

    timerElement.innerHTML = reactionTime;

    makeBox();

  }

  makeBox();
