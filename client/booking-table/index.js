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



