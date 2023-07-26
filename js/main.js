var products = document.querySelectorAll("#buy")
var content =document.querySelector("#content")
var btn =document.querySelector("#result")
var select =document.querySelector("#select")
var show = document.querySelector("#show-res")
var phones = document.querySelector("#phones")
var labtop = document.querySelector("#labtop")
var smart = document.querySelector("#smart")
var sectionPhones = document.querySelector("#section-phones")
var sectionLabtop = document.querySelector("#section-labtop")
var sectionSmart = document.querySelector("#section-smart")

var res = 0

phones.ondblclick = function(){
    sectionPhones.style.display="block"
}
phones.onclick = function(){
    sectionPhones.style.display="none"
}
labtop.ondblclick = function(){
    sectionLabtop.style.display="block"
}
labtop.onclick = function(){
    sectionLabtop.style.display="none"
}
smart.ondblclick = function(){
    sectionSmart.style.display="block"
}
smart.onclick = function(){
    sectionSmart.style.display="none"
}
products.forEach(function(item){
    item.onclick = function(){
        // res of products
        res += +(item.getAttribute("price"))
        select.style.display="block"    
        content.innerHTML += item.textContent + "<br>"
        if (content.innerHTML !="" )
        {
            btn.style.display="block"
        }
    }
})
// Show Res on your div 
btn.onclick = function(){
    show.innerHTML= "The Total Price For Your Products is : " + res
    
}

