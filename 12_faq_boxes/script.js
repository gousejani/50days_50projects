// const displayButtons = document.querySelectorAll('.fa-chevron-down');
// const closeButtons = document.querySelectorAll('.fa-times');
// displayButtons.forEach(button=>{
//   button.addEventListener('click',()=>{
//     button.parentNode.parentNode.classList.add('active')
//   })
// })

// closeButtons.forEach(button=>{
//   button.addEventListener('click',()=>{
//     button.parentNode.parentNode.classList.remove('active')
//   })
// })

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
  toggle.addEventListener('click',()=>{
    toggle.parentNode.classList.toggle('active')
  })
})