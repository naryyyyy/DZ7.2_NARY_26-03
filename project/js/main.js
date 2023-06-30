// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => javaScript.style.color = event.target.innerHTML
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)
//modal
const modal=document.querySelector('.modal')
const modalTrigger=document.querySelector('#btn-get')
const closeModalButton=document.querySelector('.modal_close')

const openModal=()=>{
    modal.style.display='block'
    document.body.style.overflow='hidden'
}
setTimeout(() => {
    openModal();
  }, 10000);


function Scroll() {
    const windowHwHeight = window.innerHeight;
    const bodyLessonsHeight = document.body.offsetHeight;
    const scrollLessonsTop = window.pageYOffset.document.documentElement.scrollTop .document.body.scrollTop;
    return (scrollLessonsTop + windowHwHeight) >= (bodyLessonsHeight);
}
function handleScrollEnd() {
    openModal()
}
window.addEventListener('scroll', function() {
    if (isScrollAtBottom()) {
        handleScrollEnd();
    }
});
const closeModal=()=>{
    modal.style.display='none'
    document.body.style.overflow=''
}
modalTrigger.onclick=()=>openModal()
closeModalButton.onclick=()=>closeModal()
modal.onclick=(event)=>{
    if(event.target===modal){
        closeModal()
    }
}
//const obj={
//    name:'Nurdin',
//    age:19
//}
//const data=JSON.stringify(obj)
//const objNew=JSON.parse(obj)
//console.log(objNew);
//console.log(data);
//console.log(obj);
//console.log(JSON);


//let a='hello'
//let b=a=10
//console.log(b);

//const objJ={
 //   name:'John'
//}
//const objRose={...objJ}
//objRose.name='Rose'
//const array1=[1, 2, 3]
//const array2={...array1}
//array2[0]='hello'
//console.log(array2);
//console.log(array1);

