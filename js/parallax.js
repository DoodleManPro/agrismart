let paraClassLeft = document.getElementById('paraLeft')
let paraClassLeft2 = document.getElementById('paraLeft2')
let paraClassRight = document.getElementById('paraRight')


window.addEventListener('scroll', () => {
    console.log('scrolling')
    let value = window.scrollY;

    paraClassLeft.style.marginLeft = value * -1.4 + 'px'
    paraClassLeft2.style.marginLeft = value * -1 + 'px'
    paraClassRight.style.marginRight = value * -1.4 + 'px'
})

console.log('crazy')