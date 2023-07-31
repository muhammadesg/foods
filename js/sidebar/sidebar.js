let side_item = document.querySelectorAll('.sidebar__item')
let sidebar_img = document.querySelectorAll('.sidebar__image')

side_item.forEach((item) => {
    item.addEventListener('click', () => {
        
        side_item.forEach(item => {
            item.classList.remove('side-active')
        })   
        item.classList.add('side-active')
        
    })
})

let side_1 = document.querySelector('.side-1')
let side_2 = document.querySelector('.side-2')
let side_7 = document.querySelector('.side-7')
let side_8 = document.querySelector('.side-8')

let order = document.querySelector('.order')
let profil = document.querySelector('.profil')
let functionBanner = document.querySelector('.function')
let information = document.querySelector('.information')
let orderHistory = document.querySelector('.order-history')

let overlay = document.querySelector('.overlay')

side_1.onclick = () => {
    functionBanner.classList.add('function-right-active')
    order.classList.remove('order-right-active')
    profil.classList.remove('profil-right-active')
    information.classList.remove('information-right-active')
    orderHistory.classList.remove('order-history-right-active')
    overlay.classList.add('overlay-right-active')
}

side_2.onclick = () => {
    functionBanner.classList.remove('function-right-active')
    order.classList.remove('order-right-active')
    profil.classList.remove('profil-right-active')
    information.classList.remove('information-right-active')
    orderHistory.classList.remove('order-history-right-active')
    overlay.classList.remove('overlay-right-active')
}

side_7.onclick = () => {
    order.classList.add('order-right-active')
    functionBanner.classList.remove('function-right-active')
    profil.classList.remove('profil-right-active')
    information.classList.remove('information-right-active')
    orderHistory.classList.remove('order-history-right-active')
    overlay.classList.add('overlay-right-active')
}

side_8.onclick = () => {
    profil.classList.add('profil-right-active')
    functionBanner.classList.remove('function-right-active')
    order.classList.remove('order-right-active')
    information.classList.remove('information-right-active')
    orderHistory.classList.remove('order-history-right-active')
    overlay.classList.add('overlay-right-active')
}

let InfoPage = document.querySelector('#info_page')
let orderHspage = document.querySelector('#order-hs-page')

InfoPage.onclick = () => {
    information.classList.add('information-right-active')
    orderHistory.classList.remove('order-history-right-active')
    functionBanner.classList.remove('function-right-active')
    overlay.classList.add('overlay-right-active')
}

orderHspage.onclick = () => {
    orderHistory.classList.add('order-history-right-active')
    profil.classList.remove('profil-right-active')
    information.classList.remove('information-right-active')
    overlay.classList.add('overlay-right-active')
}

// function name() {
//     sidebar_img.forEach((item) => {    
         
//         item.classList.add('side-active-img')
//     })
// }
 // sidebar_img.forEach(it => {
    //     item.addEventListener('click', () => {
    //         item.classList.toggle('side-active')
    //         it.classList.toggle('side-active-img')
    //     })
    // })