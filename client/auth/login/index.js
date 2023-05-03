
const handlclick=async()=>{

    const usernam =document.getElementById('username').value
    const password =document.getElementById('password').value
    const userdata ={method :"login" , name :usernam , password :password}

    let response;
    await fetch("http://localhost:3000/index.php", {
        method: 'POST',
        body: JSON.stringify(userdata),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response=>response.json())
      .then(data=> response= data)
      .catch(err=>console.log(err))
      if (response === "failed") {
        document.getElementById('error').textContent="try again"
      }else{
        const id=response[0].id
        localStorage.setItem('user' , `${id}`)
        window.location.href="http://127.0.0.1:5500/"
      }
    

    //change the port 
}


