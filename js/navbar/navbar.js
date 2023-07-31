let list = document.querySelectorAll('.navbar__item')
let dropExpensive = document.querySelector('.sorting__expensive')
let dropCheap = document.querySelector('.sorting__cheap')
let dropPopular = document.querySelector('.sorting__popular')



dropPopular.onclick = () => {

    // let sortedProducts = productInfo.sort((a,b) => b.popularRate - a.popularRate);
    // dishes(sortedProducts)

    for (let i = 0; i < productInfo.length; i++) {
        for (let j = i; j < productInfo.length; j++) {
            if (productInfo[i].popularRate > productInfo[j].popularRate) {
                let temp = productInfo[i]
                productInfo[i] = productInfo[j]
                productInfo[j] = temp
                
            }
            // console.log(productInfo)
            dishes(productInfo)
        }
    }
    
}

dropExpensive.onclick = () => {
    console.log(productInfo)
    for (let i = 0; i < productInfo.length; i++) {
        for (let j = i; j < productInfo.length; j++) {
            if (productInfo[i].price < productInfo[j].price) {
                let temp = productInfo[i]
                productInfo[i] = productInfo[j]
                productInfo[j] = temp
                
            }
            // console.log(productInfo)
            dishes(productInfo)
        }
    }

    // let sortedProducts = productInfo.sort((a,b) => b.price - a.price);
    // console.log(sortedProducts)
    // dishes(sortedProducts);

    // let filteredProducts = productInfo.filter(item => )
}

dropCheap.onclick = () => {
    console.log('cheap')
    for (let i = 0; i < productInfo.length; i++) {
        for (let j = i; j < productInfo.length; j++) {
            if (productInfo[i].price > productInfo[j].price) {
                let temp = productInfo[i]
                productInfo[i] = productInfo[j]
                productInfo[j] = temp
                
            }
            dishes(productInfo)
        }
    }

    // let sortedProducts = productInfo.sort((a,b) => a.price - b.price);
    // console.log(sortedProducts)

    // dishes(sortedProducts);
}

function activeLink() {
    list.forEach((item) => item.classList.remove('nav_active'))
    this.classList.add('nav_active')
}

list.forEach((item) => item.addEventListener('click', activeLink))

list.forEach((item) => {
    item.addEventListener('click', () => {
        let res = item.getAttribute('value')
        console.log(res)

        const Categories = productInfo.filter((elem) => {
            return elem.category.includes(res)
        })
        dishes(Categories) 
    })
})

let productInfo = [
    { 
        id: 1,
        name: 'Spicy seasoned seafood noodles',
        price: 29.29,
        image: 'img/products/product_img1.png',
        category: ['All', 'Soup'],
        bowls: '20 Bowls available',
        popularRate: 10,
        counter: 1,
    },
    {
        id: 2,
        name: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        image: 'img/products/product_img2.png',
        bowls: '11 Bowls available',
        category: ['All', 'Appetizer'],
        popularRate: 50,
        counter: 1,
    },
    {
        id: 3,
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        image: 'img/products/product_img3.png',
        bowls: '16 Bowls available',
        category: ['All', 'Cold Dishes', 'Soup', 'Appetizer'],
        popularRate: 100,
        counter: 1,
    },
    {
        id: 4,
        name: 'Healthy noodle with spinach leaf',
        price: 3.29,
        image: 'img/products/product_img4.png',
        bowls: '22 Bowls available',
        category: ['All', 'Appetizer'],
        popularRate: 200,
        counter: 1,
    },
    { 
        id: 1,
        name: 'Spicy seasoned seafood noodles',
        price: 2.29,
        image: 'img/products/product_img1.png',
        category: ['All', 'Soup', 'Cold Dishes'],
        bowls: '20 Bowls available',
        popularRate: 250,
        counter: 1,
    },
    {
        id: 2,
        name: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        image: 'img/products/product_img2.png',
        category: ['All', 'Cold Dishes'],
        bowls: '11 Bowls available',
        popularRate: 300,
        counter: 1,
    },
    {
        id: 3,
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        image: 'img/products/product_img3.png',
        bowls: '16 Bowls available',
        category: ['All', 'Soup', 'Cold Dishes'],
        popularRate: 400,
        counter: 1,
    },
    {
        id: 4,
        name: 'Healthy noodle with spinach leaf',
        price: 300.29,
        image: 'img/products/product_img4.png',
        bowls: '22 Bowls available',
        category: ['All'],
        popularRate: 500,
        counter: 1,
    }
]

let products = document.querySelector('.products')

// Rename renderDishesListHTML or renderAllDishes
function dishes(productInfo) {
    products.innerHTML = ''
    for (let i of productInfo) {
        let product = document.createElement('div')
        product.classList.add('product')

        let img = document.createElement('img')
        img.classList.add('product__image')
        img.src = `${i.image}`
        product.appendChild(img)

        let title = document.createElement('h3')
        title.classList.add('product__title')
        title.innerHTML = `${i.name}`
        product.appendChild(title)

        let price = document.createElement('div')
        price.classList.add('product__price')
        price.innerHTML = `$ ${i.price}`
        product.appendChild(price)

        let text = document.createElement('p')
        text.classList.add('product__text')
        text.innerHTML = `${i.bowls}`
        product.appendChild(text)

        let btn = document.createElement('button')
        btn.classList.add('product__btn')
        btn.classList.add('test')
        btn.setAttribute('data-productid', i.id)
        btn.innerHTML = 'Add'
        product.appendChild(btn)

        products.appendChild(product)
    }
}
dishes(productInfo)
