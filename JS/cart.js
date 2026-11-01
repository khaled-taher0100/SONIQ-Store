
let ChoosenproductsContainer = document.querySelector(".ChoosenproductsContainer")
let getCart = localStorage.getItem("ProducsCart")

if (getCart) {
    let item = JSON.parse(getCart)
    drawProduct(item)
}

function drawProduct(products){
    let printProduct = products.map((item) =>{
        return`
            <div class="card p-3 text-white  leading-9 rounded-2xl mt-7 outline-3 outline-[aqua] relative grid bg-black">
                <img src="${item.img}" alt="" class="w-full h-60  object-cover  outline-1  rounded-3xl drop-shadow-lg drop-shadow-cyan-400 mb-2">
                <p>Name : <span class="font-serif font-bold text-[aqua] animate-pulse">${item.name}</span></p>
                <p>Price : <span class="font-bold text-[aqua]">${item.price} EGP</span></p>
                <p>Color : <span class="font-bold ${item.color}">${item.colorName}</span></p>
                <p class="leading-[22px]">Desc : ${item.desc}</p>
                <button id="removeFromCart" onclick= "removeFromCart(${item.id})" class="bg-black mt-5 w-[40%] place-self-center p-1 pt-2 mb-2 hover:border-b-4 border-b-4 border-black text-sm outline outline-2 outline-[aqua] font-bold text-cyan-400 rounded-xl hover:bg-[aqua] hover:text-black shadow-[0_3px_8px_3px_rgba(0,255,255,0.7)] ">Remove From Cart</button>
            </div>
        `
    })  
    ChoosenproductsContainer.innerHTML = printProduct.join("")
}

let addedItem = localStorage.getItem("ProducsCart") ? JSON.parse(localStorage.getItem("ProducsCart")) : [];
let badge = document.querySelector(".badge")
badge.style.display = "block"
badge.innerHTML = addedItem.length

function removeFromCart(id){
    let index = addedItem.findIndex((item) => item.id === id)
    addedItem.splice(index , 1)
    badge.innerHTML = addedItem.length
    localStorage.setItem("ProducsCart" , JSON.stringify(addedItem))
    ChoosenproductsContainer.innerHTML = ""
    drawProduct(addedItem)
}