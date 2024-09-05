import {v4 as uuidv4} from "uuid";

// Custom type 

type Task = {
  id : string,
  text : string,
  completed : boolean,
  date : string
}

const list = document.querySelector<HTMLUListElement>(".todo-items");
const inputBox = document.querySelector<HTMLInputElement>("#inputbox");
const addBtn = document.querySelector<HTMLButtonElement>(".add-btn")

addBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputBox?.value == "" || inputBox?.value == null) return;
  let newTodoObj : Task = {
    id : uuidv4(),
    text : inputBox.value,
    completed : false,
    date : new Date().toLocaleDateString()
  }
  inputBox.value = "";
  addListItem(newTodoObj);

  
})


function addListItem(obj : Task){
  const item = document.createElement("div");
  item.classList.add("todo-item");
  item.id = obj.id;
  item.innerHTML = `<p>${obj.text}</p>
        <p>${obj.date}</p>
        <input type="checkbox" >`
  list?.insertAdjacentElement("beforeend", item);
}