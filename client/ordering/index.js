import data from '../data.js';

const foodList=document.getElementById('foodList')
 let food;
 const handlorder =async() =>{

 }
async function  start() {
    
    try {
        
        food = await fetch("http://localhost:3000/index.php").then((data)=>data.json())
        
        data.forEach((element , i) => {
            const mydiv =document.createElement("div")
        const price =document.createElement("span")
        const order =document.createElement("button")

        const image= document.createElement("img")
        mydiv.appendChild(price)
        mydiv.appendChild(image)
        mydiv.appendChild(order)
        order.classList.add('order')
        order.onclick=handlorder()
        order.textContent="order"
        price.textContent=`${food && food[i].price}$`
        price.classList.add("price")
        mydiv.classList.add("mydiv")
        image.src=`../${element.url}`
        image.classList.add("food")
        
        foodList.appendChild(mydiv)
        
    });
    } catch (error) {
        console.log(error);
        const err = document.createElement('div')
        err.textContent=error
        document.body.appendChild(err)
    }
}
start()
