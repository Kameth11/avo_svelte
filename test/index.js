'use strict'
const appNode = document.querySelector('#app')
const url = `https://platzi-avo.vercel.app/api/avo`;
const urlimage = `https://platzi-avo.vercel.app`


const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency:'USD',
    }).format(price)
    return newPrice

}
fetch(url)
.then((res) => res.json())
.then((resp) => resp.data.forEach((item) => {
    const todosLosItems = [];
    const img = document.createElement('img')
    img.src = `${urlimage}${item.image}`
    img.className = 'w-[80px] rounded-full'

    const title = document.createElement('h2')
    title.textContent = `${item.name}`
    title.className = 'font-medium '

    const price = document.createElement('p')
    price.textContent = formatPrice(item.price)
    price.className = 'font-bold text-slate-400'
    
    const textAndPrice = document.createElement('div')
    textAndPrice.className = 'text-left '
    textAndPrice.append(title)
    textAndPrice.append(price)
    const container = document.createElement('div')
    container.className = `flex hover:bg-sky-100 rounded
    m-3 items-center place-center content-center`
    
    container.append(img, textAndPrice)
    todosLosItems.push(container)
    appNode.append(...todosLosItems)
    }))