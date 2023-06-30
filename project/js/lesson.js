// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'YOUR NUMBER IS VALID!'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'YOUR NUMBER IS NOT VALID'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
const tabContent = document.querySelectorAll('.tab_content_block')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent=(i=0)=>{
    tabContent[i].style.display='block'
    tabs[i].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent(0)
tabsParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i)=>{
            if(event.target===item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}



const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoSlider()
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


const city=document.querySelector('.city')
const temp=document.querySelector('.temp')
const btn=document.querySelector('#btn')
const apiKey= 'e417df62e04d3b1b111abeab19cea714'
 const citySearch=()=>{
    const cityName=document.querySelector('.cityName')
    cityName.oninput=(event)=>{
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${apiKey}`)
        .then(response=>response.json())
        .then(
             data=>{city.innerHTML=data?.name ||'Город не найден'
             temp.innerHTML= data?.main?.temp?Math.round(data?.main?.temp-273)+'&deg;C':'....'
            
        })
    }
    
 }

 citySearch()