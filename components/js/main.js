// ERTRIM'S WORK

const openBtn = document.getElementById('openNav')
const closeBtn = document.getElementById('closeNav')
const menu = document.querySelector('.links')


openBtn.addEventListener('click', function(){
    menu.style.width = "100%"
    document.body.style.overflowY = "hidden"
})

closeBtn.addEventListener('click', function(){
    menu.style.width = 0
    document.body.style.overflowY = "visible"
})