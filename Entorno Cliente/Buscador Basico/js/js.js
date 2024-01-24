/* 
-Tamaños d pantallas:
    col/col-sx/col-md/col-lg/col.xl-col.xxl

-Para padding y margin se trata como flexbox(s,e,t,b):
    Ej:marging left de 6px=me-6(margin end de 6)
*/

let inputTarea=document.querySelector("input[type='text']");
let boton=document.querySelector("button");
let buscador=document.querySelector("input[type='search']");
let lista=document.querySelector("ul.list-group");

boton.addEventListener("click", e=>{
    let li=document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent=inputTarea.value;
    if(li.textContent.trim()!=""){
        lista.insertAdjacentElement("afterbegin",li);
        inputTarea.value = "";
    }

    let items=document.querySelectorAll("li.list-group-item");
    items.forEach(item=>{
        item.addEventListener("click",ev=>{
            if(ev.target.classList.contains("bg-info")){
                ev.target.classList.remove("bg-info");
            }else{
                ev.target.classList.add("bg-info");
            }
        })
    })
});

buscador.addEventListener("input", e=>{
    let items=document.querySelectorAll("li.list-group-item");
    items.forEach(li => {
        if(li.textContent.includes(e.target.value)){
            li.style.display="block";
        }else{
            li.style.display="none";
        }
    });
});

