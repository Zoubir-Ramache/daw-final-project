

    if(!localStorage.getItem('user') && localStorage.getItem('user')!='zozo'){
        window.location.href="http://127.0.0.1:5501/auth/"
    }



const logout=()=>{
    window.location.href="http://127.0.0.1:5501/auth/"
    localStorage.removeItem('user')
}
