function onMouseMove(event, end) {
    const eyes = document.getElementsByClassName("eye");
    for (let i in eyes) {
      const eye = eyes[i];
      if (eye.style) {
        if (end) {
          eye.style.transform = "rotate(190deg)";
        } else {
          const { x, y, width, height } = eye.getBoundingClientRect();
          const left = x + width / 2;
          const top = y + height / 2;
          const rad = Math.atan2(event.pageX - left, event.pageY - top);
          const degree = rad * (180 / Math.PI) * -1 + 180;
          eye.style.transform = "rotate(" + degree + "deg)";
        }
      }
    }
  }

  
function random(num) {
    return Math.floor(Math.random()*num)
  }
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5)+5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `
  }
  
  function createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container")
    for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();           balloonContainer.append(balloon);
    }
  }
  
  window.onload = function() {
    createBalloons(100);
  }