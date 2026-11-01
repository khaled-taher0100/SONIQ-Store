
let username = document.getElementById("username")
let password = document.getElementById("password")
let email = document.getElementById("email")
let registerBtn = document.getElementById("sign-up")
// username.style.textTransform = "capitalize"

registerBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    if (username.value == "" || password.value =="" || email.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Fill Data!",
        });
    }else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("password" , password.value)
        localStorage.setItem("email" , email.value)

        Swal.fire({
            position: "center",
            icon: "success",
            title: `${localStorage.getItem("username")} تم تسجيل بياناتك بنجاح يا`,
            showConfirmButton: false,
            timer: 1600
        });
        setTimeout(() =>{
            window.location = "Login.html"
        } , 1700)
    }
})

let show = document.getElementById("show")
show.addEventListener('click' , ()=>{
    show.checked ? password.type = "text" : password.type = "password"
})
