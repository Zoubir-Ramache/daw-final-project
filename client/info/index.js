import data from '../data.js';

const username = document.getElementById('username')

const orderedfood = document.getElementById('orderedfood')

const bookedTables = document.getElementById('bookedTables')


const start = async () => {

    const userId = localStorage.getItem('user')
    let response;
    await fetch("http://localhost:3000/index.php", {
        method: 'POST',
        body: JSON.stringify({ method: 'getdata', id: Number(userId) }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => response = data)
        .catch(err => {
            console.log(err)
        })
    console.log(response);
    //! name
    username.textContent = response[0][0].name

    //! orderedfood
    const orderList = [...response[1]]

    orderList.forEach((element, i) => {

        const img = document.createElement('img')

        data.forEach((el, j) => {
            if (el.name == element.name) {
                img.src = `../${el.url}`
                img.classList.add('food')
            }
        })

        orderedfood.appendChild(img)
    })

    //!booked tables
    const book = [...response[2]]

    book.forEach(element =>{
        const dv = document.createElement('div')
        dv.textContent=`table number ${element.tid} , date : ${element.date}`
        
        bookedTables.appendChild(dv)
    })

}



start()
