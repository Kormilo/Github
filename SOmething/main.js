const x = document.querySelector(".smallBlueBox")
console.log(x)
console.log(x.innerText)


//x.innerHTML = "<h1>Not Howdy Folks</h1>"

x.addEventListener("click", function(){
    x.style.fontSize = "30px"
    x.style.fontWeight = "bolder"

    if(x.innerText==="You may leave now."){
        x.classList.remove("smallBlueBox")
        x.innerText="Welcome back."
    }else if(x.innerText==="Welcome back."){
        
        x.classList.add("frog")
        x.classList.add("smallBlueBox")
        x.innerText="You may leave now."

    }

})

x.classList.add("frog")
//x.classList.remove("smallBlueBox")
