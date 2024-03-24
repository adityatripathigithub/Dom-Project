var arr = [{
    dp:
     "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    story:
        "https://images.unsplash.com/photo-1709136494437-5b3e29bfe62b?q=80&w=2596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
    dp: "https://media.istockphoto.com/id/1388767502/photo/red-haired-woman-handsome-dark-skinned-man-standing-back-to-back-writing-messages-through.webp?b=1&s=170667a&w=0&k=20&c=-QDMRPGJiNF87C-n-SxZyPvkYJjUYb3Y7h4ijetpWFM=",
    story:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
    dp: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    story:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp: "https://images.unsplash.com/photo-1553782376-b3c480f5fea7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
        "https://images.unsplash.com/photo-1553782376-b2e8256ab838?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    story:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
]

var stories = document.querySelector(".stories")
var clutter = ""

arr.forEach(function(elem,idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`

})

document.querySelector(".stories")
.innerHTML = clutter

stories.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function() {
    document.querySelector(".full-screen").style.display = "none"

        
    },1000)
})
    

const body = document.querySelector(".body")
const button = document.querySelector("button")

button.addEventListener("click",function() {
    if (button.innerHTML === "Follow"){
        button.innerHTML = "Unfollow"
        button.style.backgroundColor= "red"
        
        
    }else {
        button.innerHTML = "Follow";
        button.style.backgroundColor= "green"
        button.style.color= "white"
    }
    
    
})


const heart1 = document.querySelector(".heart1")
body.addEventListener("dblclick", function(){
    heart1.style.opacity= 1
    heart1.style.scale= 1

    setTimeout(function() {
        
        heart1.style.opacity= 0
        heart1.style.scale= 0
    },350)
})

const heart2 = document.querySelector(".heart2")

body.addEventListener("click", function(){
    heart2.style.color= "red"
})
