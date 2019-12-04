// mouseover
let funBusImg = document.querySelector("header img")
funBusImg.addEventListener("mouseover",function(){
    funBusImg.style.transform = "rotate(180deg)"
})
document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("mouseover", function(){
        element.textContent = "Just Click!"
    })
})

// mouseout
funBusImg.addEventListener("mouseout", function(){
    funBusImg.style.transform = "rotate(0deg)"
    //funBusImg.style.zIndex = "1000";
})
// Try to set navigation bar with a fixed position in front
// document.querySelector(".main-navigation .nav-container").display.zIndex = "1";

document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("mouseout",function(){
        element.style.backgroundColor = "red"
        element.textContent = "Come Back!"
    })
})



// click
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("click", function(){
    logoHeading.textContent = "WELCOME TO THE BUS"
    logoHeading.style.color = "yellow";  
})

let secondHeads = document.querySelectorAll(".text-content h2").forEach(element =>{
    element.addEventListener("click",function(){
        element.textContent = "This is an h2";
    })
})

// keydown

let entire = document.querySelector("html");
entire.addEventListener("keydown", function(){
    logoHeading.style.transform = "rotateY(-360deg)";
    logoHeading.style.transitionDuration = "2s";
})

// wheel
function zoom(event) {
      event.preventDefault();
    
      scale += event.deltaY * -0.01;
    
      // Restrict scale
      scale = Math.min(Math.max(.125, scale), 4);
    
      // Apply scale transform
      el.style.transform = `scale(${scale})`;
    }
    
    let scale = 1;
    const el = document.querySelector('.img-content');
    el.onwheel = zoom;

// dblclick
let lastPic = document.querySelector(".content-destination img");
lastPic.addEventListener("dblclick",function(){
    lastPic.style.filter = "grayscale(100%)"
})

// resize
window.addEventListener("resize", function(){
    entire.style.backgroundColor = "hotpink";
})

let thirdImg = document.querySelector(".img-fluid");
window.addEventListener("resize", function(){
    thirdImg.style.display = "none";
})


// nesting example - stop propagation
let dest = document.querySelector("footer") // maybe "footer p"

let hw = document.createElement("div")
let hw_2 = document.createElement("div") // second div to be nested  

let textNode1 = document.createTextNode("ONE ONE ONE ") // create txt nodes for each child of the footer 
let textNode2 = document.createTextNode("Two TWO TWO")

dest.prepend(hw) // nest hw div in footer

hw.appendChild(hw_2) // nest hw_2 div in hw div
hw.appendChild(textNode1) // put text in the hw div

hw_2.appendChild(textNode2) // put text in the hw 2 div


// give each the same addEventListener
dest.addEventListener("click", function(){
    dest.style.backgroundColor = "red"
    //console.log("Me Last")
})
hw.addEventListener("click", function(){
    hw.style.backgroundColor = "white"
    //console.log("Me Second")
})
hw_2.addEventListener("click",function(){
    hw_2.style.backgroundColor = "blue"
    event.stopPropagation();
    //console.log("Me First")
})

let navLink = document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("click",function(event){
        event.preventDefault();
    })
})










