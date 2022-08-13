const animatedBg = document.querySelectorAll('.animated-bg')

animatedBg.forEach(bg => {
  amount = parseInt(bg.getAttribute('data-amount'))

  for (let index = 0; index < amount; index++) {
    const span = document.createElement('span')

    bg.appendChild(span)
  }
})

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Btn Clicked')
  })
})
