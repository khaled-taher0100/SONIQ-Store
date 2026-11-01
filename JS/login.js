
let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign-in")

let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    if (username.value == "" || password.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Fill Data!",
        });
    }else if(!(localStorage.getItem("username"))){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "ليس لديك حساب؟ أنشيْ حساب أولاً",
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(() => {
            window.location = "register.html"
        }, 2500);
    }else{
        if (getUserName.trim() === username.value.trim() && getPassword === password.value) {
            Swal.fire({
            position: "center",
            icon: "success",
            title: `${localStorage.getItem("username")} تم تسجيل دخولك بنجاح يا`,
            showConfirmButton: false,
            timer: 1600
        });
            setTimeout(() => {
                window.location = "index.html"
            }, 1700);
        }else{
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username or Password is Wrong!",
        });
        }
    }
})

let show = document.getElementById("show")
show.addEventListener('click' , ()=>{
    show.checked ? password.type = "text" : password.type = "password"
})
