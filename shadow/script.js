const insetBtn = document.getElementById('insetBtn')
const preview = document.querySelector('.preview')
const labels = document.querySelectorAll('label')

let insetValue = false

// set default value from html inputs
apply()

value1.addEventListener('input', e => {
  apply()
  labels[0].innerHTML = value1.value
})
value2.addEventListener('input', e => {
  apply()
  labels[1].innerHTML = value2.value
})
value3.addEventListener('input', e => {
  apply()
  labels[2].innerHTML = value3.value
})
value4.addEventListener('input', e => {
  apply()
  labels[3].innerHTML = value4.value
})
color.addEventListener('input', e => {
  apply()
  labels[4].innerHTML = color.value
})

labels[5].innerHTML = insetValue
insetBtn.addEventListener('click', e => {
  if (insetValue) {
    insetValue = false
    apply()
  } else {
    insetValue = true
    apply()
  }
  labels[5].innerHTML = insetValue
})

function apply() {
  if (insetValue) {
    preview.style.boxShadow = `${value1.value}px ${value2.value}px  ${value3.value}px ${value4.value}px ${color.value} inset`
    textArea.innerHTML = `box-shadow: ${value1.value}px ${value2.value}px ${value3.value}px ${value4.value}px ${color.value} inset`
  } else {
    preview.style.boxShadow = `${value1.value}px ${value2.value}px  ${value3.value}px ${value4.value}px ${color.value}`
    textArea.innerHTML = `box-shadow: ${value1.value}px ${value2.value}px ${value3.value}px ${value4.value}px ${color.value}`
  }
}

textArea.addEventListener('click', () => {
  textArea.select()
  document.execCommand('copy')
})
