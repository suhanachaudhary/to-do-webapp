let input=document.querySelector("#inputbx");
let btn=document.querySelector("button");
//add eventlistener on button
btn.addEventListener("click", function(e) {
       addItem(input.value);
       input.value="";
});
//create task added
let addItem=(btn)=>{
    let listItem=document.createElement("li");
    listItem.innerHTML=`${input.value}<i>`;
    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    //remove task
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
//add task in list
    list.appendChild(listItem);
}












































//by using only input without button...............


// input.addEventListener("keyup", function(e) {
//     if(e.key=="Enter"){
//        addItem(this.value);
//        this.value="";
//     }
// });