let arr=[];

function todo(){
    let value=document.getElementById("input").value;
    let date=document.getElementById("d").value;
    arr.push({va:value,da:date})
    input.value=""
    d.value=""
    disp()
}

function disp(){
    let a1=document.querySelector('.todoc')
    let html='';
    //<p> is block element so use span element
    for(let i=0;i<arr.length;i++){
        let{va,da}=arr[i]
        html +=`<div id="a"><span id="a1">${va}</span><span id="a1">${da}</span>
                <button id="del"onclick="arr.splice(${i});disp();">Delete</button></div>`
        //on delete call the fn again!
    }
    a1.innerHTML=html

}