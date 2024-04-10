const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button ) => {
  // console.log(` button in loop${button.id}`)

  // button.onclick = () => {
  //   var color = button.id;
  //   console.log(color)
  //   body.style.backgroundColor = color
  // }

  button.addEventListener('click' , (e) => {
      var color = e.target.id;
      console.log(color)
      body.style.backgroundColor = color
  })
})
