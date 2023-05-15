import data from '../data.js';

const foodList=document.getElementById('foodList')
 let food;
async function  start() {
    
    try {
        
        food = await fetch("http://localhost:3000/index.php").then((data)=>data.json())
        
        data.forEach((element , i) => {
            const mydiv =document.createElement("div")
            const price =document.createElement("span")
            const order =document.createElement("button")

        const image= document.createElement("img")
        mydiv.appendChild(price)
        mydiv.appendChild(order)
        mydiv.appendChild(image)
        order.classList.add('order')
        order.onclick=async() =>{

            const userid =localStorage.getItem('user')
            let response;
            await fetch("http://localhost:3000/index.php", {
                method: 'POST',
                body: JSON.stringify({method:'orderfood'  , id: userid , foodname:food[i].name  }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response=>response.json())
            .then(data=> response= data)
            .catch(err=>{
                console.log(err)
            })
            if(response == "good"){

                alert('your order has been sent')
            }
        
        
        }
        order.textContent="buy"
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
        err.classList.add('error')
    }
}
const handlorder =async({test}) =>{

    alert('ok')
    console.log(test);
    const userid =localStorage.getItem('user')
    let response;
    await fetch("http://localhost:3000/index.php", {
        method: 'POST',
        body: JSON.stringify({method:'getdata'  , id: userid }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response=>response.json())
      .then(data=> response= data)
      .catch(err=>{
        console.log(err)
      })
      console.log(response);


}
    
start()
