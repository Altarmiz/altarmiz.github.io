// Lets create some spans inside '.animated-bg' div

// first, select all the div with class '.animated-bg'
const animatedBg = document.querySelectorAll('.animated-bg')

// Now, run a foreach loop and create + append those spans inside every selected div
animatedBg.forEach(bg => {
  // lets parse the value from the 'data-amount' attribute
  amount = parseInt(bg.getAttribute('data-amount'))

  // now run a 'for loop', to create a span every time and append it into the current div
  for (let i = 0; i < amount; i++) {
    const span = document.createElement('span')
    bg.appendChild(span)
  }
})
