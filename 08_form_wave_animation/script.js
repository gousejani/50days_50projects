const labels = document.querySelectorAll('.form-control label');
// console.log(labels)
labels.forEach(label=>{
    // console.log(label.innerText.split('').map((letter,idx)=>`<span>${letter}</span>`).join(''))
    label.innerHTML = label.innerText
                        .split('')
                        .map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
                        .join('')
    // label.innerHTML = label.innerText.split('').map((letter,idx)=>`<span>${letter}</span>`).join('')
});