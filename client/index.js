

    if(!localStorage.getItem('user') && localStorage.getItem('user')!='zozo'){
        window.location.href="http://127.0.0.1:5500/auth/login/"
    }



const logout=()=>{
    window.location.href="http://127.0.0.1:5500/auth/login/"
    localStorage.removeItem('user')
}
