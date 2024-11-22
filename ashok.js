const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let list=document.querySelector("#list");
let crossi=document.querySelector('.crossi');
let menu= document.querySelector('.menu');
let body=document.querySelector('body');
let photo=document.querySelectorAll('.intro');
photo.forEach(function(ph){
    ph.addEventListener('mouseenter',function(){
        var bg=ph.getAttribute('bimg');
        
body.style.background=`url(${bg}) no-repeat`;
body.style.backgroundSize='contain'

    })
})

// 
// 
menu.addEventListener('click',function(){
    list.style.transform='scaleX(1)'
    menu.style.display='none'
    crossi.style.display="flex"
})
crossi.addEventListener('click',function(){
    list.style.transform='scaleX(0)'
    menu.style.display='flex'
    crossi.style.display="none"
})
