const divtables = document.getElementById('tables')



//? for checked tables

for (let i = 1; i < 9; i++) {
    const element = document.getElementById(`table${i}`);
    element.onchange=()=>{
        if(element.checked){
            document.getElementById(`date${i}`).style.display="inline-block"
        }else{
            document.getElementById(`date${i}`).style.display="none"
            
        }

    }
    
}



