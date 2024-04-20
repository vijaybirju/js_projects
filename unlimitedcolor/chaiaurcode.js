const startColorChange = document.querySelector('#start',);
const stopColorChange = document.querySelector('#stop');
const hex = '0123456789ABCDEF';

const randomColor = function () {
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color 
}

let intervalID
const startColorChangefunc = function(){
  if (!intervalID) {
    intervalID = setInterval(changebgcolor,1000)
  }
  function changebgcolor() {
    document.body.style.backgroundColor = randomColor()}
}
const stopColorChangefunc = function(){
  clearInterval(intervalID)
  intervalID = null

}

startColorChange.addEventListener('click',startColorChangefunc)
stopColorChange.addEventListener('click',stopColorChangefunc)
