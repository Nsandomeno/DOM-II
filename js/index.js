// mouseover
let funBusImg = document.querySelector("header img")
funBusImg.addEventListener("mouseover",function(){
    funBusImg.style.transform = "rotate(180deg)"
})

//mouseout
funBusImg.addEventListener("mouseout", function(){
    funBusImg.style.transform = "rotate(0deg)"
})
