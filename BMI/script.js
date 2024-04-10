const form = document.querySelector('form')
console.log(`form ${ form }`)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height  = parseInt(document.querySelector('#height').value);
  const weight  = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  console.log(`height ${ height } ${weight}`)

  if (height === '' || height <= 0 || isNaN(height)){
   result.innerHTML = ` Enter Valid Height ${height}`
  } else if (weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML = ` Enter Valid weight ${weight}`
  } else {
     const bmi = (weight/ ((height*height) /10000)).toFixed(2)
     result.innerHTML = `<span>${bmi}</span>`

  }
  
})
