




// let form =document.getElementById('form');
// let taskName= document.getElementById('taskName')
// let msg=document.getElementById('msg');
// let taskDate=document.getElementById('taskDate');
// let taskInfo=document.getElementById('taskInfo');
// let tasks=document.getElementById('tasks')
// let addbtn=document.getElementById("addbtn");
// //form.addEventListener("submit",(e)=>{

//    // e.preventDefault();
//    // formvalidation();
// //})

// let dataObj={};

// let formvalidation=()=>{
//     if(taskName.value ===""){
//         console.log("blank field");
//         msg.innerText=`Please fill all the field`;

//     }
//     else{
//         createTask();
//         postTask();
//         addbtn.setAttribute("ata-bs-dismiss","modal");
//         addbtn.click();
//         (()=>{
//             addbtn.setAttribute("ata-bs-dismiss","")
//         })();
// }
// }
// let createTask =()=>{
//     dataObj["name"]=taskName.value;
//         dataObj["date"]=taskDate.value;
//         dataObj["Info"]=taskInfo.value;
//         console.log("data pushed", dataObj);

// }


// let postTask=()=>{
//     tasks.innerHTML +=`<div> <span class="fw-bold">${dataObj.name}</span>
//     <span class="small text secondary">${dataObj.date}</span>
//     <p>${dataObj.Info}</p>
//     <span class="option">
//         <button class="small" data-bs-toggle="modal" data-bs-target="#form"  onclick="editTask(this)">Edit</button>
//         <button class="small"  onclick="delTask(this)">Delete</button>
//     </span>
// </div>`;
// resetFrom();

// }
//     let resetFrom=()=>{
//         taskName.value="";
//         taskDate.value="";
//         taskInfo.value="";
//         console.log("reset");

// }

// let delTask=(e)=>{
//     e.parentElement.parentElement.innerHTML=``;
//     console.log("deleted the task");

// }

// let editTask= (e)=>{
//     let papa=e.parentElement.parentElement;

//     taskName.value=papa.children[0].innerHTML;
//     taskDate.value=papa.children[1].innerHTML;
//     taskInfo.value=papa.children[2].innerHTML;
//     e.parentElement.parentElement.innerHTML=``;
    
// }


// const taskName=document.getElementById('taskName');
// const taskDate=document.getElementById('taskDate');
// const taskInfo=document.getElementById('taskInfo');
const shop= document.getElementById('shop');

async function getAllItems (){
    try{
    const res= await axios.get(`http://localhost:3000/get/getAllItems`)
    console.log(res.data);
    res.data.forEach(item => {
        ShowItem(item);
        
    });
}
catch(err){
    console.log(err)

}
}

let ShowItem=(item)=>{
    shop.innerHTML +=`<div> <span class="fw-bold">${item.id}</span>
         <span class="small text secondary">${item.itemName}</span>
        <p>${item.itemInfo}</p>
        <p>${item.itemPrice}</p>
        <p>${item.stock}</p>
        <span class="option">
           <button class="small" data-bs-toggle="modal" data-bs-target="#form"  onclick="buyOne(this)">Buy 1</button>
            <button class="small"  onclick="buyTwo(this)">Buy 2</button>
        </span>
     </div>`;


}


let buyOne=async (e)=>{
    let papaEle=e.parentElement.parentElement;
    let uId=papaEle.children[0].innerHTML;
    console.log(papaEle);
    console.log(uId);
    let buy1=await axios (`http://localhost:3000/get/buyOne/${uId}`);
    console.log(buy1);
    window.location.reload()

}
let buyTwo= async (e)=>{
    let papaEle=e.parentElement.parentElement;
    let uId=papaEle.children[0].innerHTML;
    console.log(uId);
    let buy2= await axios (`http://localhost:3000/get/buyTwo/${uId}`)
    console.log(buy2)
    window.location.reload()

}


let editTask= (e)=>{

    let pEle=e.parentElement.parentElement;
    taskName.value=pEle.children[1].innerHTML;
    //taskDate.value=pEle.children[2].innerHTML;
    taskInfo.value=pEle.children[3].innerHTML;
    let deleteValue=e;
    delTask(deleteValue);
    pEle.innerHTML=``;



}

let delTask= async (e)=>{
    try{let pEle=e.parentElement.parentElement;
        let userId = pEle.children[0].innerHTML;
        console.log(userId);
        let delreq= await axios.get(`http://localhost:3000/get/delete/${userId}`);
        console.log("Deleted user",userId);
        pEle.innerHTML=``;
    }catch(err){
        console.log(err);
    }
    


}





document.addEventListener("DOMContentLoaded", getAllItems);
