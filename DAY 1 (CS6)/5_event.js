function sayHello(){
    console.log('Hello World')
}

document
.getElementById('btnClickme')
.addEventListener('click',function(evt){
    console.log('Hello World 2')
}
)

document
.getElementById('btnClickme')
.addEventListener('click',(evt)=>{
    console.log('Hello World 3')
}
)