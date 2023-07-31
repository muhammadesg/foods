const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const select = document.querySelector('.select')
    const caret = document.querySelector('.caret')
    const dropmenu = document.querySelector('.dropmenu')
    const options = document.querySelectorAll('.dropmenu__item')
    const selected = document.querySelector('.selected')



    select.addEventListener('click', () => {
        
        select.classList.toggle('select-clicked')

        caret.classList.toggle('caret-rotate')

        dropmenu.classList.toggle('dropmenu-open')
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML

            select.classList.remove('select-clicked')

            caret.classList.remove('caret-rotate')

            dropmenu.classList.remove('dropmenu-open')

            options.forEach(option => {
                option.classList.remove('active')
            })

            option.classList.add('active')
        })
    })

    
})


// window.onclick = () => {
//     dropmenu.classList.remove('dropmenu-open')
// }