let boxArr= document.querySelectorAll('.box')
//feliratkozunk mindegyik div-re
boxArr.forEach(o=>o.addEventListener('click',myCalc))

function myCalc(){
    console.log(this.innerHTML)
    let x=this.innerHTML
    let  boxR=document.querySelector('.boxResult')
    if(x=='C'){
        boxR.innerHTML=''
    }else if(x=='='){
        boxR.innerHTML=eval(boxR.innerHTML)
    }else{
        boxR.innerHTML+=x
    }
}
