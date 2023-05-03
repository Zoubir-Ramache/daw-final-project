
const handlclick=()=>{

    const usernam =document.getElementById('username').value
    const password =document.getElementById('password').value
    console.log(usernam , password);
    const id=usernam
    localStorage.setItem('user' , `${id}`)
    window.location.href="http://127.0.0.1:5500/"
    //change the port 
}


