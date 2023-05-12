import data from '../data.js';

const foodList=document.getElementById('foodList')
 let food;
async function start() {
    
    try {
        
        food = await fetch("http://localhost:3000/index.php").then((data)=>data.json())
        // console.log(food[0].name);
        
        data.forEach((element , i) => {
            const mydiv =document.createElement("div")
        const price =document.createElement("span")
        const image= document.createElement("img")
        mydiv.appendChild(price)
        mydiv.appendChild(image)
        price.textContent=`${food && food[i].price}$`
        // console.log(food[i].name);
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
        err.classList.add('error')
    }
}
start()
