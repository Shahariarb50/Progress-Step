const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')

let count = 1

next.addEventListener('click',()=>{
    count++
    if(count>circles.length){
        count=circles.length
    }
    action()
})
prev.addEventListener('click',()=>{
    count--
    if(count<1){
        count=1
    }
    action()
})

function action (){
 circles.forEach((circle,index)=>{
    console.log(circle)
    if(count>index){
        circle.classList.add('active')
        console.log(circle)
    }
    else{
        circle.classList.remove('active')
    }
 })
  
 const actives=document.querySelectorAll('.active')
 progress.style.width=(actives.length-1)/(circles.length-1)*100 + '%'
 if(actives.length === 1 ){
    prev.disabled = true
    console.log(actives.length)
 }
 else if(count === circles.length){
    next.disabled = true
 }
 else{
    prev.disabled=false
    next.disabled=false
 }

}