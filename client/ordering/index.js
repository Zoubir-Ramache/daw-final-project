import data from '../data.js';

const foodList=document.getElementById('foodList')



data.forEach(element => {
    const mydiv =document.createElement("div")
    const price =document.createElement("span")
    const image= document.createElement("img")
    mydiv.appendChild(price)
    mydiv.appendChild(image)
    price.textContent=`${element.price}$`
    price.classList.add("price")
    mydiv.classList.add("mydiv")
    image.src=`../${element.name}`
    image.classList.add("food")

    foodList.appendChild(mydiv)
    
});
