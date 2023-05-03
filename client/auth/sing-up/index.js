const handlclick=async()=>{

    const username =document.getElementById('username').value
    const password =document.getElementById('password').value
    const userdata ={method :"sing-up" , username :username , password :password}
    //! let response;
    await fetch("http://localhost:3000/index.php", {
        method: 'POST',
        body: JSON.stringify(userdata),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      
     // window.location.href="http://127.0.0.1:5500/auth/login/"


}
