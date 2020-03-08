let dbAct="";
let collAct="";
let documents = [];
const selectDB = (dbName) => {
  dbAct=dbName;
  document.querySelector("#collections-list").classList.remove("d-none");
  document.querySelector("#documents-list").classList.add("d-none");
  document.querySelector("#document-detail").classList.add("d-none");
  const lista = document.querySelector("#collections-list ul");
  lista.innerHTML="Loading...";
  fetch(`/collections?dbName=${dbName}`).then(res => res.json()).then((list) => {
    lista.innerHTML="";
    console.log(list);
    list.forEach(ele=>{
      const aitem= document.createElement("a");
      aitem.onclick=()=>selectCollection(ele.name);
      aitem.classList.add("w-100");
      const cre=document.createElement("li");
      cre.classList.add("list-group-item","clickable");
      cre.innerText=ele.name;
      aitem.appendChild(cre);
      lista.appendChild(aitem);
    });
  });
  const collectionsInput = document.querySelector("#collections-list input");
  collectionsInput.addEventListener("keyup", () => {
    const items = document.querySelectorAll("#collections-list li");
    items.forEach(ele => {
      if (ele.innerText.includes(dbsInput.value)) {
        ele.classList.remove("d-none");
      }
      else {
        ele.classList.add("d-none");
      }
    });
  });
};

const selectCollection = (collectionName) => {
  collAct=collectionName;
  document.querySelector("#documents-list").classList.remove("d-none");
  document.querySelector("#document-detail").classList.add("d-none");
  const lista = document.querySelector("#documents-list ul");
  lista.innerHTML = "Loading...";
  fetch(`/documents?dbName=${dbAct}&collectionName=${collectionName}`).then(res => res.json()).then((list) => {
    console.log(list);
    documents=list;
    lista.innerHTML="";
    list.forEach(ele => {
      const aitem = document.createElement("a");
      aitem.onclick = ()=>selectDocument(ele);
      aitem.classList.add("w-100");
      const cre = document.createElement("li");
      cre.classList.add("list-group-item", "clickable");
      cre.innerText = ele["_id"];
      aitem.appendChild(cre);
      lista.appendChild(aitem);
    });
  });
};

const selectDocument = (doc) => {
  document.querySelector("#document-detail").classList.remove("d-none");
  const lista = document.querySelector("#document-detail ul");
  lista.innerHTML = "Loading...";
  lista.innerHTML = "";
  for (let ele in doc) {
    console.log(ele);
    const cre = document.createElement("li");
    cre.classList.add("list-group-item");
    cre.innerText = `${ele} : ${doc[ele]}`;
    lista.appendChild(cre);
  }
      
};

const dbsInput =document.querySelector("#dbs-list input");
dbsInput.addEventListener("keyup",()=>{
  const items = document.querySelectorAll("#dbs-list li");
  items.forEach(ele=>{
    if (ele.innerText.includes(dbsInput.value)){
      ele.classList.remove("d-none");
    }
    else{
      ele.classList.add("d-none");
    }
  });
});


const add = () => {
  const modal = document.querySelector("#add-modal");
  console.log(modal);
  for (let ele in documents[0]) {
    let cont =document.createElement("div");
    cont.classList.add("col-4");
    cont.innerHTML=`<label class ="form-group">
      <span>${ele}</span>
      <input class="form-control" type="text" name=${ele} >
    </label>`;
    modal.appendChild(cont);
  }
};

const edit = () => {

};

const saveNew = ()=>{
  let data = document.querySelector("#addForm");
  console.log(data);
};

const saveEdit = () => {
};