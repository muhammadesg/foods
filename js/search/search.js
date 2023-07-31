let searchHeader = document.querySelector('.header__search')

searchHeader.addEventListener('click', () => {
    if (searchHeader.value !== productInfo.name) {
        for (let i = 0; i < productInfo.length; i++) {
            for (let j = i; j < productInfo.length; j++) {
                if (productInfo[i].popularRate < productInfo[j].popularRate) {
                    let temp = productInfo[i]
                    productInfo[i] = productInfo[j]
                    productInfo[j] = temp
                    
                }
                // console.log(productInfo)
                dishes(productInfo)
            }
        }
    }
})
