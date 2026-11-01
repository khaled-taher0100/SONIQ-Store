
let productsContainerHeadphones = document.querySelector(".productsContainerHeadphones")
let productsHeadphones = [
    {
        id: 1,
        img: "imgs/sony wh-1000-.png",
        name: "Sony WH-1000XM5",
        price: "7,999",
        colorName: "black",
        desc: "Premium sound with advanced noise cancellation.",
        color: "text-zinc-700",
    },
    {
        id: 2,
        img: "imgs/JBL Tune 770nc.png",
        name: "JBL Tune 770NC",
        price: "4,499",
        colorName: "White",
        desc: "Powerful bass, noise cancellation, and long battery life.",
        color: "text-white",
    },
    {
        id: 3,
        img: "imgs/Soundcore q20i.png",
        name: "Soundcore Q20i",
        price: "2,299",
        colorName: "Red",
        desc: "Comfortable wireless headphones with rich bass and noise cancellation.",
        color: "text-[red]",
    },
    {
        id: 4,
        img: "imgs/HyperX cloud 111.png",
        name: "HyperX Cloud",
        price: "4,999",
        colorName: "Black",
        desc: "Comfortable gaming headset with clear audio and microphone.",
        color: "text-zinc-700",
    },
]

let productsContainerAirPods = document.querySelector(".productsContainerAirPods")
let productsAirPods = [
    {
        id: 5,
        img: "imgs/samsung buds3 pro.png",
        name: "Samsung Galaxy Pod3 Pro",
        price: "8,999",
        colorName: "Silver",
        desc: "Premium wireless airPods delivering detaild audio, and a comfortable design.",
        color: "text-[silver]",
    },
    {
        id: 6,
        img: "imgs/JBL Wave Buds.png",
        name: "JBL Wave Pods",
        price: "1,799",
        colorName: "Gray",
        desc: "Compact true wireless airPods featuring JBL deep bass sound.",
        color: "text-[gray]",
    },
    {
        id: 7,
        img: "imgs/soundcore P40i 2.png",
        name: "Soundcore P40i",
        price: "2,799",
        colorName: "Blue",
        desc: "Feature-packed wirless airPods with adaptive noise cancelltion, powerfull base.",
        color: "text-[blue]",
    },
    {
        id: 8,
        img: "imgs/Sony WF-C700N.png",
        name: "Sony WF-C700N",
        price: "3,999",
        colorName: "White",
        desc: "Lightness wirless airpods featuring noise cancelltion, balanced sound.",
        color: "text-white",
    },
]

let productsContainerSpeakers = document.querySelector(".productsContainerSpeakers")
let productsSpeakers = [
    {
        id: 9,
        img: "imgs/JBL Flip 6.png",
        name: "JBL Flip 6",
        price: "4,999",
        colorName: "Black",
        desc: "Portable Bluetooth speaker delivering powerful sound by waterproof.",
        color: "text-zinc-700",
    },
    {
        id: 10,
        img: "imgs/JBL_CHARGE5.jpg",
        name: "JBL Charge 5",
        price: "6,499",
        colorName: "Cyan",
        desc: "Powerful portable Bluetooth speaker with bold sound, waterproof protection.",
        color: "text-[cyan]",
    },
    {
        id: 11,
        img: "imgs/Soundcore Motion+.png",
        name: "Soundcore Motion+",
        price: "4,299",
        colorName: "Red",
        desc: "High-resolution portable Bluetooth speaker featuring detailed audio, enhanced bass, and a durable design.",
        color: "text-[red]",
    },
    {
        id: 12,
        img: "imgs/Sony SRS-XB100.jpg",
        name: "Sony SRS-XB100",
        price: "2,499",
        colorName: "White",
        desc: "Compact portable Bluetooth speaker offering clear sound, enhanced bass, water resistance.",
        color: "text-white",
    },
]

let productsContainerMicrophones = document.querySelector(".productsContainerMicrophones")
let productsMicrophones = [
    {
        id: 13,
        img: "imgs/FIFINE AM8 2.jpg",
        name: "FIFINE AM8",
        price: "2,499",
        colorName: "Black",
        desc: "Dynamic USB/XLR microphone designed for streaming, gaming, and voice recording, featuring clear vocal capture.",
        color: "text-zinc-700",
    },
    {
        id: 14,
        img: "imgs/hyperx_solocast.png",
        name: "HyperX SoloCast",
        price: "2,999",
        colorName: "Black",
        desc: "Compact USB condenser microphone featuring clear audio recording, a tap-to-mute sensor.",
        color: "text-zinc-700",
    },
    {
        id: 15,
        img: "imgs/Razer seiren mini.png",
        name: "Razer Seiren Mini",
        price: "1,999",
        colorName: "Pink",
        desc: "Ultra-compact USB condenser microphone designed to capture clear voice audio.",
        color: "text-[pink]",
    },
    {
        id: 16,
        img: "imgs/FIFINE-ampligame-AM8PROT.webp",
        name: "FIFINE AM8PROT",
        price: "3,499",
        colorName: "White",
        desc: "Dynamic USB/XLR microphone designed for streaming, podcasting, and voice recording.",
        color: "text-white",
    },
]

function drawProduct(products , container ,categry){
    let printProduct = products.map((item) =>{
        return`
            <div class="card p-3 leading-9 rounded-2xl mt-7 outline-3 outline-[aqua] relative grid">
                <img src="${item.img}" alt="" class="w-full h-60  object-cover  outline-1  rounded-3xl drop-shadow-lg drop-shadow-cyan-400 mb-2">
                <p>Name : <span class="font-serif font-bold text-[aqua] animate-pulse">${item.name}</span></p>
                <p>Price : <span class="font-bold text-[aqua]">${item.price} EGP</span></p>
                <p>Color : <span class="font-bold ${item.color}">${item.colorName}</span></p>
                <p class="leading-[22px]">Desc : ${item.desc}</p>
                <button id="addToCart" onclick= "addToCart(${item.id} , '${categry}')" class="bg-black mt-5 w-[40%] place-self-center p-1 pt-2 mb-2 hover:border-b-4 border-b-4 border-black text-sm outline outline-2 outline-[aqua] font-bold text-cyan-400 rounded-xl hover:bg-[aqua] hover:text-black shadow-[0_3px_8px_3px_rgba(0,255,255,0.7)] ">Add to Cart</button>
                <i class="fa-solid fa-heart  text-2xl absolute top-5 right-5 hover:text-red-600 cursor-pointer "></i>
            </div>
        `
    })
    container.innerHTML = printProduct.join("")
}
drawProduct(productsHeadphones , productsContainerHeadphones , "Headphones")
drawProduct(productsAirPods , productsContainerAirPods , "AirPods")
drawProduct(productsSpeakers , productsContainerSpeakers , "Speakers")
drawProduct(productsMicrophones , productsContainerMicrophones , "Microphones")

let viewProductDiv = document.querySelector(".viewProduct div")
let badge = document.querySelector(".badge")
let addedItem = localStorage.getItem("ProducsCart") ? JSON.parse(localStorage.getItem("ProducsCart")) : [];

if (addedItem) {
    addedItem.map(item =>{
        viewProductDiv.innerHTML += `<p>${item.name}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}

function addToCart(id , categry){
    if (localStorage.getItem("username")) {
        let products;
    
        if(categry === "Headphones"){
            products = productsHeadphones
        }else if (categry === "AirPods"){
            products = productsAirPods
        }else if(categry === "Speakers"){
            products = productsSpeakers
        }else if(categry === "Microphones"){
            products = productsMicrophones
        }
    
        let choosenItem = products.find((item) => item.id === id)
        viewProductDiv.innerHTML += `<p>${choosenItem.name}</p>`
    
        // console.log(localStorage.getItem("ProducsCart"));
        addedItem = [...addedItem , choosenItem]
        localStorage.setItem("ProducsCart" , JSON.stringify(addedItem))
    
        let viewProductDivP = document.querySelectorAll(".viewProduct div p")
        badge.innerHTML = viewProductDivP.length
        badge.style.display = "block"
        viewProduct.style.display = "block"
    }else{
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
    }
}

let cart = document.querySelector(".cart")
let viewProduct = document.querySelector(".viewProduct")
cart.addEventListener('click' , () =>{
    if (viewProduct.innerHTML != "") {
        if (viewProduct.style.display == "block") {
            viewProduct.style.display = "none"
        }else{
            viewProduct.style.display = "block"
        }
    }
})


