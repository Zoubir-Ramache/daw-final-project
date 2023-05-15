const divtables = document.getElementById('tables')



//? for checked tables

for (let i = 1; i < 9; i++) {
    const element = document.getElementById(`table${i}`);
    element.checked=null
    document.getElementById(`send${i}`).style.display="none"
    document.getElementById(`date${i}`).style.display="none"
    
    element.onchange=()=>{
        if(element.checked){
            const date =document.getElementById(`date${i}`)
            date.style.display="inline-block"
            date.onchange=()=>{
                document.getElementById(`send${i}`).style.display="inline-block"
            }
        }else{
            document.getElementById(`date${i}`).style.display="none"
            document.getElementById(`send${i}`).style.display="none"
        }

    }
    
}

const send= async(i)=>{

    const date = document.getElementById(`date${i}`).value
    const userid =localStorage.getItem('user')
    let response;
    await fetch("http://localhost:3000/index.php", {
        method: 'POST',
        body: JSON.stringify({method:'booktable'  , id: userid , tableid:i , date:date }),
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
        alert('your request has been send ')
    }

}

