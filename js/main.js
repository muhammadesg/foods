//  Dates

const time = document.querySelector('.header__text');
const getTime = new Date();
const day = getTime.getDay();
const date = getTime.getDate();
const month = getTime.getMonth();
const year = getTime.getFullYear();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

time.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`;





document.addEventListener('click', function(e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains('product__btn')) {
        let productId = e.target.dataset.productid;

        // productInfo
        let productItem = productInfo.find(item => item.id == productId);

        let cartWrapper = document.querySelector('.foods__inner');

        if (cartProducts !== null) {
            console.log(cartProducts.some(item => item.id == productId))

            if (cartProducts.some(item => item.id == productId)) {
                let foundIndex = cartProducts.findIndex(item => +item.id == +productId)
                let counterHTML = cartWrapper.querySelector(`[data-counter="${productId}"]`);

                console.log(foundIndex)

                cartProducts[foundIndex].counter += 1;
                
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                counterHTML.textContent = cartProducts[foundIndex].counter;
            } else {
                cartProducts.push(productItem);
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                saveLocal()
            }
        } else {
            cartProducts = [productItem];
            localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
            saveLocal();
        }
    }
})



