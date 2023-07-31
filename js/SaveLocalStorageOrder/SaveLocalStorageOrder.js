// 1 static data = [{}, {}]
// 2 html loop
// 3 add bosilganda cart arrayga saqlanadi => localStorage
// 4 localStorage dan cart arrayni olib cart list ko'rsatamiz


// function cartItemHTML(productItem) {
//     console.log('HTML',productItem);
//     return `<div class="foods__item" data-id="${productItem.id}">
//     <div class="foods__wrapper">
//         <div class="foods__left">
//             <div class="foods__image">
//                 <img class="product__img" src="img/products/product_img1.png" alt="">
//             </div>

//             <div class="foods__counter" data-counter>
//                 <div class="foods__minus counter__btn" data-set="-">
//                     <img src="img/minus.png" alt="">
//                 </div>
//                 <div class="foods__control"><input type="text" disabled value="1"></div>
//                 <div class="foods__plus counter__btn" data-set="+">
//                     <img src="img/plus.png" alt="">
//                 </div>
//             </div>
//         </div>

//         <div class="foods__right">
//             <h3 class="foods__subject">Spicy seasoned seafood noodles</h3>

//             <h3 class="foods__price">2.29</h3>

//             <div>
//                 <span>$</span>
//                 <h3 class="foods__price-counter">0</h3>
//             </div>
//         </div>
//     </div>

//     <div class="foods__btns">
//         <input placeholder="Order Note..." type="text">

//         <button>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M15.7325 7.26564L15.8153 7.26677C16.1229 7.2922 16.3587 7.54759 16.375 7.855L16.3671 8.02641L16.105 11.2358L15.8301 14.3678C15.7719 14.993 15.7198 15.5204 15.6749 15.9355C15.5187 17.3823 14.5796 18.2769 13.1638 18.3034C10.9578 18.3441 8.83731 18.3437 6.7781 18.2992C5.40331 18.2703 4.47805 17.366 4.32462 15.9414L4.21858 14.8918L4.03328 12.8558L3.84347 10.6217L3.62643 7.93986C3.59946 7.59578 3.84959 7.29442 4.18512 7.26676C4.49269 7.2414 4.76525 7.45483 4.82932 7.7556L4.85426 8.0014L5.05805 10.5156L5.28057 13.1215C5.38038 14.2496 5.46695 15.1626 5.53622 15.804C5.62365 16.6158 6.05115 17.0336 6.80343 17.0494C8.84654 17.0936 10.9512 17.094 13.1417 17.0535C13.9398 17.0386 14.374 16.6249 14.4633 15.7978L14.5689 14.7538C14.5998 14.4321 14.6328 14.0769 14.6678 13.691L14.8905 11.1281L15.1588 7.83954C15.1836 7.52414 15.4327 7.28238 15.7325 7.26564ZM3.10949 5.82428C2.77288 5.82428 2.5 5.54445 2.5 5.19926C2.5 4.88283 2.72929 4.62133 3.02679 4.57994L3.10949 4.57423H5.76476C6.0803 4.57423 6.35654 4.36602 6.45535 4.06604L6.47953 3.9734L6.68587 2.92106C6.86759 2.2241 7.45767 1.72787 8.14916 1.6719L8.27993 1.66663H11.7199C12.4229 1.66663 13.0436 2.12186 13.2826 2.82528L13.3228 2.96003L13.5203 3.97315C13.5822 4.29056 13.8354 4.52762 14.1417 4.5681L14.2351 4.57423H16.8905C17.2271 4.57423 17.5 4.85406 17.5 5.19926C17.5 5.51568 17.2707 5.77719 16.9732 5.81857L16.8905 5.82428H3.10949ZM11.7199 2.91667H8.27993C8.10892 2.91667 7.95691 3.01931 7.89377 3.14831L7.87235 3.20499L7.67483 4.21861C7.65067 4.34233 7.61566 4.46146 7.57093 4.57506L12.429 4.57522C12.4011 4.50434 12.377 4.43132 12.3569 4.35636L12.325 4.21836L12.1364 3.24396C12.0923 3.07489 11.9561 2.95111 11.7918 2.92281L11.7199 2.91667Z" fill="#EA7C69"/>
//             </svg>
//         </button>
//     </div>  
// </div>`
// }

// function renderCartItem(productItem) {
//     let cartItem = '';
//     let foodsItem = document.createElement('div')
//                 foodsItem.classList.add('foods__item')

//                 let foodsWrapper = document.createElement('div')
//                 foodsWrapper.classList.add('foods__wrapper')
//                 foodsItem.appendChild(foodsWrapper)

//                 let foodsLeft = document.createElement('div')
//                 foodsLeft.classList.add('foods__left')
//                 foodsWrapper.appendChild(foodsLeft)

//                 let foodsRight = document.createElement('div')
//                 foodsRight.classList.add('foods__right')
//                 foodsWrapper.appendChild(foodsRight)

//                 let foodsImageDiv = document.createElement('div')
//                 foodsImageDiv.classList.add('foods__image')
//                 foodsLeft.appendChild(foodsImageDiv)

//                 let foodsImg = document.createElement('img')
//                 foodsImg.src = `${save.image}`
//                 foodsImageDiv.appendChild(foodsImg)

//                 let foodsCounter = document.createElement('div')
//                 foodsCounter.classList.add('foods__counter')
//                 foodsLeft.appendChild(foodsCounter)

//                 let foodsMinus = document.createElement('div')
//                 foodsMinus.classList.add('foods__minus')
//                 foodsCounter.appendChild(foodsMinus)

//                 let foodsControl = document.createElement('div')
//                 foodsControl.classList.add('foods__control')
//                 foodsControl.innerHTML = `${save.counter}`
//                 foodsCounter.appendChild(foodsControl)

//                 let foodsPlus = document.createElement('div')
//                 foodsPlus.classList.add('foods__plus')
//                 foodsCounter.appendChild(foodsPlus)
                
//                 let foodsMinusImg = document.createElement('i')
//                 foodsMinusImg.classList.add('ri-subtract-fill')
//                 foodsMinus.appendChild(foodsMinusImg)

//                 let foodsPlusImg = document.createElement('i')
//                 foodsPlusImg.classList.add('ri-add-line')
//                 foodsPlus.appendChild(foodsPlusImg)

//                 let foodsSubject = document.createElement('h3')
//                 foodsSubject.classList.add('foods__subject')
//                 foodsSubject.innerHTML = `${save.name}`
//                 foodsRight.appendChild(foodsSubject)

//                 let foodsDiv = document.createElement('div')
//                 foodsRight.appendChild(foodsDiv)

//                 let foodsSpanPrice = document.createElement('span')
//                 foodsSpanPrice.innerHTML = '$'
//                 foodsDiv.appendChild(foodsSpanPrice)

//                 let foodsPrice = document.createElement('h3')
//                 foodsPrice.classList.add('foods__price')
//                 foodsPrice.innerHTML = `${save.price}`
//                 foodsDiv.appendChild(foodsPrice)

//                 let foodsDiv2 = document.createElement('div')
//                 foodsRight.appendChild(foodsDiv2)

//                 let foodsSpan = document.createElement('span')
//                 foodsSpan.innerHTML = '$'
//                 foodsDiv2.appendChild(foodsSpan)

//                 let foodsPriceCounter = document.createElement('h3')
//                 foodsPriceCounter.classList.add('foods__price-counter')
//                 foodsPriceCounter.innerHTML = '0'
//                 foodsDiv2.appendChild(foodsPriceCounter)

//                 let foodsBtns = document.createElement('div')
//                 foodsBtns.classList.add('foods__btns')
//                 foodsItem.appendChild(foodsBtns)

//                 let foodsInput = document.createElement('input')
//                 foodsInput.type = 'text'
//                 foodsInput.placeholder = 'Order Note...'
//                 foodsBtns.appendChild(foodsInput)

//                 let foodsBtn = document.createElement('button')
//                 foodsBtns.appendChild(foodsBtn)

//                 let foodsDeleteIcon = document.createElement('i')
//                 foodsDeleteIcon.classList.add('ri-delete-bin-7-line')
//                 foodsBtn.appendChild(foodsDeleteIcon)

//                 return foodsItem;
// }

const cartInner = document.querySelector('.foods__inner')
let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

console.log(cartProducts)

if (cartProducts != null ) {
    if (cartProducts.length != 0) {
        console.log('Корзина не пуста')
    // отрисовка items
    // saveLocal();
    cartProducts.forEach(item => {
        cartInner.insertAdjacentHTML("beforeend", cartItemHTML(item))
    })
    }
    
}

    function saveLocal() {
        console.log('saveLocal call')
        const cartInner = document.querySelector('.foods__inner')
        console.log(cartInner.innerHTML)
        cartInner.innerHTML = ''

            for (let save of cartProducts) {

            const cartItem = `<div class="foods__item">
                <div class="foods__wrapper">
                    <div class="foods__left">
                        <div class="foods__image">
                            <img src="${productInfo.image}" alt="">
                        </div>

                        <div class="foods__counter counter" data-counter>
                            <div class="foods__minus counter__btn" data-set="-">
                                <img src="img/minus.png" alt="">
                            </div>
                            <div class="foods__control"><input type="text" disabled value="1"></div>
                            <div class="foods__plus counter__btn" data-set="+">
                                <img src="img/plus.png" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="foods__right">
                        <h3 class="foods__subject">${productInfo.name}</h3>

                        <h3 class="foods__price">${productInfo.price}</h3>

                        <div>
                            <span>$</span>
                            <h3 class="foods__price-counter">0</h3>
                        </div>
                    </div>
                </div>

                <div class="foods__btns">
                    <input placeholder="Order Note..." type="text">

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.7325 7.26564L15.8153 7.26677C16.1229 7.2922 16.3587 7.54759 16.375 7.855L16.3671 8.02641L16.105 11.2358L15.8301 14.3678C15.7719 14.993 15.7198 15.5204 15.6749 15.9355C15.5187 17.3823 14.5796 18.2769 13.1638 18.3034C10.9578 18.3441 8.83731 18.3437 6.7781 18.2992C5.40331 18.2703 4.47805 17.366 4.32462 15.9414L4.21858 14.8918L4.03328 12.8558L3.84347 10.6217L3.62643 7.93986C3.59946 7.59578 3.84959 7.29442 4.18512 7.26676C4.49269 7.2414 4.76525 7.45483 4.82932 7.7556L4.85426 8.0014L5.05805 10.5156L5.28057 13.1215C5.38038 14.2496 5.46695 15.1626 5.53622 15.804C5.62365 16.6158 6.05115 17.0336 6.80343 17.0494C8.84654 17.0936 10.9512 17.094 13.1417 17.0535C13.9398 17.0386 14.374 16.6249 14.4633 15.7978L14.5689 14.7538C14.5998 14.4321 14.6328 14.0769 14.6678 13.691L14.8905 11.1281L15.1588 7.83954C15.1836 7.52414 15.4327 7.28238 15.7325 7.26564ZM3.10949 5.82428C2.77288 5.82428 2.5 5.54445 2.5 5.19926C2.5 4.88283 2.72929 4.62133 3.02679 4.57994L3.10949 4.57423H5.76476C6.0803 4.57423 6.35654 4.36602 6.45535 4.06604L6.47953 3.9734L6.68587 2.92106C6.86759 2.2241 7.45767 1.72787 8.14916 1.6719L8.27993 1.66663H11.7199C12.4229 1.66663 13.0436 2.12186 13.2826 2.82528L13.3228 2.96003L13.5203 3.97315C13.5822 4.29056 13.8354 4.52762 14.1417 4.5681L14.2351 4.57423H16.8905C17.2271 4.57423 17.5 4.85406 17.5 5.19926C17.5 5.51568 17.2707 5.77719 16.9732 5.81857L16.8905 5.82428H3.10949ZM11.7199 2.91667H8.27993C8.10892 2.91667 7.95691 3.01931 7.89377 3.14831L7.87235 3.20499L7.67483 4.21861C7.65067 4.34233 7.61566 4.46146 7.57093 4.57506L12.429 4.57522C12.4011 4.50434 12.377 4.43132 12.3569 4.35636L12.325 4.21836L12.1364 3.24396C12.0923 3.07489 11.9561 2.95111 11.7918 2.92281L11.7199 2.91667Z" fill="#EA7C69"/>
                        </svg>
                    </button>
                </div>  
                </div>`;

                let foodsItem = document.createElement('div')
                foodsItem.classList.add('foods__item')

                let foodsWrapper = document.createElement('div')
                foodsWrapper.classList.add('foods__wrapper')
                foodsItem.appendChild(foodsWrapper)

                let foodsLeft = document.createElement('div')
                foodsLeft.classList.add('foods__left')
                foodsWrapper.appendChild(foodsLeft)

                let foodsRight = document.createElement('div')
                foodsRight.classList.add('foods__right')
                foodsWrapper.appendChild(foodsRight)

                let foodsImageDiv = document.createElement('div')
                foodsImageDiv.classList.add('foods__image')
                foodsLeft.appendChild(foodsImageDiv)

                let foodsImg = document.createElement('img')
                foodsImg.src = `${save.image}`
                foodsImageDiv.appendChild(foodsImg)

                let foodsCounter = document.createElement('div')
                foodsCounter.classList.add('foods__counter')
                foodsLeft.appendChild(foodsCounter)

                let foodsMinus = document.createElement('div')
                foodsMinus.classList.add('foods__minus')
                foodsCounter.appendChild(foodsMinus)

                let foodsControl = document.createElement('div')
                foodsControl.classList.add('foods__control')
                foodsControl.setAttribute('data-counter', save.id);
                foodsControl.innerHTML = `${save.counter}`
                foodsCounter.appendChild(foodsControl)

                let foodsPlus = document.createElement('div')
                foodsPlus.classList.add('foods__plus')
                foodsCounter.appendChild(foodsPlus)
                
                let foodsMinusImg = document.createElement('i')
                foodsMinusImg.classList.add('ri-subtract-fill')
                foodsMinus.appendChild(foodsMinusImg)

                let foodsPlusImg = document.createElement('i')
                foodsPlusImg.classList.add('ri-add-line')
                foodsPlus.appendChild(foodsPlusImg)

                let foodsSubject = document.createElement('h3')
                foodsSubject.classList.add('foods__subject')
                foodsSubject.innerHTML = `${save.name}`
                foodsRight.appendChild(foodsSubject)

                let foodsDiv = document.createElement('div')
                foodsRight.appendChild(foodsDiv)

                let foodsSpanPrice = document.createElement('span')
                foodsSpanPrice.innerHTML = '$'
                foodsDiv.appendChild(foodsSpanPrice)

                let foodsPrice = document.createElement('h3')
                foodsPrice.classList.add('foods__price')
                foodsPrice.innerHTML = `${save.price}`
                foodsDiv.appendChild(foodsPrice)

                let foodsDiv2 = document.createElement('div')
                foodsRight.appendChild(foodsDiv2)

                let foodsSpan = document.createElement('span')
                foodsSpan.innerHTML = '$'
                foodsDiv2.appendChild(foodsSpan)

                let foodsPriceCounter = document.createElement('h3')
                foodsPriceCounter.classList.add('foods__price-counter')
                foodsPriceCounter.innerHTML = '0'
                foodsDiv2.appendChild(foodsPriceCounter)

                let foodsBtns = document.createElement('div')
                foodsBtns.classList.add('foods__btns')
                foodsItem.appendChild(foodsBtns)

                let foodsInput = document.createElement('input')
                foodsInput.type = 'text'
                foodsInput.placeholder = 'Order Note...'
                foodsBtns.appendChild(foodsInput)

                let foodsBtn = document.createElement('button')
                foodsBtn.classList.add('foods__btn-test')
                foodsBtn.setAttribute('data-productid', save.id);
                foodsBtns.appendChild(foodsBtn)

                foodsBtn.onclick = deleteLocal

                let foodsDeleteIcon = document.createElement('i')
                foodsDeleteIcon.classList.add('ri-delete-bin-7-line')
                foodsBtn.appendChild(foodsDeleteIcon)

                

                cartInner.append(foodsItem)

                // foodsPriceCounter.innerHTML = foodsPrice.innerHTML * foodsControl.innerHTML

                function counter() {
                    foodsMinus.addEventListener('click', () => {
                        foodsControl.innerHTML--
                        if (foodsControl.innerHTML < 1) {
                            foodsControl.innerHTML = 1
                        }
                        let findIdx = cartProducts.findIndex(elem => elem.id == save.id) 
                        cartProducts[findIdx].counter--
                        localStorage.setItem('productInfoLocal', JSON.stringify(cartProducts))

                        foodsPriceCounter.innerHTML = foodsPrice.innerHTML * foodsControl.innerHTML
                        
                    })

                    foodsPlus.addEventListener('click', () => {
                        let idx = cartProducts.findIndex(elem => elem.id == save.id)
                        cartProducts[idx].counter++
                        localStorage.setItem('productInfoLocal', JSON.stringify(cartProducts))

                        
                        foodsControl.innerHTML++
                        foodsPriceCounter.innerHTML = foodsPrice.innerHTML * foodsControl.innerHTML
                        
                    })
                    
                    
                }
                // counter()

                
        }
        
    }


function deleteLocal(e) {
    let productToDeleteId = e.target.dataset.productid;
    
    let cartProduc = JSON.parse(localStorage.getItem('cartProducts'));
    cartProduc = cartProduc.filter(item => item.id != productToDeleteId);
    console.log(cartProduc);
    localStorage.setItem('cartProducts', JSON.stringify(cartProduc));
    saveLocal();

    // cartProduc.forEach(elem => {
    //     // let indeX = cartProduc.find(item => elem = itemId);
    //     console.log(elem)
    // })

    // console.log(itemId)

    // let foodsBtn = document.querySelectorAll('.foods__btn-test')

    // foodsBtn.forEach(item => {
    //     item.addEventListener('click', () => {
    //        console.log(item)
    //     })
    // })
}

