let uids = [];

async function loadUIDs(){

const res = await fetch("uids.json");
uids = await res.json();

render();

}

function render(){

const list = document.getElementById("list");
list.innerHTML="";

uids.forEach(uid=>{

const li=document.createElement("li");
li.innerText=uid;

list.appendChild(li);

});

}

function addUID(){

const input=document.getElementById("uidInput");
const uid=input.value.trim();

if(!uid)return;

uids.push(uid);

render();

alert("Remember: update uids.json manually in GitHub");

}

loadUIDs();