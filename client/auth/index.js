
const handlLogin=async()=>{



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
        document.getElementById('error').style.display="block"
      }else{
        const id=response[0].id
        localStorage.setItem('user' , `${id}`)
        window.location.href="http://127.0.0.1:5501/"
      }
    

    //change the port 
}


const handlSingUp=async()=>{

  const username =document.getElementById('usernameS').value
  const password =document.getElementById('passwordS').value
  
  const userdata ={method :"sing-up" , name :username.trim() , password :password}
   let response
  await fetch("http://localhost:3000/index.php", {
      method: 'POST',
      body: JSON.stringify(userdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => response= data)
    .catch(error => {
      console.error(error)});
    if(response=="good"){
       window.location.href="http://127.0.0.1:5501/auth/"
    }else{
      document.getElementById('errorS').style.display="block"
      document.getElementById('errorS').textContent=response
      console.log(response);
    }


}

// ? for style
const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    const parentElement = input.parentElement.parentElement;
    parentElement.classList.add("box-animation");
  });
  input.addEventListener("blur", function () {
    const parentElement = input.parentElement.parentElement;
    parentElement.classList.remove("box-animation");
  });
});

const buttons = document.querySelectorAll("#multiple-btn button");
const form_container = document.getElementById('form_section')
buttons.forEach((button) => {
button.addEventListener("click", () => {
form_container.classList.toggle("left-right");

});
});


