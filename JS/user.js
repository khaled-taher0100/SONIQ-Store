
let links = document.getElementById("links")
let userData = document.getElementById("userInfo")
let user = document.getElementById("user")

if (localStorage.getItem("username")) {
    links.remove()
    userData.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}

let logOut = document.getElementById("logOut")

logOut.addEventListener('click' , ()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes !"
}).then((result) => {
  if (result.isConfirmed){
    //   setTimeout(() => {
        // Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        // }, 500); 
        localStorage.clear()
        window.location = "register.html"
  }else{
    null
  }
});
})